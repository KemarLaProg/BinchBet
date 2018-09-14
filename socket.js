var sql = require('./views/mysql_utilities/lib_sql'),
    socket = require('socket.io')

module.exports = function(server){
  var io = socket(server);

  io.on('connection', function(socket){
    console.log('SOCKET: A connection has been made');
    console.log('SOCKET: The socket is ', socket.id);

    //receive event
    socket.on('getUser', function(usr){
      console.log('SERVER: Received an id equal to ' + usr);
      sql.getUser(usr, function(result){
        socket.emit('getUser',result);
      });
    });

    socket.on('getNewsList', function(){
      console.log('SERVER: Sending all the news');
      sql.getNewsList(function(result){
        socket.emit('getNewsList',result);
      });
    });

    socket.on('getNews', function(newsid){
      console.log('SERVER: Received an id equal to ' + newsid);
      sql.getNews(newsid, function(result){
        socket.emit('getNews',result);
      });
    });

    socket.on('groupGameList', function(groupid){
      console.log('SOCKET: Received an id equal to ' + groupid);
      sql.groupGameList(groupid, function(result){
        socket.emit('groupGameList',result);
      });
    });
    socket.on('getGroupRanking', function(groupid){
      console.log('SOCKET: Received an id equal to ' + groupid);
      sql.getGroupRanking(groupid, function(result){
        socket.emit('getGroupRanking',result);
      });
    });

    socket.on('getGroupsOfUser', function(usr){
      sql.getGroupsOfUser(usr, function(result){
        socket.emit('getGroupsOfUser',result);
      });
    });

    socket.on('getDataFromGroup', function(id_group,id_user){
      sql.getDataGroupListOfUser(id_group,id_user, function(name,nbrUser,rank,points,nbrMatch,stats){
        socket.emit('getDataFromGroup',name,nbrUser,rank,points,nbrMatch,stats);
      });
    });




    // socket.on('connectUser', function(usr,pwd){
    //   console.log('SERVER: Received ' + usr + ' + ' + pwd);
    //   sql.login(usr,pwd, function(result){
    //     var destination = "./accounts";
    //     if(result == true){
    //       console.log("SERVER: Connection made");
    //       socket.emit('redirect', destination);
    //     } else{
    //     //  socket.emit('redirect', false);
    //     }
    //   });
    // });
    //
    // socket.on('registerUser', function(usr,mail,pwd){
    //   sql.register(usr,mail,pwd,function(result){
    //   var destination = "./accounts";
    //     if(result == true){
    //       console.log("SERVER: Register made");
    //       socket.emit('redirect', destination);
    //     } else{
    //     //  socket.emit('redirect', false);
    //     }
    //   });
    // });

    socket.on('disconnect', function(){
      console.log("SOCKET: Mex t'as vu ! j'ai quitté la page.");
    });
  });
}
