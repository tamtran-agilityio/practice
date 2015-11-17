/* file javscript */
'use strict';

var Application = {};

(function($, W, A) {

  A.App = function() {

    var $slide_Active = $('.slide__item');
        $feature = $('.navigation__item');
        $active = 'active';
        $page_Active = $('body');

    // Remove all class active at slide image and navigation of Slide
    var remove_Class = function() {
      $feature.removeClass($active);
      $slide_Active.removeClass($active);
    };

    // Click on navigation of slide image
    var change_Slide = function() {

      $feature.on('click', function(event) {

        event.preventDefault();
        var hrefTarget = $(this).children('a').attr('href');
        remove_Class();
        $(hrefTarget).addClass($active);
        $(this).addClass($active);
      });
    };

    // set handle image slides
    var slideImage = function() {
      $feature.each(function(i) {
        if($($feature[i]).hasClass($active)) {
          if($($feature[i]).is(':nth-child(4)')) {
            remove_Class();
            $($slide_Active[0]).addClass($active);
            $($feature[0]).addClass($active);
            return false;

          } else {

            remove_Class();
            $($slide_Active[i + 1]).addClass($active);
            $($feature[i + 1]).addClass($active);
            return false;
          }
        }
      });
    };

    // check title page active
    function set_Page_Active(children, node) {
      var objRef = document.body;
      if objRef.hasClass(children) {
        children.parent('li').addClass('active');
      }
    }
    set_Page_Active('item', 'tastemaker');

    this.init = function() {

      // execute function use lazyload
      $(W).bind('load', function() {

        $('img').lazyload({
          effect: 'fadeIn'
        });
      });

      // set time for each slide
      setInterval(function() {
        slideImage();
      }, 3500);

      change_Slide();
    };
  };

}(window.jQuery, window, Application));

window.jQuery(document).ready(function() {
  new Application.App().init();
});
