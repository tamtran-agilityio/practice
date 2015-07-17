/*script of parallax scrolling*/

/**
 * scrollParallax execute fade in when scrolling into
 */
var action;

/**
 * function execute fade out
 */
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
    if (($(this).scrollTop()) > (heightInfluence * 1.1)) {
      arrowLeft.fadeIn('slow');
      arrowRight.fadeIn('slow');
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
  var sparkScrollExpandedPut = $('.screenshot__expanded--put');
  var bgPitch = $('.bg-pitch-basket');
  var bgLearn = $('.bg-ball__learn');
  var bgSparks = $('.sparks-insiders');
  var bgInfluence = $('.influence-digital');
  var heightBasket = bgPitch.height();
  var heightLearn = $('.bg-ball__learn').height();
  var heightSilver = $('.screenshot-silver').height();

  var screenSilver = $('.screenshot-silver');
  var expandedIn = $('.screenshot__expanded--in');

  // set background position of pitch basket
  if (sparkScroll <= heightBasket) {
    bgPitch.css({'background-position':'center ' + (sparkScroll - bgPitch.offset().top) + 'px'});
  }

  // set property background of background ball learn
  if (sparkScroll > bgLearn.height()) {
    bgLearn.css({'background-position':'center ' + (sparkScroll + $(window).height() - bgLearn.height() - bgLearn.offset().top) + 'px'});
  }

  // set background position of screenshot silver
  if (sparkScroll <= heightSilver) {
    screenSilver.css({'background-position':'center ' + (sparkScroll - screenSilver.offset().top) + 'px'});
  }

  // promoscope content ipad
  if (sparkScroll > sparkScrollExpanded / 2) {
    expandedIn.css({'background-position':'0%' + (+expandedIn.offset().top - sparkScroll) + 'px'});
  } else {
    expandedIn.css({'background-position':'0% 0%'});
  }

  clearTimeout(action);
  scrollParallax();
});
