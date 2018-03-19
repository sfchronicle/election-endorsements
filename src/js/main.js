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
