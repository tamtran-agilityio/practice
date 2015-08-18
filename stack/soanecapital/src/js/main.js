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
  });
});

