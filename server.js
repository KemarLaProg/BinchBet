var express = require('express');
//var morgan = require('morgan'); // Charge le middleware de logging
var bodyParser = require('body-parser');
//var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');


// index
app.get('/', function(req, res) {
  res.redirect('/index')
});
app.get('/index', function(req, res){
  res.render('index.ejs');
});

app.get('/login', function(req, res) {
  res.render('login.ejs');
});

app.get('/registration', function(req, res) {
  res.render('registration.ejs');
});

app.get('/group', function(req, res) {
  res.render('group.ejs');
});

app.get('/bet', function(req, res) {
  res.render('bet.ejs');
});


app.get('/account', function(req, res){
  //res.render('account.ejs', {idAccount: req.params.id});
  res.render('account.ejs');
});


app.get('/fetch', function(req, res) {
  res.render('binch.ejs');
});




// relate to error 404
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');
});

app.listen(8080);
