
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

  var real_month = mydate.getMonth() + 1;

  switch(format) {
      case 'month':
        return date = mydate.getDate() + ' ' + month + ' ' + mydate.getFullYear();
          break;
      case 'month-cut':
          return date = mydate.getDate() + ' ' + month_cut + '. ' + mydate.getFullYear();
          break;
      default:

          return date = mydate.getDate() + '.' + real_month + '.' + mydate.getFullYear();
  }
}

/**
* Description : Check if a string is undefined, return '' in that case
* n : string
**/
exports.checkNull = function(n){
  if(n == undefined){
    console.log('undefined');
    return '';
  } else{
    console.log('defined');
    return n;
  }
}

exports.scoreForm = function(h_goal, a_goal){
  if(h_goal == undefined || a_goal == undefined){
    return "";
  }else{
    return h_goal + " — " + a_goal;
  }
}

exports.getDate = function(){
  var now = new Date();
    y = now.getFullYear(),
    m = now.getMonth() + 1,
    d = now.getDate(),
    mm = m < 10 ? '0' + m : m,
    dd = d < 10 ? '0' + d : d;
  return date = y + '-' + mm + '-' + dd;
}
