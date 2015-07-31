/* file javscript */

/**
 * show menu when size screen small than 768px
 */
$(document).ready(function() {
  var menuToggle = $('#centered-navigation-mobile-menu').unbind();
  $('#centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#centered-navigation-menu').slideToggle(function(){
      if($('#centered-navigation-menu').is(':hidden')) {
        $('#centered-navigation-menu').removeAttr('style');
      }
    });
  });
});


/**
 * jum to section of link 
 */
(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){  
  jQuery.mark.jump();
});
