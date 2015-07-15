/* global script of parallax scrolling*/

/**
 * scrollParallax execute fade in when scrolling into
 */
var action;

function scrollParallax() {
  var digitalDrive = $('.influence-digital__drive');
  var topicTweet = $('.bg-tweet__wall');
  var arrowLeft = $('.bg-arrow__left');
  var arrowRight = $('.bg-arrow__right');
  var arrowHorizon = $('.screenshot__arrow--horizontal');
  var expandedDetails = $('.screenshot__expanded--details');
  var expandedPut = $('.screenshot__expanded--put');
  var heightInfluence = $('.influence-digital').height();
  var heightScreenshot = $('.screenshot-silver').height();

  action = setTimeout(function() {

  // fade in block influence-digital
  if (($(this).scrollTop()) > (heightInfluence / 3)) {
    digitalDrive.fadeIn();
    topicTweet.fadeIn();
  }

  // fade in arrow left, right
  if (($(this).scrollTop()) > (heightInfluence * 1.2)) {
    arrowLeft.fadeIn();
    arrowRight.fadeIn();
  }

  // fade in block screenshot silver
  if ($(this).scrollTop() > (heightScreenshot)) {
    expandedDetails.fadeIn();
    expandedPut.fadeIn();
  }

  if ($(this).scrollTop() > (heightScreenshot * 2.5)) {
    arrowHorizon.fadeIn();
  }

  }, 300);
}

/**
 * handle event when scrolling
 */
$(window).scroll(function() {

  var sparkScroll = $(this).scrollTop();
  var sparkScrollExpanded = $('.screenshot__expanded--in').offset().top;
  var heightBasket = $('.bg-pitch-basket').height();
  var heightSilver = $('.screenshot-silver').height();
  var bgPitch = $('.bg-pitch-basket');
  var screenSilver = $('.screenshot-silver');
  var expandedIn = $('.screenshot__expanded--in');

  // set background position of pitch basket
  if (sparkScroll <= heightBasket) {
    bgPitch.css({'background-position':'center ' + (sparkScroll - bgPitch.offset().top) + 'px'});
  }

  // set background position of screenshot silver
  if (sparkScroll <= heightSilver) {
    screenSilver.css({'background-position':'center ' + (sparkScroll - screenSilver.offset().top) + 'px'});
  }

  // promoscope content ipad
  if (sparkScroll > sparkScrollExpanded) {
    expandedIn.css({'background-position':'0% ' + (sparkScroll - expandedIn.offset().top) + 'px'});
  }

  clearTimeout(action);
  scrollParallax();
});
