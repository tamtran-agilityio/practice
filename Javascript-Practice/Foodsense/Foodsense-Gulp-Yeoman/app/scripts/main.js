/* Javascript file */
!(function ( $ ) {
  'use strict';

  var $li = $('ul.navigation li');
  var $listSlide = $('.slide__item');
  var lastElem = $li.length - 1;
  var target;

  // get tag select
  setPageActive('tastemaker', '.item__tastemakers');
  setPageActive('blog', '.item__blogs');
  setPageActive('a-list', '.item__vendors');
  setPageActive('contribute', '.item__contribute');
  setPageActive('about', '.item__about');

  // Use plugin lazyload load image
  $(window).bind('load', function() {
    $('img').lazyload({
      effect: 'fadeIn'
    });
  });

  // Handle change slide when click navigation
  $li.click(function() {
    // check condition item current
    if ( !$(this).hasClass('active') ) {
      target = $(this).index();
      sliderResponse(target);
      resetTiming();
      return false;
    }
  });

  // add class actice navigation first child
  $('ul.navigation li:first-child').addClass('active');
  // add class actice slider first child
  $listSlide.hide().first().show();

  /** function to helper **/

  // function to handle show slider
  function sliderResponse(target) {
    $listSlide.fadeOut(300).eq(target).fadeIn(300);
    $li.removeClass('active').eq(target).addClass('active');
  }

  // function to show slide next
  function sliderTiming() {
    // set value item current
    target = $('ul.navigation li.active').index();

    // check condition to determine slide next
    target === lastElem ? target = 0 : target = target + 1;
    sliderResponse(target);
  }

  // get vaeiable time call function show slide
  var timingRun = setInterval(function() { sliderTiming(); }, 4000);

  // function to reset time show
  function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); }, 4000);
  }

  // check title page active
  function setPageActive(element, node) {
    if ($('body').hasClass(element)) {
      $('.item').find(node).addClass('active');
    } else {
      $('.item').find(node).removeClass('active');
    }
  }

}( jQuery ));
