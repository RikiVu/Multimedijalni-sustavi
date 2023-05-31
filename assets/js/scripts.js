function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if(element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}

/* slider */
function beforeAfter() {
    document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
  }

jQuery(document).ready(function() {
    /*
        Navigation
    */
    $('a.scroll-link').on('click', function(e) {
        e.preventDefault();
        scroll_to($(this), $('nav').outerHeight());
    });
    /*
        Scroll to top
    */
    $('.scroll-to-top a').on('click', function(e) {
        e.preventDefault();
        var scroll_to = 0;
        if($(window).scrollTop() != scroll_to) {
            $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
        }
    });
    /*Wow*/
    new WOW().init();

    /* navbar */
   var scroll_start = 0;
   var start = $('#start');
   var offset = start.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css({'background-color': '#333', "transition": ".8s"});
       } else {
          $('#navbar').css({'background-color': 'transparent', "box-shadow": "none"});
       }
   });

    // NIVO LIGHTBOX
    $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });
});


