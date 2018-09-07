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

var express = require('express'),
//var morgan = require('morgan'); // Charge le middleware de logging
//var bodyParser = require('body-parser');
//var favicon = require('serve-favicon'); // Charge le middleware de favicon
request = require('request'),
//var mysql = require('mysql');
https = require('https'),
http = require('http'),
//var myConnection = require('express-myconnection')

app = express(),

server = require('http').createServer(app),
io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
});


app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');


var page_to_load = {title:"", path: [], page:""};

function empty_ptl(){
  page_to_load.title = '';
  page_to_load.path = [];
  page_to_load.page = '';
}



// index
app.get('/', function(req, res) {
  page_to_load.title = "Accueil";
  page_to_load.page = "index.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/index', function(req, res){
  page_to_load.title = "Accueil";
  page_to_load.page = "index.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});

//account
app.get('/accounts', function(req, res){
  page_to_load.title = "Accueil";
  page_to_load.path.push('BinchBet', 'Account');
  page_to_load.page = "account/account.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/login', function(req, res) {
  page_to_load.page = "account/login.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();

});
app.get('/registration', function(req, res) {
  page_to_load.page = "account/registration.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});

//groups
app.get('/group', function(req, res) {
  page_to_load.title = "Groupe";
  page_to_load.path.push('BinchBet', 'Groups', 'Group');
  page_to_load.page = "groups/group.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/group-list', function(req, res) {
  page_to_load.title = "Mes groupes";
  page_to_load.path.push('BinchBet', 'Groups', 'Group');
  page_to_load.page = "groups/group-list.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/group-add', function(req, res) {
  page_to_load.title = "Ajouter des groupes";
  page_to_load.path.push('BinchBet', 'Groups', 'Group-add');
  page_to_load.page = "groups/group-add.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/group-create', function(req, res) {
  page_to_load.title = "Créer un groupe";
  page_to_load.path.push('BinchBet', 'Groups', 'Créer groupe');
  page_to_load.page = "groups/group-add.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});

//bets
app.get('/bet-list', function(req, res) {
  page_to_load.title = "Liste des matchs";
  page_to_load.path.push('BinchBet', 'Pronostic', 'Match');
  page_to_load.page = "bets/bet-list.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/bet', function(req, res) {
  page_to_load.title = "Pronostic";
  page_to_load.path.push('BinchBet', 'Pronostic', 'Match');
  page_to_load.page = "bets/bet.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});

//News
app.get('/news-list', function(req, res) {
  page_to_load.title = "Liste des news";
  page_to_load.path.push('BinchBet', 'Liste news');
  page_to_load.page = "news/news-list.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/newss', function(req, res) {
  page_to_load.title = "Article";
  page_to_load.path.push('BinchBet', 'Liste news', 'News');
  page_to_load.page = "news/news.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});

//admin
app.get('/add-data', function(req, res) {
  page_to_load.title = "Ajouter des données";
  page_to_load.path.push('BinchBet', 'Admin', 'Ajouter données');
  page_to_load.page = "admin/add-data.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});

//help
app.get('/faq', function(req, res) {
  page_to_load.title = "FAQ";
  page_to_load.path.push('BinchBet', 'Help', 'FAQ');
  page_to_load.page = "other/faq.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/about', function(req, res) {
  page_to_load.title = "A propos";
  page_to_load.path.push('BinchBet', 'Help', 'A propos');
  page_to_load.page = "other/about.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
});
app.get('/contact', function(req, res) {
  page_to_load.title = "Contact";
  page_to_load.path.push('BinchBet', 'Help', 'Contact');
  page_to_load.page = "other/contact.ejs";

  res.render('main.ejs', {page_to_load});

  empty_ptl();
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
