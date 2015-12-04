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
