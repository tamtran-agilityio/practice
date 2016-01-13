/* Javascript file */
!(function ( $ ) {
  'use strict';

  var links = $('.navigation').find('li');
  var linksdrop = $('.navigationdrop').find('li');
  var htmlbody = $('html,body');
  var buttonNext = $('.buttonNext');
  var buttonPre = $('.back_top');
  var $navItem = $('.navigationdrop');

  // call function getData to servives
  renderItem('../templates/modules/services.html', '#services');
  // call function getData to portfolio
  renderItem('../templates/modules/portfolio.html', '#portfolio');
  // call function getData to exhibitions
  renderItem('../templates/modules/exhibitions.html', '#exhibitions');
    // call function getData to section resume
  renderItem('../templates/modules/resume.html', '#resume');

  // call function update layout section 1
  mymargtop();

  // set time out active popup image
  setTimeout( pretty , 2000);

  // handle when resize
  $(window).on('resize',function() {
    //Update slider height
    sliderHeight();
    mymargtop ();
  });

  // handle on button menu
  $('.btn_dropdown').click(function() {
    $navItem.fadeIn();
  });

  $('.navigationdrop li').click(function() {
    $navItem.fadeOut();
  });

  // handle when srcoll
  $(window).on('scroll', function () {

    // call function show menu
    showMenu();
    // call funtion add item active
    itemNavActive($('.about-me'), $('.itemAbout'));
    itemNavActive($('.services'), $('.itemServices'));
    itemNavActive($('.exhibitions'), $('.itemExhibitions'));
    itemNavActive($('.resume'), $('.itemResume'));
    itemNavActive($('.portfolio'), $('.itemPortfolio'));
    itemNavActive($('.contact'), $('.itemContact'));

  });

  // excute when click section
  var elems = [ links, linksdrop, buttonNext, buttonPre];

  $.each(elems, function(i, elem) {
    elem.click(function (e) {
      e.preventDefault();
      var datasection = $(this).attr('data-section');
      goToByScroll(datasection);
    });
  });

  /* Helper function */
  // function get data to data.json
  function getData(source, element) {

    $.get('../data/data.json', function(data) {

      // compile the template
      var template = Handlebars.compile(source);

      // pass our data to the template
      var html = template(data);
      element.prepend(html);
    });
  };

  // render article services with handlebarjs
  function renderItem(pathPage, idLoad ) {

    // DOM HTML prepend id services at home page
    $.get( pathPage, function(data) {

      var $renderElement = $(idLoad);
      getData(data, $renderElement);
    });
  };

  // get height window
  function sliderHeight() {
    var _heightWindow = $(window).height();
    $('.photographer').css({
      height:_heightWindow
    });
  }

  // set margin section photographer
  function mymargtop() {
    var _heightWindow = $(window).height();
    var $photoGrapher = $('.photographer__block');
    var container = $photoGrapher.height();
    var margTop = Math.abs((_heightWindow - container)/2);
    $photoGrapher.css('margin-top', margTop);
    $photoGrapher.css('margin-bottom', margTop);
  }

  // function to scroll go to section
  function goToByScroll(datasection) {
    var $about_subnav = $('.menu');
    if($about_subnav.hasClass('f-about-subnav')) {
      htmlbody.animate({
        scrollTop: $('.section[data-section="' + datasection + '"]').offset().top
      }, 500, 'easeOutQuart');
    } else {
      htmlbody.animate({
        scrollTop: $('.section[data-section="' + datasection + '"]').offset().top
      }, 500, 'easeOutQuart');
    }
  }

  // function show menu
  function showMenu() {
    var $menu =  $('.menu');
    var _crollWindow = $(window).scrollTop();
    var _heightPhotographer = $('.photographer').height();
    var _heightMenu = $menu.height();
    if (_crollWindow > (_heightPhotographer - _heightMenu)) {
      $menu.css('position','fixed');
      $menu.css('top','0px');
    }
    else {
      $menu.css('position','absolute');
      $menu.css('top', _heightPhotographer - _heightMenu);
    }
  }

  // function to item active
  function itemNavActive(section, item) {
    var _crollWindow = $(window).scrollTop();
    if ((_crollWindow > (section.offset().top - 86)) && (_crollWindow < (section.offset().top + section.height() + 69 ))) {
      item.addClass('active');
    } else {
      item.removeClass('active');
    }
  }

  // function pop up image portfolio
  function pretty() {
    $('a[rel^="prettyPhoto"]').prettyPhoto();
  }

}( jQuery ));
