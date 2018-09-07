var express = require('express');
//var morgan = require('morgan'); // Charge le middleware de logging
//var bodyParser = require('body-parser');
//var favicon = require('serve-favicon'); // Charge le middleware de favicon
var request = require('request');
var mysql = require('mysql');
var https = require('https');
var myConnection = require('express-myconnection')

var app = express();

var config = require('./views/utilities/connection_db.js')
var dbOptions = {
    host:         config.database.host,
    user:         config.database.user,
    password:     config.database.password,
    database:     config.database.database,
    socketPath:   config.database.socketPath
}

app.use(myConnection(mysql, dbOptions, 'pool'));


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
app.get('/group-add', function(req, res) {
  res.render('main.ejs', {page: 'groups/group-add.ejs'});
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
app.get('/newss', function(req, res) {
  res.render('main.ejs', {page: 'news/news.ejs'});
});

//admin
app.get('/add-data', function(req, res) {
  res.render('main.ejs', {page: 'admin/add-data.ejs'});
});

//help
app.get('/faq', function(req, res) {
  res.render('main.ejs', {page: 'other/faq.ejs'});
});
app.get('/about', function(req, res) {
  res.render('main.ejs', {page: 'other/about.ejs'});
});
app.get('/contact', function(req, res) {
  res.render('main.ejs', {page: 'other/contact.ejs'});
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
