'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1",
  database: "binchBet_db",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

exports.con = con;
