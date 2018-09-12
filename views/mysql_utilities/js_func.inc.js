
/**
* Description: change date format
* dateSQL : date you  want to change
* format : wich output format you'd like
**/
exports.changeDate = function(dateSQL, format){
  var mydate = new Date(dateSQL);
  var month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"][mydate.getMonth()];

  var month_cut = ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin",
  "Juil", "Août", "Sept", "Oct", "Nov", "Déc"][mydate.getMonth()];

  switch(format) {
      case 'month':
        return date = mydate.getDate() + ' ' + month + ' ' + mydate.getFullYear();
          break;
      case 'month-cut':
          return date = mydate.getDate() + ' ' + month_cut + '. ' + mydate.getFullYear();
          break;
      default:
          return date = mydate.getDate() + '.' + mydate.getMonth() + '.' + mydate.getFullYear();
  }
}
