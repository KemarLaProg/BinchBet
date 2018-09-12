'use strict';
var bdd = require('./connection_db');
var js_func = require('./js_func.inc.js');
// ACCOUNT


exports.login = function(usr, pwd, callback){
  bdd.db.query("SELECT id_user FROM t_user WHERE username = '" + usr + "' AND password = '" + pwd + "'", function (err, result) {
    if(err) throw err;
    console.log(result);
    if(result[0] !== undefined){
      callback(result[0].id_user);
    } else {
      callback(0);
    }
  });
}

exports.register = function(usr,mail,pwd,callback){
  bdd.db.query("INSERT INTO `t_user` (`username`, `password`, `email`, `rank`) VALUES ('" + usr + "','" + pwd + "','" + mail + "','2')", function (err, result) {
    if(err) throw err;
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
  bdd.db.query("SELECT * FROM t_group WHERE id = " + id , function (err, result) {
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

function searchGame(){

}

// STATS






// NEWS

exports.getNews = function(id, callback){
  bdd.db.query("SELECT * FROM t_news WHERE id_news = " + id, function (err, result) {
    if(err) throw err;
    result[0].date = js_func.changeDate(result[0].date, 'month');
    callback(result[0]);
  });
}
