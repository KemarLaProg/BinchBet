function getUsername(id, callback){
  $.ajax({
    type : "POST",
    url : "/api/user/getusername/" + id,
    success: function(result){
      //console.log("Success: ", result);
       callback(result);
    },
    error : function(e) {
      console.log("ERROR: ", e);
    }
  });
}

function getUser(id, callback){
  $.ajax({
    type : "POST",
    url : "/api/user/getuser/" + id,
    success: function(result){
      //console.log("Success: ", result);
       callback(result);
    },
    error : function(e) {
      console.log("ERROR: ", e);
    }
  });
}


function getNews(id, callback){
  $.ajax({
    type : "POST",
    url : "/api/news/getnews/" + id,
    success: function(result){
      //console.log("Success: ", result);
       callback(result);
    },
    error : function(e) {
      console.log("ERROR: ", e);
    }
  });
}
