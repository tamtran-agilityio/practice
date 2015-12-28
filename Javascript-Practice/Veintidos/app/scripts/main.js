/*global $ jQuery */
$(function () {
  'use strict';

  $(window).load(function() {
    // Animate loader off screen
    setTimeout(function() {
      $('body').addClass('pace-done');
    }, 1600);
    setTimeout(function() {
      $('main').addClass('animation');
    }, 1600);
    $('main').animate({
      opacity: 1
    }, 1500);
    $('.loader').animate({
      opacity: 1
    }, 100);
    $('.loader').css({
      opacity: 1,
      bottom: 250
    });
    $('.loader img').css({
      transform: 'rotate(500deg)'
    });
  });
  $(window).bind('resize', function() {
    var t = $(window).height();
    var o = $(window).width();
    $('.resize').css({
      width: o,
      height: t
    });
  });
  $(window).load(function() {
    var e = $(window).height();
    var t = $(window).width();
    $('.resize').css({
      width: t,
      height: e
    });
  });
  $(window).width() <= 480 && $(document).ready(function() {
    $('.wrapp-cases').addClass('resize');
  });
  $(window).width() <= 1024 && $(document).ready(function() {
    $('.wrapp-cases').addClass('resize');
  });
  // Use plugin lazyload load image
  $(window).bind('load', function() {
    $('img').lazyload({
      effect: 'fadeIn'
    });
  });

  /* VIEWPORT CHECKER */
  (function($){
    $.fn.viewportChecker = function(useroptions){
      // Define options and extend with user
      var options = {
        classToAdd: 'visible',
        offset: 100
        // callbackFunction: function(elem){}
      };
      $.extend(options, useroptions);

      // Cache the given element and height of the browser
      var $elem = this,
      windowHeight = $(window).height();

      this.checkElements = function(){
      // Set some vars to check with
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html'),
        viewportTop = $(scrollElem).scrollTop(),
        viewportBottom = (viewportTop + windowHeight);

        $elem.each(function(){
          var $obj = $(this);
          // If class already exists; quit
          if ($obj.hasClass(options.classToAdd)) {
          return;
        }

        // define the top position of the element and include the offset which makes is appear earlier or later
        var elemTop = Math.round( $obj.offset().top ) + options.offset,
        elemBottom = elemTop + ($obj.height());

        // Add class if in viewport
        if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
          $obj.addClass(options.classToAdd);

          // Do the callback function. Callback wil send the jQuery object as parameter
          options.callbackFunction($obj);
        }
      });
    };

    // Run checkelements on load and scroll
    $(window).scroll(this.checkElements);
    this.checkElements();

    // On resize change the height var
    $(window).resize(function(e){
      windowHeight = e.currentTarget.innerHeight;
    });
    };
  })(jQuery);

  $(document).ready(function(){
    $('.mascara-trama').viewportChecker({
      classToAdd: 'contraer',
      offset: 150
    });
    $('.services__web').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 350
    });
    $('.services__landing').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 400
    });
    $('.services__wordspress').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 420
    });
    $('.services__branding').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 350
    });
    $('.services__corporate').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 400
    });
    $('.services__advertising').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 420
    });
    $('.services__item h3').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInDown',
      offset: 150
    });
  });

  $('#cases').pogoSlider({
    autoplay: true,
    autoplayTimeout: 1500,
    displayProgess: true,
    preserveTargetSize: true,
    targetWidth: 1000,
    targetHeight: 300,
    slideTransition: 'slide',
    responsive: true,
    slideTransition: 'verticalSlide',
    generateButton: true
  }).data('plugin_pogoSlider');

  // var $listSlide = $('li.mediaslider');
  // var $li = $('ul.cases li.mediaslider');
  // var $pre = $('.arrow__pre');
  // var $next = $('.arrow__next');
  // var lastElem = $li.length - 1;
  // console.log(lastElem);
  // var target;
  // console.log(target);
  // // $listSlide.hide().first().show();

  // // function to handle show slider
  // function sliderResponse(target) {
  //   $listSlide.fadeOut(500).eq(target).fadeIn(1500);
  //   $li.removeClass('active').eq(target).addClass('active');
  // }
  // $pre.click(function() {
  //   // check condition item current
  //   target = $(this).index();
  //   sliderResponse(target - 1);
  //   resetTiming();
  //   return false;
  // });
  // $next.click(function() {
  //   // check condition item current
  //   target = $(this).index();
  //   sliderResponse(target + 1);
  //   resetTiming();
  //   return false;
  // });

  // function sliderTiming() {
  //   // set value item current
  //   target = $('ul.cases li.active').index();

  //   // check condition to determine slide next
  //   target === lastElem ? target = 0 : target = target + 1;
  //   sliderResponse(target);
  // }

  // // get vaeiable time call function show slide
  // var timingRun = setInterval(function() { sliderTiming(); }, 4000);

  // // function to reset time show
  // function resetTiming() {
  //   clearInterval(timingRun);
  //   timingRun = setInterval(function() { sliderTiming(); }, 4000);
  // }

  // var $listSlide = $('#cases');
  // $listSlide.hide().first().show();
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
