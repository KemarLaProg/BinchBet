'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1",
  database: "binchBet_db",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("SQL: Connected!");
});

exports.con = con;
