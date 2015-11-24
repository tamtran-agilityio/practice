/* Javascript file */
!(function ( $ ) {
  'use strict';

  var triggers = $('ul.navigation li');
  var images = $('.slide__item');
  var lastElem = triggers.length-1;
  var target;

  triggers.first().addClass('active');
  images.hide().first().show();

  function sliderResponse(target) {
    images.fadeOut(300).eq(target).fadeIn(300);
    triggers.removeClass('active').eq(target).addClass('active');
  }

  triggers.click(function() {
    if ( !$(this).hasClass('active') ) {
      target = $(this).index();
      sliderResponse(target);
      resetTiming();
    }
  });

  function sliderTiming() {
    target = $('ul.navigation li.active').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
  }

  var timingRun = setInterval(function() { sliderTiming(); },5000);
  function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },5000);
  }

  // check title page active
  function set_Page_Active(element, node) {
    if ($('body').hasClass(element)) {
      $('.item').find(node).addClass('active');
    } else {
      $('.item').find(node).removeClass('active');
    }
  }
  // get tag select
  set_Page_Active('tastemaker', '.item__tastemakers');
  set_Page_Active('blog', '.item__blogs');
  set_Page_Active('a-list', '.item__vendors');
  set_Page_Active('contribute', '.item__contribute');
  set_Page_Active('about', '.item__about');

}( jQuery ));
