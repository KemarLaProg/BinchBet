$(document).ready(function () {

  $('#sidebar li a').filter(function () {
    return this.href === location.href;
  }).addClass('active').siblings().removeClass('active');

  /*$('li a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });*/
});

function goBack() {
    window.history.back();
}
