document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chatMessages");
    const messageInput = document.getElementById("messageInput");

    // Conecte-se ao servidor WebSocket
    const socket = new WebSocket("wss://echo.websocket.org");

    // Lide com a abertura da conexão WebSocket
    socket.addEventListener("open", function (event) {
        console.log("Conexão WebSocket aberta.");
    });

    // Lide com mensagens recebidas do servidor WebSocket
    socket.addEventListener("message", function (event) {
        const message = event.data;
        appendMessage("Outro Usuário: " + message);
    });

    // Lide com erros na conexão WebSocket
    socket.addEventListener("error", function (event) {
        console.error("Erro na conexão WebSocket:", event);
    });

    // Lide com o fechamento da conexão WebSocket
    socket.addEventListener("close", function (event) {
        console.log("Conexão WebSocket fechada.");
    });

    // Envie uma mensagem quando o usuário pressionar Enter
    messageInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter" && messageInput.value.trim() !== "") {
            const message = messageInput.value;
            appendMessage("Você: " + message);
            socket.send(message);
            messageInput.value = "";
        }
    });

    // Função para adicionar mensagens à janela de chat
    function appendMessage(message) {
        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
