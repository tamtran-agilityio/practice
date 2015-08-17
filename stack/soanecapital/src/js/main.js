/*
 * file javscript modal site
 * -------------------------
 */

/* set navigation */
$(".button-collapse").sideNav(); 


/* set slide up background use fsvs plugin */
$(function() {
  var fsvs = $.fn.fsvs({
    speed : 600,
    bodyID : 'fsvs-body',
    selector : '> .slide',
    mouseSwipeDisance : 40,
    afterSlide : function(){},
    beforeSlide : function(){},
    endSlide : function(){},
    mouseWheelEvents : true,
    mouseDragEvents : true,
    touchEvents : true,
    arrowKeyEvents : true,
    pagination : true,
    nthClasses : false,
    detectHash : true
  });


/////
  // var $active = ($("#slide-1").hasClass("active-slide")) ;
  // if ($active) {
  //   $('.big-tille').addClass('show-text');
  // }
  // if (!$active) {
  //   $('.big-tille').removeClass('show-text');
  // }
  ///  

  function scrollParallax() {
    var bigTop = $('#slide-1').offset().top;

      // fade in arrow left, right
    if (($(this).scrollTop()) > (bigTop )) {
        ('.big-tille').fadeIn();
    }
  }
});

$(function() {
  $(window).scroll(function() {
    console.log('@--',$(this).scrollTop());
    var bigTop =$('#slide-1').offset().top;
    if ($(this).scrollTop() >= bigTop) {
      alert('2');    
    };
    // setTimeout(function() {
    //   scrollParallax();
    // }, 200);
  });
});
