// var config = require('./views/utilities/connection_db.js')
// var dbOptions = {
// host:         config.database.host,
// user:         config.database.user,
// password:     config.database.password,
// database:     config.database.database,
// socketPath:   config.database.socketPath
// }
//
// app.use(myConnection(mysql, dbOptions, 'pool'));

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var morgan = require('morgan'); // Charge le middleware de logging
//var favicon = require('serve-favicon'); // Charge le middleware de favicon
var request = require('request');
var mysql = require('mysql');
var https = require('https');
//var myConnection = require('express-myconnection')
var bdd = require('./mysql_utilities/connection_db').con;

app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');


var route = require('./route')(app);

io.on('connection', function(socket){
  console.log("SERVER: Mex t'as vu ! j'ai chargé la page.");
  socket.on('disconnect', function(){
    console.log("SERVER: Mex t'as vu ! j'ai quitté la page.");
  });
});



//launch server (listening on port: 8080)
http.listen(8080, function(){
  console.log('SERVER: listening on localhost:8080');
});
