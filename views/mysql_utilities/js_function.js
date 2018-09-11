exports.convertDate = function(dateString) {
  var date = new Date(dateString);
  return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
}
