(function ($) {

  renderItem('../templates/modules/person.html', '#person');
  $('.slider-item').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  showMenu();
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
      return false
    });
  }

  accordion('.button-background','.code-backgrounds' ,'.code-sample-backgrounds');
  accordion('.button-img','.code-img' ,'.code-image');
  accordion('.button-canvas','.code-canvas' ,'.code-exa-canvas');
  // function to calculator element
  function currentHeight(element) {
    var $heightItem = $(element);
    return $heightItem.height();
  }

  // function set active element block show
  function accordion(trigger, tag , heightCurrent) {
    //variables
    var heightElement = currentHeight(heightCurrent);
    var $button = $(trigger), //trigger firing the event
      visible = true; //flag for wayfinding

    $button.hover().css({
      'cursor': 'pointer'
    });

    //event
    $button.click(function() {
      //conditional check
      if (!visible) {
        $button.removeClass('active');
        $(tag).css('height','66px');
      } else {
        $button.addClass('active');
        $(tag).css('height',heightElement);
      }

      //flag dude
      visible = !visible;
      return false
    });
  }

  // nav-link-menu
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
}(jQuery));
