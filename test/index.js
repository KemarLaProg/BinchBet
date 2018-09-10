var express = require('express');
var socket = require('socket.io');


var sql_func = require('./lib_sql');

var app = express();

app.get('/', function(req, res){
  res.sendFile('index.html', { root : __dirname});
});

var server = app.listen(3000, function(){
  console.log('listening on localhost:3000');
});

var io = socket(server);

io.on('connection', function(socket){
  console.log('SOCKET: A connection has been made');
  console.log('SOCKET: The socket is ', socket.id);

  //receive event
  socket.on('getUsername', function(uid){
    console.log('SERVER: Received an id equal to ' + uid);
    sql_func.getUsername(uid, function(result){
      socket.emit('getUsername',result);
    });
  });


});



/*
io.on('connection', function (socket) {

console.log('a client connected');

con.query('SELECT * FROM t_user',function(err,rows){
if(err) throw err;
console.log('Data received from Db:\n');
console.log(rows);
socket.emit('showrows', rows);
});

});
*/
