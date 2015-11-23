/* file javscript */
!(function ( $ ) {
  'use strict';

  var $slide_Active = $('.slide__item');
  var $feature = $('.navigation__item');
  var $active = 'active';
  var $page_Active = $('body');

  // Click on navigation of slide image
  var change_Slide = function() {

    $feature.on('click', function(event) {

      event.preventDefault();
      var hrefTarget = $(this).children('a').attr('href');
      $feature.removeClass($active);
      $slide_Active.removeClass($active);
      $(hrefTarget).addClass('active');
      $(this).addClass('active');
      $(hrefTarget).fadeIn();
      $(this).fadeIn();
    });
  };
  change_Slide();

  function change_Slider(item, element) {

    var change_img_time     = 3500;
    var transition_speed    = 100;

    var simple_slideshow    = $(item),
      listItems           = simple_slideshow.children(element),
      listLen             = listItems.length,
      i                   = 0,

      changeList = function () {

        listItems.eq(i).fadeOut(transition_speed, function () {
          i += 1;
          if (i === listLen) {
              i = 0;
          }
          listItems.eq(i).fadeIn(transition_speed);
        });
      };


    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
  };

  function change_navigation() {
    if ($('#slide-1').css('display') =='none') {
      $('.navigation__item').removeClass('active');
    } else {
      $('.navigation__item').addClass('active');
    }
  }
  // change_navigation();

 // check title page active
  function set_Page_Active(element, node) {
    if ($('body').hasClass(element)) {
      $('.item').find(node).addClass('active');
    } else {
      $('.item').find(node).removeClass('active');
    }
  }

  change_Slider('.slide', 'section');

  set_Page_Active('tastemaker', '.item__tastemakers');
  set_Page_Active('blog', '.item__blogs');
  set_Page_Active('a-list', '.item__vendors');
  set_Page_Active('contribute', '.item__contribute');
  set_Page_Active('about', '.item__about');

  $(window).bind('load', function() {

    $('img').lazyload({
      effect: 'fadeIn'
    });
  });

}( jQuery ));
