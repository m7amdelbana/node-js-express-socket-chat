$(document).ready(function () {
  var socket = io.connect('http://localhost:4000');

  var inputUsername = $('#username');

  var btnChangeUsername = $('#changeUsername');

  var inputMessage = $('#message');

  var btnSend = $('#send');

  btnSend.click(function () {
    socket.emit('newMessage', { message: inputMessage.val() });
  });

  btnChangeUsername.click(function () {
    socket.emit('changeUsername', { username: inputUsername.val() });
  });

  socket.on('newMessage', (data) => {
    alert(`Message: ${data.message}, From: ${data.username}`);
  });
});
