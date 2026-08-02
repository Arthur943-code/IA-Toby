const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const Database = require('better-sqlite3');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'arthur2026';

// Base de données SQLite
const db = new Database('qa.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    answered_at DATETIME
  )
`);

// Sert les fichiers depuis la racine (parce que tout est à plat sur GitHub)
app.use(express.static(__dirname));
app.use(express.json());

// Route principale = interface utilisateur
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// API pour récupérer toutes les questions (admin)
app.get('/api/questions', (req, res) => {
  const password = req.headers['x-admin-password'];
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Mot de passe incorrect' });
  }
  const questions = db.prepare('SELECT * FROM questions ORDER BY created_at DESC').all();
  res.json(questions);
});

// Socket.io
io.on('connection', (socket) => {
  console.log('Nouveau client connecté:', socket.id);

  // Utilisateur pose une question
  socket.on('ask', (data) => {
    const id = uuidv4();
    const stmt = db.prepare('INSERT INTO questions (id, question) VALUES (?, ?)');
    stmt.run(id, data.question);

    const question = {
      id,
      question: data.question,
      answer: null,
      status: 'pending',
      created_at: new Date().toISOString()
    };

    // Envoie à tous les admins
    io.emit('new_question', question);
    // Confirme à l'utilisateur
    socket.emit('question_sent', question);
  });

  // Admin répond
  socket.on('answer', (data) => {
    if (data.password !== ADMIN_PASSWORD) {
      socket.emit('error', { message: 'Mot de passe incorrect' });
      return;
    }

    const stmt = db.prepare(`
      UPDATE questions 
      SET answer = ?, status = 'answered', answered_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `);
    stmt.run(data.answer, data.id);

    const updated = db.prepare('SELECT * FROM questions WHERE id = ?').get(data.id);

    // Envoie la réponse à tout le monde (utilisateur + admin)
    io.emit('question_answered', updated);
  });

  // Admin demande la liste au démarrage
  socket.on('get_questions', (data) => {
    if (data.password !== ADMIN_PASSWORD) {
      socket.emit('error', { message: 'Mot de passe incorrect' });
      return;
    }
    const questions = db.prepare('SELECT * FROM questions ORDER BY created_at DESC').all();
    socket.emit('questions_list', questions);
  });

  socket.on('disconnect', () => {
    console.log('Client déconnecté:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Interface utilisateur : http://localhost:${PORT}`);
  console.log(`Interface admin      : http://localhost:${PORT}/admin`);
  console.log(`Mot de passe admin    : ${ADMIN_PASSWORD}`);
});
