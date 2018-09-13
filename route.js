var sql = require('./views/mysql_utilities/lib_sql'),
    request = require('request'),
    page_to_load = {title:"", path: [], page:""};

function empty_ptl(){
  page_to_load.title = '';
  page_to_load.path = [];
  page_to_load.page = '';
}

function isAuthenticated(req, res, next) {
  // do any checks you want to in here

  // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
  // you can do this however you want with whatever variables you set up
  if (req.session.username != undefined)
      return next();
    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/login');
}

module.exports = function(app){

  // index
  app.get('/', isAuthenticated, function(req, res) {
      page_to_load.title = "Accueil";
      page_to_load.page = "index.ejs";

      res.render('main.ejs', {page_to_load});

    empty_ptl();
  });
  app.get('/index', isAuthenticated, function(req, res){
    page_to_load.title = "Accueil";
    page_to_load.page = "index.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });

  //account
  app.get('/accounts', isAuthenticated, function(req, res){
    let sess = req.session;
    page_to_load.title = "Accueil";
    page_to_load.path.push('BinchBet', 'Account');
    page_to_load.page = "account/account.ejs";

    res.render('main.ejs', {
      page_to_load,
      user: sess.username
      });

    empty_ptl();
  });
  app.get('/login', function(req, res) {
    res.render('account/login.ejs');
  });

  app.post('/login', function(req,res){
    let sess = req.session;
      sql.login(req.body.inputUsername, req.body.inputPassword, sess , function(logged){
          if (logged >= 1) {
            console.log("Logged");
          res.redirect('/accounts');
        }
        else res.redirect('/signin?failed=true');
      });
  });

  app.get('/registration', function(req, res) {
    res.render('account/registration.ejs');
  });

  app.post('/registration', function(req,res){
    let sess = req.session;
      sql.register(req.body.username, req.body.email, req.body.pwd1 ,sess , function(signup){
          if (signup == true) {
            console.log("Signup and logged");
          res.redirect('/accounts');
        }
        else res.redirect('/signup?failed=true');
      });
  });

  //groups
  app.get('/group', isAuthenticated, function(req, res) {
    page_to_load.title = "Groupe";
    page_to_load.path.push('BinchBet', 'Groups', 'Group');
    page_to_load.page = "groups/group.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });
  app.get('/group-list', isAuthenticated, function(req, res) {
    let sess = req.session;
    page_to_load.title = "Mes groupes";
    page_to_load.path.push('BinchBet', 'Groups', 'Group');
    page_to_load.page = "groups/group-list.ejs";

    res.render('main.ejs', {page_to_load, user: sess.username});

    empty_ptl();
  });
  app.get('/group-add', isAuthenticated, function(req, res) {
    page_to_load.title = "Ajouter des groupes";
    page_to_load.path.push('BinchBet', 'Groups', 'Group-add');
    page_to_load.page = "groups/group-add.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });
  app.get('/group-create', isAuthenticated, function(req, res) {
    page_to_load.title = "Créer un groupe";
    page_to_load.path.push('BinchBet', 'Groups', 'Créer groupe');
    page_to_load.page = "groups/group-add.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });

  //bets
  app.get('/bet-list', isAuthenticated, function(req, res) {
    page_to_load.title = "Liste des matchs";
    page_to_load.path.push('BinchBet', 'Pronostic', 'Match');
    page_to_load.page = "bets/bet-list.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });
  app.get('/bet/:id_bet', isAuthenticated, function(req, res) {
    page_to_load.title = "Pronostic";
    page_to_load.path.push('BinchBet', 'Pronostic', 'Match');
    page_to_load.page = "bets/bet.ejs";

    res.render('main.ejs', {page_to_load, bet_id: req.params.id_bet});

    empty_ptl();
  });

  //News
  app.get('/news-list', isAuthenticated, function(req, res) {
    page_to_load.title = "Liste des news";
    page_to_load.path.push('BinchBet', 'Liste news');
    page_to_load.page = "news/news-list.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });
  app.get('/newss', isAuthenticated, function(req, res) {
    page_to_load.title = "Article";
    page_to_load.path.push('BinchBet', 'Liste news', 'News');
    page_to_load.page = "news/news.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });

  //admin
  app.get('/add-data', isAuthenticated, function(req, res) {
    page_to_load.title = "Ajouter des données";
    page_to_load.path.push('BinchBet', 'Admin', 'Ajouter données');
    page_to_load.page = "admin/add-data.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });

  //help
  app.get('/faq', isAuthenticated, function(req, res) {
    page_to_load.title = "FAQ";
    page_to_load.path.push('BinchBet', 'Help', 'FAQ');
    page_to_load.page = "help/faq.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });
  app.get('/about', isAuthenticated, function(req, res) {
    page_to_load.title = "A propos";
    page_to_load.path.push('BinchBet', 'Help', 'A propos');
    page_to_load.page = "help/about.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });
  app.get('/contact', isAuthenticated, function(req, res) {
    page_to_load.title = "Contact";
    page_to_load.path.push('BinchBet', 'Help', 'Contact');
    page_to_load.page = "help/contact.ejs";

    res.render('main.ejs', {page_to_load});

    empty_ptl();
  });

  //other
  app.get('/fetch', isAuthenticated, function(req, res) {
    res.render('select.ejs');
  });

  app.get('/fetch.json', isAuthenticated, function(req, app_res) {
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
}
