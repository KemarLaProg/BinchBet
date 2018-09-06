'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "8889"
  user: "root",
  password: "root",
  database: "binchBet_db",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

exports.con = con;
