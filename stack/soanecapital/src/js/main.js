/*
 * file javscript modal site
 * -------------------------
 */

$(document).ready( function() {
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

  /* set navigation */
  $(".button-collapse").sideNav(); 

  /* show page index*/ 
  ;(function() {
    'use strict';

    var $loader = $('.loader');
    var $main = $('.main-full');
    var $bigTitle = $('.big-tille');
    var $detailsContent = $('.details-content');
    var $downArrow = $('.down-arrow');
    var time = 1000;
    var $heightBoxes = $('.boxes-container');
    var $backFooter = $('.bachground-footer');
    var $inforDirect = $(".infor__direct");
    var $inforClose = $(".infor__close");
    var $volumeUp = $(".sound__volume--up");
    var $volumeOff = $(".sound__volume--off");
    var $playMusic = $(".sound__text--state");
    var $offMusic = $(".sound__text--separator");
    var $aTop = $heightBoxes.height() + 117.188 ;
    var $hiddenFooter = $heightBoxes.height() - 50;
    var $head = $(this).scrollTop();

    /* Show element */
    function showElement(element) {
      element.show();
    }

    /* Hidden element */
    function hideElement(element) {
      element.hide();
    }

    /* Add Class for element */
    function addClass(element,nameclass) {
      element.addClass(nameclass);
    }

    /* Remove Class of element */
    function removeClass(element,nameclass) {
      element.removeClass(nameclass);
    }

    /* Set timeout for the element execute element*/
    function afterTime(section, callback, element, attribute) {

      setTimeout(function() {
        callback(element, attribute);
      }, section);
    }

    /* function add atriblute trainstion css */
    function addAtrCss(element) {
      return {
        "-webkit-transition": "all " + element + "ms ease",
        "-moz-transition": "all " + element + "ms ease",
        "-o-transition": "all " + element + "ms ease",
        transition: "all " + element + "ms ease"
      }
    }

    // Animation for menu when click on it
    function menuload() {
      afterTime(2000, showElement, $main);
      afterTime(2000, showElement, $bigTitle);
      afterTime(2000, showElement, $downArrow);
      afterTime(2000, showElement, $detailsContent);
    }

    // When load page will show loader
    $(window).on('load', function() {
      afterTime(1500, hideElement, $loader);
      menuload();
    });

    /* event handle click icon volume*/ 
    $volumeUp.click( function() {
      $volumeOff.fadeIn();
      $volumeUp.fadeOut();
      $playMusic.fadeIn();
      $offMusic.fadeOut();
    })

    $volumeOff.click( function() {
      $volumeUp.fadeIn();
      $volumeOff.fadeOut();
      $playMusic.fadeOut();
      $offMusic.fadeIn();
    })

    $offMusic.click( function() {
      $volumeOff.fadeIn();
      $volumeUp.fadeOut();
      $playMusic.fadeIn();
      $offMusic.fadeOut();
    })

    $playMusic.click( function() {
      $volumeUp.fadeIn();
      $volumeOff.fadeOut();
      $playMusic.fadeOut();
      $offMusic.fadeIn();
    })

    /* execute when scrolling */
    $(window).scroll(function(){

      /* checking when to show footer*/  
      if($head >= ($aTop)){
        $backFooter.fadeIn();
      }

      /* checking when to hidden footer*/
      if($head < ($hiddenFooter)){
        $backFooter.fadeOut();
      }

      /* set event when click button direction*/
      $inforDirect.click( function() {
          $backFooter.css({
            bottom: '0'
          });
          $inforClose.css({
            opacity: '1'
        });
      });

      /* set event when click button direction close*/
      $inforClose.click( function()
        {
          $backFooter.css({
            bottom: '-350px'
          });
          $inforClose.css({
            opacity: '0'
          });
        }
      );
    });
  })();
});

function initialize() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742,-0.120850),
    zoom:9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"), mapProp);
}
//google.maps.event.addDomListener(window, 'load', initialize);
