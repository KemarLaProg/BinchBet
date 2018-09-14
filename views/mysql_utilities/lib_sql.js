'use strict';
var bdd = require('./connection_db');
var js_func = require('./js_func.inc.js');






// ACCOUNT

exports.login = function(usr, pwd, sess, callback){
  bdd.db.query("SELECT username FROM t_user WHERE username = '" + usr + "' AND password = '" + pwd + "'", function (err, result) {
    if(err) throw err;
    if(result[0] !== undefined){
      sess.username = result[0].username;
      callback(1);
    } else {
      callback(0);
    }
  });
}

exports.register = function(usr,mail,pwd,sess,callback){
  var date = js_func.getDate();
  bdd.db.query("INSERT INTO `t_user` (`username`, `password`, `email`, `rank`, `registration`) VALUES ('" + usr + "','" + pwd + "','" + mail + "','5', '" + date +"')", function (err, result) {
    if(err) throw err;
    sess.username = usr;
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


function getNameOfGroup(id_group,callback){
  bdd.db.query("SELECT name FROM `t_group` WHERE id_group = '" + id_group + "'" , function (err, result) {
    if(err) throw err;
    callback(result);
  });
}

function getNbrUsersFromGroup(id_group,callback){
  bdd.db.query("SELECT COUNT(gu.username) as number FROM g_users as gu WHERE id_group = " + id_group , function (err, result) {
    if(err) throw err;
    callback(result);
  });
}

//Don't work
// function getRankByUserInGroup(id_group,id_user,callback){
//   bdd.db.query("SELECT FIND_IN_SET('" + id_user + "',(SELECT gu.username AS points FROM t_bet AS tb JOIN g_games AS gg ON tb.id_game = gg.id_game JOIN g_users AS gu ON gu.id_group = gg.id_group AND gu.username = tb.username WHERE gg.id_group = '" + id_group + "' GROUP BY gu.username ORDER BY SUM(tb.points) DESC) ) as Rank", function(err, result){
//     if(err) throw err;
//     callback(result);
//   });
// }
function getRankByUserInGroup(id_group,id_user,callback){
    callback(1);
}

function getTotalPointsInGroup(id_group,id_user,callback){
  bdd.db.query("SELECT SUM(points) as points FROM t_bet as b JOIN g_games as gg WHERE b.id_game = gg.id_game AND gg.id_group = " + id_group + " AND b.username = '" + id_user + "'", function (err, result){
    if(err) throw err;
    callback(result);
  });
}

function getNbrOfMatchInGroup(id_group,callback){
  bdd.db.query("SELECT COUNT(`id_game`) as nbrmatchs FROM g_games WHERE id_group = '" + id_group + "'", function (err,result){
    if(err) throw err;
    callback(result);
  });
}

function getStatsInGroupByUser(id_group,id_user,callback){
 bdd.db.query("SELECT COUNT(b.points) as nbrbets, tr.name FROM t_rules as tr JOIN g_games as gg LEFT JOIN t_bet as b ON tr.id_rules = b.points AND b.username = '" + id_user + "' AND b.done = 1 AND b.id_game = gg.id_game WHERE gg.id_group = " + id_group + " GROUP BY tr.id_rules", function (err,result){
   if(err) throw err;
    callback(result);
 });
}

exports.getDataGroupListOfUser = function(id_group,id_user,callback){
     getNameOfGroup(id_group, function(name){
       getNbrUsersFromGroup(id_group, function(nbrUser){
         getRankByUserInGroup(id_group,id_user, function(rank){
           getTotalPointsInGroup(id_group,id_user, function(points){
             getNbrOfMatchInGroup(id_group, function(nbrMatch){
               getStatsInGroupByUser(id_group,id_user, function(stats){
                 callback (name,nbrUser,rank,points,nbrMatch,stats);
               });
              });
            });
          });
        });
      });
}

function getGroupInfos(id,callback){
  bdd.db.query("SELECT * FROM `t_group` WHERE id_group = '" + id +"'", function (err, result) {
    if(err) throw err;
    callback(result);
  });
}

exports.getInfosOfGroup = function(id_group,callback){
  getGroupInfos(id_group, function(infos){
    getNbrUsersFromGroup(id_group, function(nbrUser){
      getNbrOfMatchInGroup(id_group, function(nbrMatch){
        callback(infos,nbrUser,nbrMatch);
      });
    });
  });
}

// exports.getGroup = function(id){
//   bdd.db.query("SELECT * FROM `t_group` WHERE id = " + id , function (err, result) {
//     if(err) throw err;
//     callback(result[0]);
//   });
// }

exports.getGroupsOfUser = function(username,callback){
  bdd.db.query("SELECT id_group FROM `g_users` WHERE username = '" + username + "'" , function (err, result) {
    if(err) throw err;
    callback(result);
  });
}


function getGroupList(){

}

function searchGroup(){

}

// BET
function getGameBet(uid, game, callback){
  var sql_getGameBet = "SELECT tb.username, tb.h_goal, tb.a_goal FROM t_bet AS tb JOIN t_game AS tg ON tb.id_game = tg.id_game WHERE tb.username = ? AND tg.id_game = ?"
  bdd.db.query(sql_getGameBet, uid, game_id, function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}

function getBetList(id, array){

}


// GAME

exports.groupGameList = function(id, callback){

  var sql_gameList = "SELECT tg.id_game, tc.compet_name AS competition, tg.date, tg.hour, ht.team_name AS h_team, tg.h_goal, tg.a_goal, at.team_name AS a_team FROM g_games AS gg LEFT JOIN t_game AS tg ON gg.id_game = tg.id_game LEFT JOIN t_team AS ht ON tg.h_team = ht.id_team LEFT JOIN t_team AS at ON tg.a_team = at.id_team LEFT JOIN t_competition AS tc ON tg.id_competition = tc.id_competition LEFT JOIN t_season AS ts ON tg.id_season = ts.id_season WHERE gg.id_group = ? AND ts.id_season = 1 ORDER BY tg.date DESC, tg.hour ASC";


  bdd.db.query(sql_gameList, id, function (err, result) {
    if(err) throw err;
    result.forEach(function(e){
      e.date = js_func.changeDate(e.date);

      e.h_goal = js_func.checkNull(e.h_goal);
      e.a_goal = js_func.checkNull(e.a_goal);
    });
    callback(result);
  });
}

function searchGame(){

}

// TEAM
function getTeam(id, callback){
  bdd.db.query("SELECT name FROM t_team WHERE id_team = " + id , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}

// COMPETITION
function getCompetition(id, callback){
  bdd.db.query("SELECT name FROM t_competition WHERE id_competition = " + id , function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}


// RANKING

exports.getGroupRanking = function(gid, callback){
  var sql_ranking = "SELECT gu.username, SUM(tb.points) AS points FROM t_bet AS tb JOIN g_games AS gg ON tb.id_game = gg.id_game JOIN g_users AS gu ON gu.id_group = gg.id_group AND gu.username = tb.username WHERE gg.id_group = ? GROUP BY gu.username ORDER BY SUM(tb.points) DESC";

  bdd.db.query(sql_ranking, gid, function (err, result) {
    if(err) throw err;
    callback(result);
  });

}
// STATS






// NEWS
exports.getNewsList = function( callback){
  bdd.db.query("SELECT * FROM t_news", function (err, result) {
    if(err) throw err;

    result.forEach(function(e){

      e.date = js_func.changeDate(e.date, 'month');

    });
    console.log(result);
    callback(result);
  });
}

exports.getNews = function(id, callback){
  bdd.db.query("SELECT * FROM t_news WHERE id_news = " + id, function (err, result) {
    if(err) throw err;
    result[0].date = js_func.changeDate(result[0].date, 'month');
    callback(result[0]);
  });
}

// other
function getProl(id, callback){
  bdd.db.query("SELECT * FROM t_prolongation WHERE id_prolongation = " + id, function (err, result) {
    if(err) throw err;
    callback(result[0]);
  });
}
