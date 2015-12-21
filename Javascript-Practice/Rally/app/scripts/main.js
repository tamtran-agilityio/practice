/*global $ jQuery Handlebars*/
$(document).ready(function() {
  'use strict';
  (function ($) {

    /* Helper function */

    // handle menu show
    function showMenu() {
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
          $(tag).css('height', +heightElement);
        }

        //flag dude
        visible = !visible;
        return false;
      });
    }

    // function get data to data.json
    function getData(source, element) {

      $.get('../data/data.json', function(data) {

        // compile the template
        var template = Handlebars.compile(source);

        // pass our data to the template
        var html = template(data);
        element.prepend(html);
      });
    }

    // render article services with handlebarjs
    function renderItem(pathPage, idLoad ) {

      // DOM HTML prepend id services at home page
      $.get( pathPage, function(data) {

        var $renderElement = $(idLoad);
        getData(data, $renderElement);
      });
    }

      // get height window
    function sliderHeight(){
      var windowHeight = $(window).height();
      $('.ribbon').css('height', windowHeight);
    }

    // function of part scroll iphone
    function scrollScreen() {
      // $('.iphone__block').draggable({ axis: 'x' });
    }

    // Excute scroll iphone
    scrollScreen();

    // use slick plugin slider change page
    (function () {
      var $wrapSlidePage = $('.slider-item');
      var $navBar = $('.nav-bar-bg');
      var $navContent = $('#navMenuContent');
      var $baseContent = $('.nav-menu-base-content');
      var $foldContent = $('.nav-menu-fold-content');
      var $menuContent = $('.nav-menu-content');
      $wrapSlidePage.slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        adaptiveHeight: true
      });
      $wrapSlidePage.on('beforeChange', function(event, slick, currentSlide, nextSlide){
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
      });
      return false;
    }());

    // function of set width pagination
    function paginationBar(item) {
      var elementItem = $('ul.highlight-content-inner li.caption-optimal');
      var barCount = $(item).find(elementItem).length;
      // set width pagination
      $(item).find('.pagination-bar-handle').css('width', 100 / barCount + '%');
    }

    // use slick plugin slider change image on iphone
    function sliderDelay(slide, changeDelay, context) {
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
        onInit: function() {
          $wrapSlidePage.slick({
            draggable: false
          });
        },
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
        onInit: function() {
          $wrapSlidePage.slick({
            draggable: false
          });
        }
      });
      $(changeDelay).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // console.log(nextSlide);
        var barCount = $contextshow.length;
        var changle = ((100 / barCount) * nextSlide);
        $contextshow.removeClass('active').eq(nextSlide).addClass('active');
        $(context).find('.pagination-bar-content').css('transform', 'translate3d(' + changle + '%, 0px, 0px)');
        $(context).find('.pagination-bar-content').css('transition', 'transform 0.2s ease-out');
      });
    }

    (function () {
      var $wrapSlidePage = $('.slider-item');
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
        // swipeToSlide: false,
        onInit: function() {
          $wrapSlidePage.slick({
            draggable: false
          });
        }
      });
    }());


    sliderDelay('#gestureMain', '#gestureMainMore', '#slideshowSmarterRouting');
    sliderDelay('#cardsCity', '#cardsCityEssentials', '#slideshowCustomAnimation');
    sliderDelay('#gestureMapbox', '#gestureSwipe', '#slideshowHowToGesture');
    sliderDelay('#prototype', '#prototypeDelay', '#slideshowPrototyping');
    sliderDelay('#mountainReport', '#mountainReportDelay', '#slideshowMobileFirst');
    // set color menu
    // setColor($wrapSlidePage);

    // height ribbon block
    sliderHeight();
    // render data of part person
    renderItem('../templates/modules/person.html', '#person');

    // show menu
    showMenu();

    // excute handle show tag
    accordion('.button-background', '.code-backgrounds', '.code-sample-backgrounds');
    accordion('.button-img', '.code-img', '.code-image');
    accordion('.button-canvas', '.code-canvas', '.code-exa-canvas');

  }(jQuery));
});
