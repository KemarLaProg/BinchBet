var mysql = require("mysql");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
  //res.sendfile('/login/');
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});
var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1",
  database: "binchBet_db",
  port: 8889
});


io.on('connection', function (socket) {

  console.log('a client connected');

  con.query('SELECT * FROM t_user',function(err,rows){
    if(err) throw err;
    console.log('Data received from Db:\n');
    console.log(rows);
    socket.emit('showrows', rows);
  });

});
