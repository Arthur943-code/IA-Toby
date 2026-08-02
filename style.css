* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.chat-container, .admin-container {
  width: 100%;
  max-width: 700px;
  background: #16213e;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 85vh;
}

header {
  background: #0f3460;
  padding: 20px 24px;
  text-align: center;
}

header h1 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 0.9rem;
  opacity: 0.7;
}

.messages, .questions-list {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message {
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 12px;
  line-height: 1.4;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.message.user {
  align-self: flex-end;
  background: #e94560;
  color: white;
  border-bottom-right-radius: 4px;
}

.message.ai {
  align-self: flex-start;
  background: #1f4068;
  border-bottom-left-radius: 4px;
}

.message.pending {
  align-self: flex-start;
  background: #2a2a4a;
  font-style: italic;
  opacity: 0.8;
}

.message .label {
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 4px;
}

.input-area {
  display: flex;
  gap: 10px;
  padding: 16px 20px;
  background: #0f3460;
  border-top: 1px solid #1a1a2e;
}

.input-area input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #1a1a2e;
  color: white;
  font-size: 1rem;
  outline: none;
}

.input-area input:focus {
  box-shadow: 0 0 0 2px #e94560;
}

.input-area button, .login-box button, .answer-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #e94560;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.input-area button:hover, .login-box button:hover, .answer-btn:hover {
  background: #c73a52;
}

/* Admin */
.admin-body {
  align-items: flex-start;
  padding-top: 40px;
}

.login-box {
  padding: 40px 24px;
  text-align: center;
}

.login-box input {
  width: 100%;
  max-width: 300px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #1a1a2e;
  color: white;
  font-size: 1rem;
  margin-bottom: 12px;
  outline: none;
}

.error {
  color: #e94560;
  margin-top: 10px;
  font-size: 0.9rem;
}

.hidden {
  display: none !important;
}

.admin-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.question-card {
  background: #1f4068;
  border-radius: 12px;
  padding: 16px;
  animation: fadeIn 0.3s ease;
}

.question-card.answered {
  opacity: 0.7;
  border-left: 4px solid #4caf50;
}

.question-card.pending {
  border-left: 4px solid #e94560;
}

.question-card .q-text {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.question-card .meta {
  font-size: 0.8rem;
  opacity: 0.6;
  margin-bottom: 12px;
}

.question-card .answer-box {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.question-card .answer-box input {
  flex: 1;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background: #0f3460;
  color: white;
  outline: none;
}

.question-card .answer-text {
  background: #0f3460;
  padding: 10px 12px;
  border-radius: 6px;
  margin-top: 8px;
}

.status-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.pending {
  background: #e94560;
}

.status-badge.answered {
  background: #4caf50;
}
