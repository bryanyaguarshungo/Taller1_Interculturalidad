const ChatView = (() => {
  const chatWindow = document.getElementById("chat-window");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  function appendMessage(message, sender = "user") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender); // Aplica clases de burbuja
    msgDiv.textContent = message;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function getInput() {
    return userInput.value;
  }

  function clearInput() {
    userInput.value = "";
  }

  function bindSend(handler) {
    sendBtn.addEventListener("click", handler);
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handler();
    });
  }

  return {
    appendMessage,
    getInput,
    clearInput,
    bindSend,
  };
})();
