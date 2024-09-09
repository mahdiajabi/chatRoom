const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('کاربر متصل شد');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('کاربر خارج شد');
  });
});

server.listen(3000, () => {
  console.log('Listening on *:3000');
});
