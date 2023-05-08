const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;
const io = new socket.Server(httpServer);

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    res.send("Hello, world!");
});

io.on('connection', (socket) => {
    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data);
    })

    socket.on('chat:typing', (data) => {
        socket.broadcast.emit('chat:typing', data);
    })
})

httpServer.listen(port);

