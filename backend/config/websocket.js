const WebSocket = require("ws");

let wss;

function setupWebSocket(server) {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("Nowe połączenie WebSocket");

    ws.on("message", (message) => {
      console.log("Otrzymano wiadomość:", message);
    });

    ws.on("close", () => {
      console.log("Połączenie WebSocket zamknięte");
    });
  });
}

function broadcast(data) {
  if (wss) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  }
}

module.exports = { setupWebSocket, broadcast };
