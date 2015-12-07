(function ($) {

  renderItem('../templates/modules/person.html', '#person');
  $('.slider-item').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
    // autoplay: true
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
        // $buttonNav.on('click', function() {
        // });
      }

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
