var sql = require('./views/mysql_utilities/lib_sql'),
socket = require('socket.io');

module.exports = function(server){
  var io = socket(server);

  io.on('connection', function(socket){
    console.log('SOCKET: A connection has been made');
    console.log('SOCKET: The socket is ', socket.id);

    //receive event
    socket.on('getUser', function(uid){
      console.log('SERVER: Received an id equal to ' + uid);
      sql.getUser(uid, function(result){
        socket.emit('getUser',result);
      });
    });

    socket.on('getNews', function(nid){
      console.log('SERVER: Received an id equal to ' + nid);
      sql.getNews(nid, function(result){
        socket.emit('getNews',result);
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
