'use strict';
var bdd = require('./connection_db');
// ACCOUNT


function login(usr, pwd){

}

function registration(){

}

function getUserId(username, callback){

}

function getUsername(id, callback){
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
    getUsername(result[0].author, function(username){
      result[0].author = username;
      callback(result[0]);
    });
  });
}
