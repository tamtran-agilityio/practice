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

/**
 * execute parallax
 */
(function ($) {

    $.fn.parallax = function () {
      var window_width = $(window).width();
      // Parallax Scripts
      return this.each(function(i) {
        var $this = $(this);
        $this.addClass('parallax');

        function updateParallax(initial) {
          var container_height;
          if (window_width < 601) {
            container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
          }
          else {
            container_height = ($this.height() > 0) ? $this.height() : 500;
          }
          var $img = $this.children("background-based").first();
          var img_height = $img.height();
          var parallax_dist = img_height - container_height;
          var bottom = $this.offset().top + container_height;
          var top = $this.offset().top;
          var scrollTop = $(window).scrollTop();
          var windowHeight = window.innerHeight;
          var windowBottom = scrollTop + windowHeight;
          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
          var parallax = Math.round((parallax_dist * percentScrolled));

          if (initial) {
            $img.css('display', 'block');
          }
          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
          }

        }

        // Wait for image load
        $this.children("background-based").one("load", function() {
          updateParallax(true);
        }).each(function() {
          if(this.complete) $(this).load();
        });

        $(window).scroll(function() {
          window_width = $(window).width();
          updateParallax(false);
        });

        $(window).resize(function() {
          window_width = $(window).width();
          updateParallax(false);
        });

      });

    };
}( jQuery ));

$(document).ready(function(){
  $('background-based').parallax();
});
