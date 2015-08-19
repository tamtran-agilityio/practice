/*
 * file javscript modal site
 * -------------------------
 */

/* set navigation */
$(".button-collapse").sideNav(); 

/* set slide up background use fsvs plugin */
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


/**
 * [Show footer and handle on footer]
 */
;(function() {
  'use strict';

    function showFooter(element) {
      window.onkeydown = function(e) {
        e = e || window.event;
        if ( e.keyCode === '40' ) {
          element.fadeIn();
        }
      }
    };
  showFooter('.bachground-footer');
  /* execute when scrolling */
  $(window).scroll(function(){
    var $aTop = $('.boxes-container').height() + 117.188 ;
    var $hiddenFooter = $('.boxes-container').height() - 50;
    var $head = $(this).scrollTop();

    /* checking when to show footer*/  
    if($(this).scrollTop() >= ($aTop)){
      $('.bachground-footer').fadeIn();
    }

    /* checking when to hidden footer*/
    if($(this).scrollTop() < ($hiddenFooter)){
      $('.bachground-footer').fadeOut();
    }

    /* set event when click button direction*/
    $(".infor__direct").click( function()
      {
        $('.bachground-footer').css({
          bottom: '0'
        });
      $(".infor__close").css({
        opacity: '1'
      });
    });

    /* set event when click button direction close*/
    $(".infor__close").click( function()
      {
        $('.bachground-footer').css({
          bottom: '-350px'
        });
        $(".infor__close").css({
          opacity: '0'
        });
      }
    );
  });
}());

/* show footer with slide*/
// ;(function() {
//   var selector = '.slide';
//   var currentSlideIndex = 0;
//   function checkDown() {
//   if ( $( options.selector, body ).eq( (currentSlideIndex + 1) ).length === 0 ) return false;
//     return true;
//   };
//   if (checkDown()) {
//     $('.bachground-footer').fadeIn();
//   }
//   else {
//     $('.bachground-footer').fadeOut();
//   }
// }())

/* show page index*/ 
;(function() {
  'use strict';

  var $loader = $('.loader');
  var $main = $('.main-full');
  var $bigTitle = $('.big-tille');
  var $detailsContent = $('.details-content');
  var $downArrow = $('.down-arrow');
  var time = 1000;

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
})();


