var socket = require('socket.io');

module.exports = function(server){
  var io = socket(server);

  io.on('connection', function(socket){
    console.log('SOCKET: A connection has been made');
    console.log('SOCKET: The socket is ', socket.id);

    //receive event
    socket.on('getUser', function(uid){
      console.log('SERVER: Received an id equal to ' + uid);
      sql_func.getUser(uid, function(result){
        socket.emit('getUser',result);
      });
    });

    socket.on('getNews', function(nid){
      console.log('SERVER: Received an id equal to ' + nid);
      sql_func.getNews(nid, function(result){
        socket.emit('getNews',result);
      });
    });

    socket.on('disconnect', function(){
      console.log("SOCKET: Mex t'as vu ! j'ai quitté la page.");
    });
  });
}
