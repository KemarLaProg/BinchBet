var express = require('express'),
socket = require('socket.io'),
//var morgan = require('morgan'); // Charge le middleware de logging
//var favicon = require('serve-favicon'); // Charge le middleware de favicon
request = require('request'),
mysql = require('mysql'),
https = require('https'),

app = express();



//launch server (listening on port: 8080)
var server = app.listen(8080, function(){
  console.log('SERVER: listening on localhost:8080');
});

app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');


var bdd = require('./views/mysql_utilities/connection_db'),
sql = require('./views/mysql_utilities/lib_sql'),
api = require('./api')(app),
route = require('./route')(app);




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

  socket.on('disconnect', function(){
    console.log("SOCKET: Mex t'as vu ! j'ai quitté la page.");
  });
});
