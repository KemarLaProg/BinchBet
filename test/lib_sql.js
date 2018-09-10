'use strict';
//import {db} from './connection_db';
const mysql = require('mysql');
const request = require('request');

var db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1",
  database: "binchBet_db",
  port: 8889
});

db.connect(function(err) {
  if (err) throw err;
  console.log("SQL: Connected!");
});


// ACCOUNT

function login(usr, pwd){

}

function registration(){

}

function getUsername(id, callback){
  db.query("SELECT username FROM t_user WHERE id_user = " + id, function (err, result, fields) {
    if(err) throw err;
  //  console.log(result);
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
