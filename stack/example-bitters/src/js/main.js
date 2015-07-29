/* file javscript */
$(function() {
  $('.header-top').click(function () {
    $('.header-top').slideToggle("slow");
  });
  $('.header-top').css({"display":"none","transition":"none","max-height":"inherit"});
  $('#toggleMenu').remove();
});
