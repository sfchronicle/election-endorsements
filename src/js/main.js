require("./lib/social"); //Do not delete

var pos = $(".button-container").offset().top - 40;

// if reader clicks on "SF" region, show appropriate sub-regions and filter
document.getElementById("button-state").addEventListener("click",function(){
  $(".button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".State").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-region").addEventListener("click",function(){
  $(".button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".Region").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-sf").addEventListener("click",function(){
  $(".button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".SF").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-judiciary").addEventListener("click",function(){
  $(".button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").removeClass("active");
  $(".Judiciary").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

document.getElementById("button-all").addEventListener("click",function(){
  $(".button").removeClass("active");
  $(this).addClass("active");
  $(".endorsements-box").addClass("active");
  $('body, html').animate({scrollTop: pos});
});

// buttons for cuisines
var seemoreButtons = document.getElementsByClassName("see-more-mobile")
console.log(seemoreButtons);
var td;
for (var t = 0; t < seemoreButtons.length; t++){
  td = document.getElementById(seemoreButtons[t].id);
  console.log(td);
  if (typeof window.addEventListener === 'function'){
    (function (_td) {
      td.addEventListener('click', function(){
        console.log(_td.id.split("read-more-")[1])
        var buttonidx = _td.id.split("read-more-")[1];
        console.log($(this).find('.read-more-less'));
        if (document.getElementById("extras-"+buttonidx).classList.contains("show")){
          $("#extras-"+buttonidx).removeClass("show");
          $(this).find('.read-more-less').html("Read more");
        } else {
          $("#extras-"+buttonidx).addClass("show");
          $(this).find('.read-more-less').html("Read less");
        }
        $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
      });
    })(td);
  };
}

//
// // smooth scrolling down to nav elements
// $(document).on('click', 'a[href^="#"]', function(e) {
//     // target element id
//     var id = $(this).attr('href');
//     // target element
//     var $id = $(id);
//     if ($id.length === 0) {
//         return;
//     }
//     // prevent standard hash navigation (avoid blinking in IE)
//     e.preventDefault();
//     // top position relative to the document
//     var pos = $(id).offset().top - 40;
//     // animated top scrolling
//     $('body, html').animate({scrollTop: pos});
// });
//
// var navID = document.getElementById("nav");
// var profile_idx = -1;
// var a,b,c,d;
// var navoffset = 0;
//
// // find positions for the different section heds
// window.onload = function () {
//   a = $("#state").position().top - navoffset;
//   b = $("#region").position().top - navoffset;
//   c = $("#sanfrancisco").position().top - navoffset;
//   d = $("#judiciary").position().top - navoffset;
//   scroll = [a,b,c,d];
// }
//
// // scroll
// var y, section_idx;
// function activate() {
//   var sticker = document.getElementById('stick-me');
//   var sticker_ph = document.getElementById('stick-ph');
//   var window_top = document.documentElement.scrollTop || document.body.scrollTop;//document.body.scrollTop;
//   var div_top = document.getElementById('stick-here').getBoundingClientRect().top + window_top - 37;
//   var y = $(this).scrollTop();
//
//   // unfix secondary nav and remove nav highlights
//   if (window_top <= div_top){
//     for (var i=0; i<scroll.length; i++) {
//       document.getElementById("nav-element"+i).classList.remove('activelink');
//     }
//     // sticker.classList.remove('fixed-second');
//     // sticker_ph.style.display = 'none'; // removes placeholder
//
//   // fix secondary nav and highlight section in nav
//   } else if (window_top > div_top) {
//       // sticker.classList.add('fixed-second');
//       // sticker_ph.style.display = 'block'; // puts in a placeholder for where sticky used to be for smooth scrolling
//
//       // hide all active links if reader is at top of page
//       if (window_top >= a) {
//         // find out which section they are in
//         for (var i = 0; i < scroll.length; i++) {
//           if (y > scroll[i]) {
//             section_idx = i;
//           }
//           document.getElementById("nav-element"+i).classList.remove('activelink');
//         }
//         // set section to be highlighted in the nav
//         if (scroll[section_idx]){
//           document.getElementById("nav-element"+section_idx).classList.add('activelink');
//         }
//       }
//   }
// }
//
// window.onscroll = function() {activate()};
