/* Javascript file */
(function ( $ ) {
  // 'use strict';

  // call function getData to servives
  renderItem('../templates/modules/services.html', '#services');
  // call function getData to
  renderItem('../templates/modules/portfolio.html', '#portfolio');
  // call function getData to
  renderItem('../templates/modules/exhibitions.html', '#exhibitions');


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

}( jQuery ));
