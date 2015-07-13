/* script of parallax scrolling*/

var action;

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
	};

	// set background position of screenshot silver
	if (sparkScroll <= heightSilver) {
		$('.screenshot-silver').css({'background-position':'center ' + (sparkScroll - $('.screenshot-silver').offset().top) + 'px'});
	}

	// promoscope content ipad
	if (sparkScroll <= (sparkScrollExpanded + heightExpanded / 2)) {
		$('.screenshot__expanded--in').css({'background-position':'center ' + (sparkScroll - $('.screenshot__expanded--in').offset().top) + 'px'});
	}

	clearTimeout(action);
	scrollParallax();
});

function scrollParallax() {

	var heightInfluence = $('.influence-digital').height();
	var heightScreenshot = $('.screenshot-silver').height();

	action = setTimeout(function() {

		// fade in arrow left, right
		if (($(this).scrollTop()) > (heightInfluence / 2)) {
			$('.influence-digital__drive').fadeIn();
			$('.bg-arrow__left').fadeIn();
			$('.bg-arrow__right').fadeIn();
			$('.bg-tweet__wall').fadeIn();
		};

		// fade in block screenshot silver
		if ($(this).scrollTop() > (heightScreenshot / 2)) {
			$('.screenshot-silver').fadeIn();
		}

	}, 200);
}
