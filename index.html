const socket = io();
const loginBox = document.getElementById('login-box');
const adminPanel = document.getElementById('admin-panel');
const questionsList = document.getElementById('questions-list');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');

let password = '';

loginBtn.addEventListener('click', () => {
  password = passwordInput.value.trim();
  if (!password) {
    loginError.textContent = 'Entre un mot de passe';
    return;
  }
  socket.emit('get_questions', { password });
});

passwordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') loginBtn.click();
});

socket.on('questions_list', (questions) => {
  loginBox.classList.add('hidden');
  adminPanel.classList.remove('hidden');
  renderQuestions(questions);
});

socket.on('error', (data) => {
  loginError.textContent = data.message;
});

socket.on('new_question', (q) => {
  if (!adminPanel.classList.contains('hidden')) {
    prependQuestion(q);
  }
});

socket.on('question_answered', (q) => {
  updateQuestion(q);
});

function renderQuestions(questions) {
  questionsList.innerHTML = '';
  questions.forEach(q => prependQuestion(q, false));
}

function prependQuestion(q, animate = true) {
  const card = document.createElement('div');
  card.className = `question-card ${q.status}`;
  card.dataset.id = q.id;

  const date = new Date(q.created_at).toLocaleString('fr-FR');

  card.innerHTML = `
    <div class="q-text">${escapeHtml(q.question)}</div>
    <div class="meta">
      <span class="status-badge ${q.status}">${q.status === 'pending' ? 'En attente' : 'Répondu'}</span>
      · ${date}
    </div>
    ${q.status === 'answered' 
      ? `<div class="answer-text">${escapeHtml(q.answer)}</div>`
      : `<div class="answer-box">
           <input type="text" placeholder="Ta réponse..." class="answer-input">
           <button class="answer-btn">Répondre</button>
         </div>`
    }
  `;

  if (q.status === 'pending') {
    const btn = card.querySelector('.answer-btn');
    const input = card.querySelector('.answer-input');
    btn.addEventListener('click', () => {
      const answer = input.value.trim();
      if (!answer) return;
      socket.emit('answer', { id: q.id, answer, password });
      btn.disabled = true;
      btn.textContent = '...';
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') btn.click();
    });
  }

  if (animate) {
    questionsList.prepend(card);
  } else {
    questionsList.appendChild(card);
  }
}

function updateQuestion(q) {
  const card = questionsList.querySelector(`[data-id="${q.id}"]`);
  if (!card) return;

  card.className = `question-card answered`;
  const date = new Date(q.created_at).toLocaleString('fr-FR');

  card.innerHTML = `
    <div class="q-text">${escapeHtml(q.question)}</div>
    <div class="meta">
      <span class="status-badge answered">Répondu</span>
      · ${date}
    </div>
    <div class="answer-text">${escapeHtml(q.answer)}</div>
  `;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
