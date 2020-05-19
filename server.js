const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

const server = app.listen(4000, () => {
  console.log('App listening on port 4000!');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A new client has been connected');

  socket.username = 'Anonymous';

  socket.on('newMessage', (data) => {
    io.sockets.emit('newMessage', {
      message: data.message,
      username: socket.username,
    });
  });

  socket.on('changeUsername', (data) => {
    socket.username = data.username;
  });
});
