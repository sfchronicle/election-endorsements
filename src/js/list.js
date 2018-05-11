require("./lib/social"); //Do not delete

// var pos = $(".button-container").offset().top - 40;
var opensection = 0;

if (screen.width <= 480) {
  var pos_lower = $(".endorsements-container").offset().top - 40;
} else {
  var pos_lower = $(".endorsements-container").offset().top + 40;
}
console.log(pos_lower);

// make all links open in new tab
$('a[href^="http"]').attr('target','_blank');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById("scroll-up-arrow-mobile-list").addEventListener("click",function(){
  $('body, html').animate({scrollTop: pos_lower});
});


window.onscroll = function() {activate()};

function activate() {

  var window_top = document.body.scrollTop;
  var div_top = document.getElementsByClassName("endorsements-container")[0].getBoundingClientRect().top + window_top;

  if (window_top < div_top) {
    $(".speciallink").removeClass("displayclass");
    $("#scroll-up-arrow-mobile-list").addClass("hidearrow");
  } else {
    $(".speciallink").addClass("displayclass");
    $("#scroll-up-arrow-mobile-list").removeClass("hidearrow");
  }

}
