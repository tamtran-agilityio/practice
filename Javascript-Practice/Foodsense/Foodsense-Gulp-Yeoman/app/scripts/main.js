/* Javascript file */
'use strict';

var Foodsense = {};

!(function($, window, F, document) {

  F.App = function() {

    'use strict';

    var $li = $('ul.navigation li');
    var $listSlide = $('.slide__item');
    var lastElem = $li.length - 1;
    var target;

    // Handle change slide when click navigation
    $li.click(function() {
      // check condition item current
      if ( !$(this).hasClass('active')) {
        target = $(this).index();
        sliderResponse(target);
        resetTiming();
        return false;
      }
    });

    // add class actice navigation first child
    $('ul.navigation li').eq(0).addClass('active');
    // add class actice slider first child
    $listSlide.hide().first().show();

    /** function to helper **/

    // function to handle show slider
    function sliderResponse(target) {
      $listSlide.fadeOut(300).eq(target).fadeIn(300);
      $li.removeClass('active').eq(target).addClass('active');
    }

    // function to show slide next
    var sliderTiming = function() {
      // set value item current
      target = $('ul.navigation li.active').index();

      // check condition to determine slide next
      target === lastElem ? target = 0 : target = target + 1;
      sliderResponse(target);
    }

    // get vaeiable time call function show slide
    var timingRun = setInterval(function() {
      sliderTiming();
    }, 4000);

    // function to reset time show
    var resetTiming = function() {
      clearInterval(timingRun);
      timingRun = setInterval(function() {
        sliderTiming();
      }, 4000);
    }

    // check title page active
    var setLink = function() {
      var _urlpath = $(location).attr('pathname').split('/').pop();

      $('ul.item li').each(function(){
          var _this = $(this);
        var _str = _this.find('a').attr('href');
        _str !== _urlpath ? _this.removeClass('active') : _this.addClass('active');
      });
    }
    var init = function() {
      // get tag select
      setLink();

      // Use plugin lazyload load image
      $(window).bind('load', function() {
        $('img').lazyload({
          effect: 'fadeIn'
        });
      });
    }
    return {
      init : init
    }
  }

}(window.jQuery, window, Foodsense, document));

window.jQuery(document).ready(function() {
  new Foodsense.App().init();
});
