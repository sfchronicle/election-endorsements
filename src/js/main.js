require("./lib/social"); //Do not delete

var pos = $(".button-container").offset().top - 40;

// make all links open in new tab
$('a[href^="http"]').attr('target','_blank');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var centerButtons = document.getElementsByClassName("nav-filter-button");
var pos_lower = $(".button-container").offset().top + 40;
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
var pos_lower = $(".button-container").offset().top + 40;
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
  (function (_td) {
    td.addEventListener('click', function(){
      var buttonidx = _td.id.split("read-more-")[1];
      if (document.getElementById("extras-"+buttonidx).classList.contains("show")){
        $("#extras-"+buttonidx).removeClass("show");
        $('body').removeClass('noscroll');
        if (screen.width <= 480){
          $(this).find('.read-more-less').html("Read more");
          $(this).find('i').find("caretclass").toggleClass('fa-caret-down fa-caret-up');
        }
      } else {
        $("#extras-"+buttonidx).addClass("show");
        $('body').addClass('noscroll');
        if (screen.width <= 480){
          $(this).find('.read-more-less').html("See less");
          $(this).find('i').find("caretclass").toggleClass('fa-caret-down fa-caret-up');
        }
      }
    });
  })(td);
}

// buttons to close expanded sections on desktop
if (screen.width >= 480) {
  var exitButtons = document.getElementsByClassName("exit-button")
  var td;
  for (var t = 0; t < exitButtons.length; t++){
    td = document.getElementById(exitButtons[t].id);
    (function (_td) {
      td.addEventListener('click', function(){
        var buttonidx = _td.id.split("exit-")[1];
        $("#extras-"+buttonidx).removeClass("show");
        $('body').removeClass('noscroll');
        $(this).find('.read-more-less').html("Read more");
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

}

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//
//     console.log($('.extras-wrapper').scrollTop());
//
//     var scrollPos = $($.attr(this, 'href')).offset().top + $(window).scrollTop() - 50;
//     console.log(scrollPos);
//
//     $('.extras-wrapper').animate({scrollTop: scrollPos}, 500);
// });
//
// $("a").click(function(event){
//
//     event.preventDefault();
//     navto = $($(this).attr("href")).offset().top + $('.contenido').scrollTop() - 90;
//
//     if($($(this).attr("href")).offset().top != 90){ //prevent scroll to current link
//         $('.contenido').animate({
//             scrollTop: navto
//         }, 800
//         );
//     }
//
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     console.log("did this even work");
//     e.preventDefault();
//
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//     });
//   });
// });
//
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//
//     $('.extras-overlay').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });
