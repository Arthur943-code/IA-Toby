const socket = io();
const messagesDiv = document.getElementById('messages');
const form = document.getElementById('ask-form');
const input = document.getElementById('question-input');

// Stocke les questions de cette session pour afficher les réponses
const myQuestions = new Map();

function addMessage(text, type, label = null) {
  const div = document.createElement('div');
  div.className = `message ${type}`;
  if (label) {
    div.innerHTML = `<div class="label">${label}</div>${escapeHtml(text)}`;
  } else {
    div.textContent = text;
  }
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  return div;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, 'user', 'Toi');
  const pending = addMessage('En attente de réponse...', 'pending', 'Système');
  
  socket.emit('ask', { question });
  input.value = '';
  input.focus();

  // On garde une référence pour remplacer le "pending" plus tard
  myQuestions.set(question, pending);
});

socket.on('question_sent', (data) => {
  // Optionnel : on peut stocker l'id
});

socket.on('question_answered', (data) => {
  // Cherche si c'est une de nos questions
  const pendingEl = myQuestions.get(data.question);
  if (pendingEl) {
    pendingEl.className = 'message ai';
    pendingEl.innerHTML = `<div class="label">Réponse</div>${escapeHtml(data.answer)}`;
    myQuestions.delete(data.question);
  } else {
    // Si la page a été rechargée, on affiche quand même
    addMessage(data.question, 'user', 'Question');
    addMessage(data.answer, 'ai', 'Réponse');
  }
});

// Message de bienvenue
addMessage('Bonjour ! Pose ta question, je te répondrai dès que possible.', 'ai', 'Assistant');
