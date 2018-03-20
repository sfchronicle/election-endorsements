require("./lib/social"); //Do not delete

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // top position relative to the document
    var pos = $(id).offset().top - 80;
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

function activate() {
  var sticker = document.getElementById('stick-me');
  var sticker_ph = document.getElementById('stick-ph');
  var window_top = document.body.scrollTop;
  var div_top = document.getElementById('stick-here').getBoundingClientRect().top + window_top - 37;
  // var long = document.getElementById('long');

  if (window_top > div_top) {
      sticker.classList.add('fixed-second');
      sticker_ph.style.display = 'block'; // puts in a placeholder for where sticky used to be for smooth scrolling
      // long.style.display = 'inline-block';
  } else {
      sticker.classList.remove('fixed-second');
      sticker_ph.style.display = 'none'; // removes placeholder
      // long.style.display = 'none';
  }
}

window.onscroll = function() {activate()};



// var navID = document.getElementById("nav");
// var navposition = 400;//document.getElementById("link-nav").offsetTop+40;
// var profile_idx = -1;
// var a,b,c,d,e,f,concdiv;
// window.onload = function () {
//   var window_top = document.body.scrollTop-30;
//   a = document.getElementById('profileiain').getBoundingClientRect().top + window_top;
//   b = document.getElementById('profilelauren').getBoundingClientRect().top + window_top;
//   c = document.getElementById('profilehilary').getBoundingClientRect().top + window_top;
//   d = document.getElementById('profilejorge').getBoundingClientRect().top + window_top;
//   e = document.getElementById('profilebalint').getBoundingClientRect().top + window_top;
//   f = document.getElementById('profilegreg').getBoundingClientRect().top + window_top;
//   scroll = [a,b,c,d,e,f];
//   concdiv= document.getElementById('conclusion').getBoundingClientRect().top + window_top;
// }
//
// var y;
// var navDisplay = function() {
//   // var y = window.scrollY;
//   y = $(window).scrollTop();
//   if (y >= navposition) {
//     navID.className = "fixed show";
//   } else {
//     navID.className = "fixed hide";
//   }
//   if (y > concdiv || y < a) {
//     for (var i=0; i<6; i++) {
//       document.getElementById("prof-link-"+shortkeyList[i]).classList.remove('activelink');
//     }
//   } else {
//     for (var i = 0; i < 6; i++) {
//       if (y > scroll[i]) {
//         profile_idx = i;
//       }
//     }
//     if (shortkeyList[profile_idx]){
//       for (var i=0; i<6; i++) {
//         document.getElementById("prof-link-"+shortkeyList[i]).classList.remove('activelink');
//       }
//       document.getElementById("prof-link-"+shortkeyList[profile_idx]).classList.add('activelink');
//     }
//   }
// };
// window.addEventListener("scroll", navDisplay);
//
