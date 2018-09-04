var express = require('express');
//var morgan = require('morgan'); // Charge le middleware de logging
var bodyParser = require('body-parser');
//var favicon = require('serve-favicon'); // Charge le middleware de favicon
const request = require('request');
const https = require('https');

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
app.get('/accounts', function(req, res){
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
app.get('/group-create', function(req, res) {
  res.render('main.ejs', {page: 'groups/group-create.ejs'});
});

//bets
app.get('/bet-list', function(req, res) {
  res.render('main.ejs', {page: 'bets/bet-list.ejs'});
});
app.get('/bet', function(req, res) {
  res.render('main.ejs', {page: 'bets/bet.ejs'});
});

//News
app.get('/news-list', function(req, res) {
  res.render('main.ejs', {page: 'news/news-list.ejs'});
});
app.get('/news', function(req, res) {
  res.render('main.ejs', {page: 'news/news.ejs'});
});

//help
app.get('/help', function(req, res) {
  res.render('main.ejs', {page: 'help.ejs'});
});

//other
app.get('/fetch', function(req, res) {
  res.render('select.ejs');
});

app.get('/fetch.json', function(req, app_res) {
  const api = 'https://api.sportradar.us/soccer-t3/eu/fr/tournaments/sr:tournament:8/standings.json?api_key=myjru2suj5mcbs7fjduvxx2f';
	request(api, function (err, res, body) {
	  if (err) {
	    console.log(err)
	    return
	  }else{
      var j_d = JSON.parse(body);
      app_res.json({
        fetch: j_d
      });
		}
	});
});

// relate to error 404
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable !');
});

//launch server (listening on port: 8080)
app.listen(8080);
