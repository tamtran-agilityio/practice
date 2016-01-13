/*global $ jQuery Handlebars*/

'use strict';

// define global variable
var Rally = {};

!(function($, window, R, document) {
  R.Slide = function() {
    'use strict';

    var $wrapSlidePage = $('.slider-item');
    var $navBar = $('.nav-bar-bg');
    var $navContent = $('#navMenuContent');
    var $baseContent = $('.nav-menu-base-content');
    var $foldContent = $('.nav-menu-fold-content');
    var $menuContent = $('.nav-menu-content');

    // use slick plugin slider change page
    var slidePage = function() {
      $wrapSlidePage.slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        draggable: true,
        adaptiveHeight: true
      });
      $wrapSlidePage.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if($(event.target).hasClass('slider-item')){
          if (nextSlide === 1) {
          $navBar.css('background-color', 'rgb(183, 89, 255)');
          $navContent.css('background-color', 'rgb(183, 89, 255)');
          $baseContent.css('background-color', 'rgb(183, 89, 255)');
          $foldContent.css('background-color', 'rgb(183, 89, 255)');
          $menuContent.css('background-color', 'rgb(183, 89, 255)');
          } else {
            if (nextSlide === 2) {
              $navBar.css('background-color', 'rgb(74, 197, 252)');
              $navContent.css('background-color', 'rgb(74, 197, 252)');
              $baseContent.css('background-color', 'rgb(74, 197, 252)');
              $foldContent.css('background-color', 'rgb(74, 197, 252)');
              $menuContent.css('background-color', 'rgb(74, 197, 252)');
            } else {
              if (nextSlide === 3) {
                $navBar.css('background-color', 'rgb(228, 91, 91)');
                $navContent.css('background-color', 'rgb(228, 91, 91)');
                $baseContent.css('background-color', 'rgb(228, 91, 91)');
                $foldContent.css('background-color', 'rgb(228, 91, 91)');
                $menuContent.css('background-color', 'rgb(228, 91, 91)');
              } else {
                $navBar.css('background-color', 'rgb(198, 207, 212)');
                $navContent.css('background-color', 'rgb(198, 207, 212)');
                $baseContent.css('background-color', 'rgb(198, 207, 212)');
                $foldContent.css('background-color', 'rgb(198, 207, 212)');
                $menuContent.css('background-color', 'rgb(198, 207, 212)');
              }
            }
          }
        }
      });
      return false;
    }

    // function of set width pagination
    var paginationBar = function(item) {
      var elementItem = $('.highlight-content-inner li.caption-optimal');
      var barCount = $(item).find(elementItem).length;
      // set width pagination
      $(item).find('.pagination-bar-handle').css('width', 100 / barCount + '%');
    }

    // use slick plugin slider change image on iphone
    var sliderDelay = function(slide, changeDelay, context) {
      paginationBar(context);
      var $wrapSlidePage = $('.slider-item');
      var $contextshow = $(context).find('ul.highlight-content-inner li.caption-optimal');
      // set item first active
      $contextshow.eq(0).addClass('active');
      $(slide).slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        variableWidth: false,
        adaptiveHeight: true,
        arrows: false,
        swipeToSlide: false,
        asNavFor: changeDelay
      });
      $(changeDelay).slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        variableWidth: false,
        adaptiveHeight: false,
        arrows: false,
        asNavFor: slide,
        onAfterChange: function(){
          $wrapSlidePage.slickPause();
        }
      });
      $(changeDelay).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $wrapSlidePage.slick('slickPause');
        // console.log('event', event, slick);
        var barCount = $contextshow.length;
        var changle = ((100 / barCount) * nextSlide);
        $contextshow.removeClass('active').eq(nextSlide).addClass('active');
        $(context).find('.pagination-bar-content').css('transform', 'translate3d(' + changle + '%, 0px, 0px)');
        $(context).find('.pagination-bar-content').css('transition', 'transform 0.2s ease-out');
      });
      $('.caption-box__block').on('mousedown', function () {
        // console.log('in');
        $wrapSlidePage.slick('slickSetOption', 'draggable', false, false);
      });
      $('.caption-box__block').on('mouseup', function () {
        // console.log('out');
        $wrapSlidePage.slick('slickSetOption', 'draggable', true, false);
      });
    }

    var slideImages = function() {
      var $wrapSlidePage = $('.slider-item');
      var barCountSlider = $('.simple-slideshow').find('ul.stamp-images-overflow li.image-wrapper').length;
      // set width pagination
      $('.simple-slideshow').find('.pagination-bar-handle').css('width', 200 / barCountSlider + '%');
      $('.stamp-images-overflow').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        variableWidth: true,
        adaptiveHeight: false,
        arrows: false,
        onInit: function() {
          $wrapSlidePage.slick({
            draggable: false
          });
        }
      });
      $('.stamp-images-overflow').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var changle = ((200 / barCountSlider) * nextSlide);
        $('.simple-slideshow').find('.pagination-bar-content').css('transform', 'translate3d(' + changle + '%, 0px, 0px)');
        $('.simple-slideshow').find('.pagination-bar-content').css('transition', 'transform 0.2s ease-out');
      });
    }
    var init = function() {
      // execute slider page index
      slidePage();

      slideImages();

      // excute change slider
      sliderDelay('#gestureMain', '#gestureMainMore', '#slideshowSmarterRouting');
      sliderDelay('#cardsCity', '#cardsCityEssentials', '#slideshowCustomAnimation');
      sliderDelay('#gestureMapbox', '#gestureSwipe', '#slideshowHowToGesture');
      sliderDelay('#prototype', '#prototypeDelay', '#slideshowPrototyping');
      sliderDelay('#mountainReport', '#mountainReportDelay', '#slideshowMobileFirst');
      sliderDelay('.ipad__screenshots', '.ipad__screenshots-before', '#trialsTribulations');
      sliderDelay('.browser__screenshots', '.browser__screenshots-before', '#slideshowTransitions');
    }
    return {
      init : init
    }
  }

  R.Menu = function() {
    'use strict';
    // handle menu show
    var showMenu = function() {
      // body...
      var $buttonNav = $('.nav-link-menu-outer');
      var visible = true;
      $buttonNav.on('click', function() {
        if(!visible) {
          $(this).parents('.nav-link-menu').addClass('active');
          $(this).parents('.site-nav').addClass('nav-menu-open');
          $('.slick-dots').css('display', 'none');
          $('.nav-link-logo').css('display', 'none');
          $('#navMenu').animate({ opacity: 'show' }, 'slow', 'easein');
        } else {
          $(this).parents('.nav-link-menu').removeClass('active');
          $(this).parents('.site-nav').removeClass('nav-menu-open');
          $('.slick-dots').css('display', 'block');
          $('.nav-link-logo').css('display', 'block');
        }

        visible = !visible;
        return false;
      });
    }

    // get height window
    var sliderHeight = function() {
      var windowHeight = $(window).height();
      $('.ribbon').css('height', windowHeight);
    }

    var init = function() {

      // show menu
      showMenu();

      // set height slider
      sliderHeight();
    }
    return {
      init : init
    }
  }

  R.Temp = function() {
    'use strict';
    // function get data to data.json
    var getData = function(source, element) {

      $.get('../data/data.json', function(data) {

        // compile the template
        var template = Handlebars.compile(source);

        // pass our data to the template
        var html = template(data);
        element.prepend(html);
      });
    }

    // render article services with handlebarjs
    var renderItem = function(pathPage, idLoad ) {

      // DOM HTML prepend id services at home page
      $.get( pathPage, function(data) {

        var $renderElement = $(idLoad);
        getData(data, $renderElement);
      });
    }
    var init = function() {
      // render data of part person
      renderItem('../templates/modules/person.html', '#person');
    }
    return {
      init : init
    }
  }
  R.Accordion = function() {
    'use strict';
    // function to calculator element
    function currentHeight(element) {
      var $heightItem = $(element);
      return $heightItem.height();
    }

    // function set active element block show
    function accordion(trigger, tag, heightCurrent) {
      //variables
      var heightElement = currentHeight(heightCurrent);
      var $button = $(trigger); //trigger firing the event
      var visible = true; //flag for wayfinding

      $button.hover().css({'cursor': 'pointer'});

      //event
      $button.click(function() {
        //conditional check
        if (!visible) {
          $button.removeClass('active');
          $(tag).css('height', '66px');
        } else {
          $button.addClass('active');
          $(tag).css('height', + heightElement);
        }

        //flag dude
        visible = !visible;
        return false;
      });
    }

    // function drag and drop image
    var $itineraryItem = $('#itineraryBlock');
    var dropInit = function() {
      var prevX = Math.floor(window.innerWidth / 2);
      // var prevX = -1
      $itineraryItem.on('dragstart', function(e) {
        if (e.pageX === prevX) {
          console.log('dragged center', prevX);
          $itineraryItem.css('transform', 'translate3d(0%, 0px, 0px)');
          $itineraryItem.css('transition', 'opacity .25s ease-out');
          prevX = e.pageX;
          return false;
        }
        // dragged left
        if ((prevX) > (e.pageX)) {
          $itineraryItem.css('transform', 'translate3d(-25%, 0px, 0px)');
          $itineraryItem.css('transition', 'opacity .25s ease-out');
        }
        // dragged right
        else if ((prevX) < (e.pageX)) {
          $itineraryItem.css('transform', 'translate3d(25%, 0px, 0px)');
          $itineraryItem.css('transition', 'opacity .25s ease-out');
        }
        prevX = e.pageX;
      });
      $itineraryItem.draggable({
        containment: '#itineraryContainer',
        cursor: 'move',
        snap: '#itineraryContainer',
        revert: 'invalid',
        axis: 'x'
      });
    }

    var init = function() {
      // excute handle show tag
      accordion('.button-background', '.code-backgrounds', '.code-sample-backgrounds');
      accordion('.button-img', '.code-img', '.code-image');
      accordion('.button-canvas', '.code-canvas', '.code-exa-canvas');

      // execute drap
      dropInit();
    }
    return {
      init : init
    }
  }

  R.setting = function() {
    R.Slide().init();
    R.Menu().init();
    R.Temp().init();
    R.Accordion().init();
  }
}(window.jQuery, window, Rally, document));
window.jQuery(document).ready(function() {
  new Rally.setting();
});
