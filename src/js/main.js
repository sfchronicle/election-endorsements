require("./lib/social"); //Do not delete

var pos = $(".button-container").offset().top - 40;

// make all links open in new tab
$('a[href^="http"]').attr('target','_blank');

// if reader clicks on "SF" region, show appropriate sub-regions and filter
document.getElementById("button-state").addEventListener("click",function(){
  $(".nav-filter-button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".State").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-region").addEventListener("click",function(){
  $(".nav-filter-button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".Region").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-sf").addEventListener("click",function(){
  $(".nav-filter-button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".SF").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-judiciary").addEventListener("click",function(){
  $(".nav-filter-button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".Judiciary").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-all").addEventListener("click",function(){
  $(".nav-filter-button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

// buttons to open expanded sections
var seemoreButtons = document.getElementsByClassName("see-more-mobile")
for (var t = 0; t < seemoreButtons.length; t++){
  var td = document.getElementById(seemoreButtons[t].id);
  if (typeof window.addEventListener === 'function'){
    (function (_td) {
      td.addEventListener('click', function(){
        var buttonidx = _td.id.split("read-more-")[1];
        if (document.getElementById("extras-"+buttonidx).classList.contains("show")){
          $("#extras-"+buttonidx).removeClass("show");
          $('body').removeClass('noscroll');
          if (screen.width <= 480){
            $(this).find('.read-more-less').html("Learn more");
            $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
          }
        } else {
          $("#extras-"+buttonidx).addClass("show");
          $('body').addClass('noscroll');
          if (screen.width <= 480){
            $(this).find('.read-more-less').html("See less");
            $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
          }
        }
      });
    })(td);
  };
}

// buttons to close expanded sections on desktop
if (screen.width >= 480) {
  var exitButtons = document.getElementsByClassName("exit-button")
  var td;
  for (var t = 0; t < exitButtons.length; t++){
    td = document.getElementById(exitButtons[t].id);
    if (typeof window.addEventListener === 'function'){
      (function (_td) {
        td.addEventListener('click', function(){
          var buttonidx = _td.id.split("exit-")[1];
          $("#extras-"+buttonidx).removeClass("show");
          $('body').removeClass('noscroll');
          $(this).find('.read-more-less').html("Learn more");
          // $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
        });
      })(td);
    };
  }

}

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
