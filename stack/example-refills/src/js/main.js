/* file javscript */

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

