/*global $ jQuery */
$(function () {
  'use strict';

  // Use plugin lazyload load image
  $(window).bind('load', function() {
    $('img').lazyload({
      effect: 'fadeIn'
    });
  });

  var $listSlide = $('#cases');
  $listSlide.hide().first().show();
  // function to handle show slider
  // function sliderResponse() {
  //   $listSlide.fadeOut(300).eq(n).fadeIn(300);
  // }
  // sliderResponse();
  // $('#cases').pogoSlider({
  //   autoplay: !0,
  //   autoplayTimeout: 8e3,
  //   displayProgess: 0,
  //   preserveTargetSize: 0,
  //   targetWidth: 1e3,
  //   targetHeight: 300,
  //   responsive: !0
  // }).data('plugin_pogoSlider');
}(jQuery));
