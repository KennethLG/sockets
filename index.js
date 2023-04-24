const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const io = new Server(httpServer)

io.on('connection', (socket) => {
    console.log('new connection!', socket.id);
})

httpServer.listen(port);

