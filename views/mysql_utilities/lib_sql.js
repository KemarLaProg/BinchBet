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
      callback(result);
    });
}

function getUser(id, callback){
    bdd.db.query("SELECT * FROM t_user WHERE id_user = " + id, function (err, result) {
      if(err) throw err;
      callback(result);
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

function getNews(id){
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM t_news WHERE id_news = " + id, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  });
}

exports.getUsername = getUsername;
