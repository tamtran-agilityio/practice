/*
 * file javscript modal site
 * -------------------------
 */

$(document).ready(function() {
  var fsvs = $.fn.fsvs({
    speed: 600,
    bodyID: 'fsvs-body',
    selector: '> .slide',
    mouseSwipeDisance: 40,
    afterSlide: function() {},

    beforeSlide: function() {},

    endSlide: function() {},

    mouseWheelEvents: true,
    mouseDragEvents: true,
    touchEvents: true,
    arrowKeyEvents: true,
    pagination: true,
    nthClasses: false,
    detectHash: true
  });

  /* set navigation */
  $('.button-collapse').sideNav();

  /* show page index*/
  ;(function() {
    'use strict';

    var scrolling = true;
    var $loader = $('.loader');
    var $main = $('.main-full');
    var $bigTitle = $('.big-tille');
    var $detailsContent = $('.details-content');
    var $downArrow = $('.down-arrow');
    var time = 1000;
    var $heightBoxes = $('.boxes-container');
    var $backFooter = $('.bachground-footer');
    var $inforDirect = $('.infor__direct');
    var $inforClose = $('.infor__close');
    var $volumeUp = $('.sound__volume--up');
    var $volumeOff = $('.sound__volume--off');
    var $playMusic = $('.sound__text--state');
    var $offMusic = $('.sound__text--separator');
    var $boxQuestion = $('.question__box');

    /* show element */
    function showElement(element) {
      element.show();
    }

    /* hidden element */
    function hideElement(element) {
      element.hide();
    }

    /* add Class for element */
    function addClass(element, nameclass) {
      element.addClass(nameclass);
    }

    /* remove Class of element */
    function removeClass(element, nameclass) {
      element.removeClass(nameclass);
    }

    /* set timeout for the element execute element*/
    function afterTime(section, callback, element, attribute) {

      setTimeout(function() {
        callback(element, attribute);
      }, section);
    }

    /* function add atriblute trainstion css */
    function addAtrCss(element) {
      return {
        '-webkit-transition': 'all ' + element + 'ms ease',
        '-moz-transition': 'all ' + element + 'ms ease',
        '-o-transition': 'all ' + element + 'ms ease',
        transition: 'all ' + element + 'ms ease'
      }
    }

    // animation for menu when click on it
    function menuload() {
      afterTime(2000, showElement, $main);
      afterTime(2000, showElement, $downArrow);
    }

    // when load page will show loader
    $(window).on('load', function() {
      afterTime(1200, hideElement, $loader);
      menuload();
    });

    /* event handle click icon volume*/
    $volumeUp.click(function() {
      $volumeOff.fadeIn();
      $volumeUp.fadeOut();
      $playMusic.fadeIn();
      $offMusic.fadeOut();
    })

    $volumeOff.click(function() {
      $volumeUp.fadeIn();
      $volumeOff.fadeOut();
      $playMusic.fadeOut();
      $offMusic.fadeIn();
    })

    $offMusic.click(function() {
      $volumeOff.fadeIn();
      $volumeUp.fadeOut();
      $playMusic.fadeIn();
      $offMusic.fadeOut();
    })

    $playMusic.click(function() {
      $volumeUp.fadeIn();
      $volumeOff.fadeOut();
      $playMusic.fadeOut();
      $offMusic.fadeIn();
    })

    /* set animation of page question and answer*/
    var $window = $(window);

    function viewBox() {
      var windowTop = $window.scrollTop();
      var windowHeight = $window.height();
      var windowBottom = (windowTop + windowHeight);

      $.each($boxQuestion, function() {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var windowTop = $element.offset().top;
        var elementBottom = (windowTop + elementHeight);

        // check to see if this current container is within viewport
        if ((elementBottom >= windowTop) &&
          (windowTop <= windowBottom)) {
          $element.addClass('question__active');
        } else {
          $element.removeClass('question__active');
        }
      });
    }

    /* show and hidden footer*/
    function showFooter() {
      var $aTop = $heightBoxes.height() + 117.188;
      var $hiddenFooter = $heightBoxes.height() - 80;
      var $head = $(this).scrollTop();

      /* checking when to show footer*/
      if ($head >= ($aTop)) {
        $backFooter.fadeIn();
      }

      /* checking when to hidden footer*/
      if ($head < ($hiddenFooter)) {
        $backFooter.fadeOut();
      }

      /* set event when click button direction*/
      $inforDirect.click(function() {
        $backFooter.css({
          bottom: '0'
        });
        $inforClose.css({
          opacity: '1'
        });
      });

      /* set event when click button direction close*/
      $inforClose.click(function() {
        $backFooter.css({
          bottom: '-350px'
        });
        $inforClose.css({
          opacity: '0'
        });
      });
    }

    $window.on('scroll resize', viewBox);
    $window.on('scroll resize', showFooter);
    $window.trigger('scroll');
  })();
});
