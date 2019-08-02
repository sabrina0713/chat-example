var app = require('express')();
var server = require('http').Server(app);
const io = require('socket.io')(server,{
  perMessageDeflate :false
});
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

server.listen(port, function(){
  console.log('listening on *:' + port);
});
