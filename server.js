var express = require('express'),
//var morgan = require('morgan'); // Charge le middleware de logging
//var favicon = require('serve-favicon'); // Charge le middleware de favicon
request = require('request'),
mysql = require('mysql'),
https = require('https'),
bodyParser = require("body-parser"),
session = require('express-session'),
cookieParser = require('cookie-parser'),
app = express();


//launch server (listening on port: 8080)
var server = app.listen(8080, function(){
  console.log('SERVER: listening on localhost:8080');
});

app.use(cookieParser()),
app.use(session({secret: "KemarLeSegpa"})),
app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var Users = [];

var bdd = require('./views/mysql_utilities/connection_db'),
sql = require('./views/mysql_utilities/lib_sql'),
socket = require('./socket.js')(server),
route = require('./route')(app);
