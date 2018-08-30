$(document).ready(function () {

  /*$('li a').filter(function () {
   return this.href === location.href;
   }).addClass('active').siblings().removeClass('active');

   $('li a').click(function () {
   $(this).addClass('active').siblings().removeClass('active');
   });*/
  $(function () {
    $('ul li a[href^="/#' + location.pathname + '"]').addClass('active');
  });

  checkURL(); //check if the URL has a reference to a page and load it

  $('ul li a').click(function (e) {    //traverse through all our navigation links..
    checkURL(this.hash);    //.. and assign them a new onclick event, using their own hash as a parameter (#page1 for example)
  });

  setInterval("checkURL()", 250);  //check for a change in the URL every 250 ms to detect if the history buttons have been used
});

(function () {

myHTMLInclude();

function myHTMLInclude() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("include-html");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          a.removeAttribute("include-html");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          myHTMLInclude();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

})();





var lasturl = ""; //here we store the current URL hash

function checkURL(hash) {
  if (!hash)
    hash = window.location.hash;    //if no parameter is provided, use the hash value from the current address

  if (hash != lasturl) // if the hash value has changed
  {
    lasturl = hash;   //update the current hash
    loadPage(hash); // and load the new page
  }
}

function loadPage(folder, url, idPos)  //the function that loads pages via AJAX
{
  url = url.replace('#', '');    //strip the #page part of the hash and leave only the page number
  $('#' + idPos).load(folder + '/' + url + '.php');
}
