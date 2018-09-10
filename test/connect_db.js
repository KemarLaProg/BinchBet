'use strict';

const mysql = require('mysql');

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

exports.db = db;
