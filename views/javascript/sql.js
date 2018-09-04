

function getUsername(id){
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT username FROM t_user WHERE id_user = " + id, function (err, result, fields) {
      if (err) throw err;
        console.log(result);
        return result;
    });
  });
}
