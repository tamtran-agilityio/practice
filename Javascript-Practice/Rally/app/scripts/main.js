/*global $ jQuery Handlebars*/
$(document).ready(function() {
  'use strict';
  (function ($) {

    // use slick plugin slider
    $('.slider-item').slick({
      dots: true,
      infinite: false,
      speed: 300,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
      adaptiveHeight: true
    });

    $('#slider-device').slick({
      dots: false,
      infinite: false,
      centerMode: true,
      speed: 300,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      adaptiveHeight: true,
      variableWidth: true
    });

    // $('#scroll-device').slick({
    //   dots: false,
    //   infinite: false,
    //   centerMode: true,
    //   speed: 300,
    //   arrows: false,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   accessibility: true,
    //   adaptiveHeight: true,
    //   variableWidth: true
    // });

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
        } else {
          $(this).parents('.nav-link-menu').removeClass('active');
          $(this).parents('.site-nav').removeClass('nav-menu-open');
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

    // function to next to part need find
    // function nextPage() {
    //   $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({ scrollTop: target.offset().top }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // }

    // excute scroll next part
    // nextPage();

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
