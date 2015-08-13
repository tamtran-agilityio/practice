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
