var sql = require('./views/mysql_utilities/lib_sql');


module.exports = function(app){

  // API

  // USER
  app.post("/api/user/getusername/:id", function(req,res){
    sql.getUsername(req.params.id, function(result){
      console.log("SERVER: Send username " + result);
      return res.send(result);
    });
  });

  app.post("/api/user/getuser/:id", function(req,res){
    sql.getUser(req.params.id, function(result){
      console.log("SERVER: Send user " + req.params.id);
      return res.send(result);
    });
  });


// NEWS
  app.post("/api/news/getnews/:id", function(req,res){
    sql.getNews(req.params.id, function(result){
      console.log("SERVER: Send news " + req.params.id);
      return res.send(result);
    });
  });





}
