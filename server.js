
const { PeerServer } = require("peer");

const PORT = Number(process.env.PORT) || 9000;

const server = PeerServer({
  port: PORT,
  path: "/peerjs",
  proxied: true
});

server.on("connection", (client) => {
  console.log("Игрок подключился:", client.getId());
});

server.on("disconnect", (client) => {
  console.log("Игрок отключился:", client.getId());
});

console.log("Backrooms server started on port", PORT);
