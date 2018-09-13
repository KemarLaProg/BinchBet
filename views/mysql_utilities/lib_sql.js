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

function getGroup(id){
  bdd.db.query("SELECT * FROM `t_group` WHERE id = " + id , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}

function getUsersFromGroup(id){
  bdd.db.query("SELECT COUNT(id_user) as number FROM g_users WHERE id_group = " + id , function (err, result) {
    if(err) throw err;
    callback(result[0].number);
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
  bdd.db.query("SELECT * FROM t_game AS tg JOIN g_games AS gg WHERE gg.id_group = " + id , function (err, result) {
    if(err) throw err;
    result.forEach(function(e){
      e.date = js_func.changeDate(e.date);
      getTeam(e.h_team, function(r){
        e.h_team = r;
      });
      getTeam(e.a_team, function(r){
        e.a_team = r;
      });
      getCompetition(e.id_competition, function(r){
        e.id_competition = r;
      });
    });
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
