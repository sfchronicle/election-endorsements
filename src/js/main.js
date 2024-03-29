require("./lib/social"); //Do not delete

// var pos = $(".button-container").offset().top - 40;
var opensection = 0;

if (screen.width <= 480) {
  var pos_lower = $(".button-container").offset().top - 40;
} else {
  var pos_lower = $(".button-container").offset().top + 40;
}

// make all links open in new tab
$('a[href^="http"]').attr('target','_blank');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var podcastButtons = document.getElementsByClassName("podcast-link");
for (var t = 0; t < podcastButtons.length; t++){
  var td = podcastButtons[t];
  // var td = document.getElementById(podcastButtons[t].id);
  (function (td) {
    td.addEventListener('click', function(){
      document.getElementsByClassName('podcast-wrapper')[0].classList.add("show");
      document.getElementById("embedded-podcast").innerHTML = "<iframe is='responsive-iframe' interval='0' src='"+this.id.split("PODCAST")[1]+"'></iframe>";
      $('body').addClass('noscroll');
      document.getElementById("podcast-exit").classList.add('show');
    });
  })(td);
}

var videoButtons = document.getElementsByClassName("video-link");
for (var t = 0; t < videoButtons.length; t++){
  var td = document.getElementById(videoButtons[t].id);
  (function (td) {
    td.addEventListener('click', function(){
      document.getElementsByClassName('video-wrapper')[0].classList.add("show");
      document.getElementById("embedded-video").innerHTML = "<iframe allowfullscreen src='https://content.jwplatform.com/players/"+this.id.split("video")[1]+".html' style='border:0'></iframe>";
      $('body').addClass('noscroll');
      document.getElementById("video-exit").classList.add('show');
    });
  })(td);
}

document.getElementById("podcast-exit").addEventListener("click",function(){
  this.classList.remove("show");
  document.getElementsByClassName('podcast-wrapper')[0].classList.remove("show");
  $("body").removeClass("noscroll");
  document.getElementById("embedded-podcast").innerHTML = "";
});

document.getElementById("video-exit").addEventListener("click",function(){
  this.classList.remove("show");
  document.getElementsByClassName('video-wrapper')[0].classList.remove("show");
  $("body").removeClass("noscroll");
  document.getElementById("embedded-video").innerHTML = "";
});

document.getElementById("scroll-up-arrow-mobile").addEventListener("click",function(){
  $('body, html').animate({scrollTop: pos_lower});
});

var centerButtons = document.getElementsByClassName("nav-filter-button");
for (cidx=0; cidx < centerButtons.length; cidx++ ){
  var centerbutton = document.getElementById(centerButtons[cidx].id);
  (function(_centerbutton) {
    centerbutton.addEventListener("click",function(){
      $(".nav-filter-button").removeClass("active");
      $(".top-filter-button").removeClass("active");
      var slug = this.id.split("button-")[1];
      if (slug != "all" && slug != "sf"){
        $(".endorsements-box").removeClass("active");
        $("."+capitalizeFirstLetter(slug)).addClass("active");
      } else if (slug == "all"){
        $(".endorsements-box").addClass("active");
      } else if (slug == "sf") {
        $(".endorsements-box").removeClass("active");
        $(".SF").addClass("active");
      }
      $(this).addClass("active");
      $("#nav-"+slug).addClass("active");
      $('body, html').animate({scrollTop: pos_lower});
    });
  })();
}


var filterButtons = document.getElementsByClassName("top-filter-button");
for (var fidx = 0; fidx < filterButtons.length; fidx++ ){
  var filterbutton = document.getElementById(filterButtons[fidx].id);
  (function (_filterbutton) {
    filterbutton.addEventListener("click",function(){
      $(".nav-filter-button").removeClass("active");
      $(".top-filter-button").removeClass("active");
      var slug = this.id.split("nav-")[1];
      if (slug != "all" && slug != "sf"){
        $(".endorsements-box").removeClass("active");
        $("."+capitalizeFirstLetter(slug)).addClass("active");
      } else if (slug == "all"){
        $(".endorsements-box").addClass("active");
      } else if (slug == "sf") {
        $(".endorsements-box").removeClass("active");
        $(".SF").addClass("active");
      }
      $(this).addClass("active");
      $("#button-"+slug).addClass("active");
      $('body, html').animate({scrollTop: pos_lower});
    });
  })();
}

// buttons to open expanded sections
var seemoreButtons = document.getElementsByClassName("see-more-mobile")
for (var t = 0; t < seemoreButtons.length; t++){
  var td = document.getElementById(seemoreButtons[t].id);
  (function (td) {
    td.addEventListener('click', function(){
      var buttonidx = td.id.split("read-more-")[1];
      if (document.getElementById("extras-"+buttonidx).classList.contains("show")){
        $("#extras-"+buttonidx).removeClass("show");
        $('body').removeClass('noscroll');
        if (screen.width <= 480){
          $(this).find('.read-more-less').html("Read the coverage");
          $(this).find(".caretclass").toggleClass('fa-caret-down fa-caret-up');
        }
      } else {
        $("#extras-"+buttonidx).addClass("show");
        $('body').addClass('noscroll');
        if (screen.width <= 480){
          $(this).find('.read-more-less').html("See less");
          $(this).find(".caretclass").toggleClass('fa-caret-down fa-caret-up');
        }
      }
    });
  })(td);
}

// buttons to close expanded sections on desktop
if (screen.width >= 480) {
  var exitButtons = document.getElementsByClassName("exit-button")
  for (var t = 0; t < exitButtons.length; t++){
    var td = document.getElementById(exitButtons[t].id);
    (function (td) {
      td.addEventListener('click', function(){
        var buttonidx = td.id.split("exit-")[1];
        $("#extras-"+buttonidx).removeClass("show");
        $('body').removeClass('noscroll');
        $(this).find('.read-more-less').html("Read the coverage");
        // $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
      });
    })(td);
  };
}

window.onscroll = function() {activate()};

function activate() {

  var window_top = document.body.scrollTop;
  var div_top = document.getElementsByClassName("button-container")[0].getBoundingClientRect().top + window_top;

  if (window_top > div_top) {
    $(".top-filter-button").addClass("displayclass");
  } else {
    $(".top-filter-button").removeClass("displayclass");
  }

  if (window_top < div_top) {
    $(".speciallink").removeClass("displayclass");
    $("#scroll-up-arrow-mobile").addClass("hidearrow");
  } else {
    $(".speciallink").addClass("displayclass");
    $("#scroll-up-arrow-mobile").removeClass("hidearrow");
  }

}
