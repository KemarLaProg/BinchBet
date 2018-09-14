'use strict';

const mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1",
  database: "binchBet_db",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("SQL: Connected!");
});

exports.db = db;
