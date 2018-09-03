var express = require('express');
//var morgan = require('morgan'); // Charge le middleware de logging
var bodyParser = require('body-parser');
//var favicon = require('serve-favicon'); // Charge le middleware de favicon
var fetcher = require('./views/javascript/fetcher.js');

var app = express();

app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');


// index
app.get('/', function(req, res) {
  res.render('main.ejs', {page: 'index.ejs'});
});
app.get('/index', function(req, res){
  res.render('main.ejs', {page: 'index.ejs'});
});

//account
app.get('/account', function(req, res){
  res.render('main.ejs', {page: 'account/account.ejs'});
});
app.get('/login', function(req, res) {
  res.render('main.ejs', {page: 'account/login.ejs'});
});

app.get('/registration', function(req, res) {
  res.render('main.ejs', {page: 'account/registration.ejs'});
});

//groups
app.get('/group', function(req, res) {
  res.render('main.ejs', {page: 'groups/group.ejs'});
});
app.get('/group-list', function(req, res) {
  res.render('main.ejs', {page: 'groups/group-list.ejs'});
});

//bets
app.get('/bet-list', function(req, res) {
  res.render('main.ejs', {page: 'bets/bet-list.ejs'});
});

//other
app.get('/fetch', function(req, res) {
  res.json({
    fetch: fetcher.getData()
  });
//  res.render('select.ejs');
});

// relate to error 404
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');
});

//launch server (listening on port: 8080)
app.listen(8080);
