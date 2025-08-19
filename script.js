// roblook.js

const chat = document.getElementById("chat");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Função para adicionar mensagens na tela
function appendMessage(sender, text) {
  const message = document.createElement("div");
  message.textContent = sender + ": " + text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

// Evento do botão enviar
sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text) {
    appendMessage("Você", text);
    userInput.value = "";

    // Resposta simulada do Roblook
    setTimeout(() => {
      appendMessage("Roblook", "Resposta inteligente simulada para: " + text);
    }, 500);
  }
});

// Evento de pressionar Enter para enviar mensagem
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
