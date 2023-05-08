const express = require("express");
const http = require("http");
const path = require("path");
const socket = require("socket.io");
const { createServer } = require("vite");

async function start() {
  const app = express();
  const httpServer = http.createServer(app);
  const port = process.env.PORT || 3000;
  const io = new socket.Server(httpServer);

  const vite = await createServer({
    root: path.resolve(__dirname, "..", "src"), // la carpeta donde está ubicado el proyecto de React
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  });

  app.use(vite.middlewares);

  app.get("*", (req, res) => {
    res.send("Hello, world!");
  });

  io.on("connection", (socket) => {
    socket.on("chat:message", (data) => {
      io.sockets.emit("chat:message", data);
    });

    socket.on("chat:typing", (data) => {
      socket.broadcast.emit("chat:typing", data);
    });
  });

  httpServer.listen(port);
}

start();
