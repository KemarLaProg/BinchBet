'use strict';
var bdd = require('./connection_db');
var js = require('./js_function');
// ACCOUNT


function login(usr, pwd){

}

function registration(){

}

function getUserId(username, callback){

}

exports.getUsername = function(id, callback){
    bdd.db.query("SELECT username FROM t_user WHERE id_user = " + id, function (err, result) {
      if(err) throw err;
      callback(result[0].username);
    });
}

exports.getUser = function(id, callback){
    bdd.db.query("SELECT * FROM t_user WHERE id_user = " + id, function (err, result) {
      if(err) throw err;
      callback(result[0]);
    });
}


// GROUPS

function getGroup(id, season){

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

    //result[0].date = js.convertDate(result[0].date);

    callback(result);
  });
}
