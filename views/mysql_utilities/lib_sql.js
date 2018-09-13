'use strict';
var bdd = require('./connection_db');
var js_func = require('./js_func.inc.js');






// ACCOUNT

exports.login = function(usr, pwd, sess, callback){
  bdd.db.query("SELECT username FROM t_user WHERE username = '" + usr + "' AND password = '" + pwd + "'", function (err, result) {
    if(err) throw err;
    if(result[0] !== undefined){
      sess.username = result[0].username;
      callback(1);
    } else {
      callback(0);
    }
  });
}

exports.register = function(usr,mail,pwd,sess,callback){
  var date = js_func.getDate();
  bdd.db.query("INSERT INTO `t_user` (`username`, `password`, `email`, `rank`, `registration`) VALUES ('" + usr + "','" + pwd + "','" + mail + "','5', '" + date +"')", function (err, result) {
    if(err) throw err;
    sess.username = usr;
    callback(true);
  });
}

function getUserId(username, callback){

}

exports.getUser = function(usr, callback){
  bdd.db.query("SELECT * FROM t_user WHERE username = '" + usr + "'", function (err, result) {
    if(err) throw err;
    result[0].registration = js_func.changeDate(result[0].registration, 'month');
    callback(result[0]);
  });
}


// GROUPS


function getNameOfGroup(id_group,callback){
  bdd.db.query("SELECT name FROM `t_group` WHERE id_group = '" + id_group + "'" , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}

function getNbrUsersFromGroup(id_group,callback){
  bdd.db.query("SELECT COUNT(id_user) as number FROM g_users WHERE id_group = " + id_group , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}

function getRankingInGroup(id_group,id_user,callback){

}

function getTotalPointsInGroup(id_group,id_user,callback){
  bdd.db.query("SELECT SUM(points) as points FROM t_bet as b JOIN g_games as gg WHERE b.id_game = gg.id_game AND gg.id_group = " + id_group + " AND b.username = '" + id_user + "'", function (err, result){
    if(err) throw err;
      callback(result[0]);
  });
}

function getNbrOfMatchInGroup(id_group,callback){
  bdd.db.query("SELECT COUNT(`id_game`) as nbrmatchs FROM g_games WHERE id_group = '" + id_group + "'", function (err,result){
    if(err) throw err;
    callback(result[0]);
  });
}

function getStatsInGroupByUser(id_group,id_user,callback){
 bdd.db.query("SELECT COUNT(b.points) as nbrbets, b.points FROM t_bet as b JOIN g_games as gg WHERE b.id_game = gg.id_game AND gg.id_group = " + id_group + " AND b.username = '" + id_user + "'GROUP BY b.points", function (err,result){
   if(err) throw err;
    callback(result);
 });
}

exports.getDataGroupListOfUser = function(id_group,id_user,callback){
  //Group name
  //Nombre participants - ok
  //classement perso
  //nombre de Points
  //stats de matchs (nbr,victoire,parfait,perdu,diff,gagné)
  stats = getStatsInGroupByUser(id_group,id_user,callback)
  let groupData = {
    name: getNameOfGroup(id_group,callback)
    nbrUser: getUsersFromGroup(id_group,callback)
    ranking: getRankingInGroup(id_group,id_user,callback)
    nbrPoints: getTotalPointsInGroup(id_group,id_user,callback)
    nbrMatchs: getNbrOfMatchInGroup(id_group,callback)
    nbrLoose: stats[0]
    nbrWin: stats[1]
    nbrDiff: stats[2]
    nbrPerfect: stats[3]
  }
  callback(groupData);
}

exports.getGroup = function(id){
  bdd.db.query("SELECT * FROM `t_group` WHERE id = " + id , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}

exports.getGroupsOfUser = function(username,callback){
  bdd.db.query("SELECT id_group FROM `g_users` WHERE username = '" + username + "'" , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}


function getGroupList(){

}

function searchGroup(){

}

// BET

function getBet(id){

}

function getBetList(id, array){

}


// GAME

exports.groupGameList = function(id, callback){

  var sql_gameList = "SELECT tc.compet_name AS competition, tg.date, tg.hour, ht.team_name AS h_team, tg.h_goal, tg.a_goal, at.team_name AS a_team FROM g_games AS gg LEFT JOIN t_game AS tg ON gg.id_game = tg.id_game LEFT JOIN t_team AS ht ON tg.h_team = ht.id_team LEFT JOIN t_team AS at ON tg.a_team = at.id_team LEFT JOIN t_competition AS tc ON tg.id_competition = tc.id_competition LEFT JOIN t_season AS ts ON tg.id_season = ts.id_season WHERE gg.id_group = ? AND ts.id_season = 1 ORDER BY tg.date DESC, tg.hour ASC";


  bdd.db.query(sql_gameList, id, function (err, result) {
    if(err) throw err;
    result.forEach(function(e){
      e.date = js_func.changeDate(e.date);

      e.h_goal = js_func.checkNull(e.h_goal);
      e.a_goal = js_func.checkNull(e.a_goal);


    });
    console.log(result);
    callback(result);
  });
}

function searchGame(){

}

// TEAM
function getTeam(id, callback){
  bdd.db.query("SELECT name FROM t_team WHERE id_team = " + id , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}

// COMPETITION
function getCompetition(id, callback){
  bdd.db.query("SELECT name FROM t_competition WHERE id_competition = " + id , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}


// STATS






// NEWS
exports.getNewsList = function( callback){
  bdd.db.query("SELECT * FROM t_news", function (err, result) {
    if(err) throw err;

    result.forEach(function(e){

      e.date = js_func.changeDate(e.date, 'month');

    });
    console.log(result);
    callback(result);
  });
}

exports.getNews = function(id, callback){
  bdd.db.query("SELECT * FROM t_news WHERE id_news = " + id, function (err, result) {
    if(err) throw err;
    result[0].date = js_func.changeDate(result[0].date, 'month');
    callback(result[0]);
  });
}

// other
function getProl(id, callback){
  bdd.db.query("SELECT * FROM t_prolongation WHERE id_prolongation = " + id, function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}
