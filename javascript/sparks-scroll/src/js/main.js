/* script of parallax scrolling*/

var action;

function scrollParallax() {

	var heightInfluence = $('.influence-digital').height();
	var heightScreenshot = $('.screenshot-silver').height();
	var heightHorizontal = $('.screenshot__arrow--horizontal').height();

	action = setTimeout(function() {

	// fade in block influence-digital
	if (($(this).scrollTop()) > (heightInfluence / 3)) {
		$('.influence-digital__drive').fadeIn();
		$('.bg-tweet__wall').fadeIn();
	}

	// fade in arrow left, right
	if (($(this).scrollTop()) > (heightInfluence * 1.2 )) {
		$('.bg-arrow__left').fadeIn();
		$('.bg-arrow__right').fadeIn();
	}

	// fade in block screenshot silver
	if ($(this).scrollTop() > (heightScreenshot)) {
		$('.screenshot__expanded--details').fadeIn();
		$('.screenshot__expanded--put').fadeIn();
	}

	if ($(this).scrollTop() > (heightScreenshot * 2.5)) {
		$('.screenshot__arrow--horizontal').fadeIn();
	}

	}, 200);
}

$(window).scroll(function() {

	var sparkScroll = $(this).scrollTop();
	var sparkScrollExpanded = $('.screenshot__expanded--in').offset().top;
	var heightExpanded = $('.screenshot__expanded--in').height();
	var heightBasket = $('.bg-pitch-basket').height();
	var heightSilver = $('.screenshot-silver').height();
	var heightBallLearn = $('.bg-ball__learn').height();

	//  set background position of pitch basket
	if (sparkScroll <= heightBasket) {
		$('.bg-pitch-basket').css({'background-position':'center ' + (sparkScroll - $('.bg-pitch-basket').offset().top) + 'px'});
	}

	// set background position of screenshot silver
	if (sparkScroll <= heightSilver) {
		$('.screenshot-silver').css({'background-position':'center ' + (sparkScroll - $('.screenshot-silver').offset().top) + 'px'});
	}

	// promoscope content ipad
	if (sparkScroll > (sparkScrollExpanded)) {
		$('.screenshot__expanded--in').css({'background-position':'0% ' + (sparkScroll - 15 - $('.screenshot__expanded--in').offset().top) + 'px'});
	}

	clearTimeout(action);
	scrollParallax();
});
