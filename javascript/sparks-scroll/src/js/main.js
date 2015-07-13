// /* Script of parallax scrolling*/
// $(window).scroll(function() { 
// 	// body...
// 	var sparkScroll = $(this).scrollTop();
// 	// Check value of image background basket
// 	var parallaxContainer = $('.bg-pitch-basket').height();
// 	var flag = false;
// 	// Set transform of part logo top
// 	if ((sparkScroll <= parallaxContainer) && (flag === false)) {

// 		var opacity = (sparkScroll - $('.bg-pitch-basket').offset().top + 200) / (sparkScroll /4);
// 		$('.bg-pitch-basket').css({'background-position':'center '+ (sparkScroll - $('.bg-pitch-basket').offset().top) +'px'});
// 		flag = true;
// 	}

// 	// Set property opacity of part what sparks
// 	if((sparkScroll > $('.sparks-insiders').offset().top - $(window).height())  && (flag !== true))  {

// 		// Set property background position content what spark
// 		$('.sparks-insiders').css({'background-position':'center '+ (sparkScroll - $('.sparks-insiders').offset().top) +'px'});
// 		// Set property background opacity content what spark
// 		$('.contain-ball').css({'opacity': opacity});
// 	}

// 	// Set property opacity of part how how-does
// 	if((sparkScroll > $('.influence-digital').offset().top - $(window).height()) && (flag === false)) {

// 		// var opacitysVisual = (sparkScroll - $('.influence-digital__visual').offset().top + 800) / (sparkScroll / 2);
// 		var opacityDriver = (sparkScroll - $('.influence-digital__drive').offset().top + 1500) / (sparkScroll / 2);
// 		var opacityBenefit = (sparkScroll - $('.influence-digital__benefit').offset().top + 800) / (sparkScroll / 2);
// 		var opacityWall = (sparkScroll - $('.bg-tweet__wall').offset().top + 800) / (sparkScroll / 8);
// 		var opacityArrowLeft = (sparkScroll - $('.bg-arrow__left').offset().top + 1000) / (sparkScroll / 8);
// 		var opacityArrowRight = (sparkScroll - $('.bg-arrow__right').offset().top + 1000) / (sparkScroll / 6);
		
// 		// Set property opacity grow content
// 		$('.influence-digital__drive').css({'opacity': opacityDriver});

// 		// Set property opacity comment visual	
// 		$('.influence-digital__benefit').css({'opacity': opacityBenefit});

// 		// Set property opacity Tweet wall
// 		$('.bg-tweet__wall').fadeIn(3000);
// 		// $('.bg-tweet__wall').css({'opacity': opacityWall});

// 		// Set property opacity Tweet wall	
// 		$('.bg-arrow__left').css({'opacity': opacityArrowLeft});

// 		// Set property opacity Tweet wall	
// 		$('.bg-arrow__right').css({'opacity': opacityArrowRight});
// 	}
// });

var action;

$(window).scroll(function() {

	var sparkScroll = $(this).scrollTop();
	var heightBasket = $('.bg-pitch-basket').height();
	var heightSilver = $('.screenshot-silver').height();

	if (sparkScroll <= heightBasket) {
		$('.bg-pitch-basket').css({'background-position':'center '+ (sparkScroll - $('.bg-pitch-basket').offset().top) +'px'});
	}

	if (sparkScroll <= heightSilver) {
		$('.screenshot-silver').css({'background-position':'center '+ (sparkScroll - $('.screenshot-silver').offset().top) +'px'});
	}

	clearTimeout(action);
	scrollParallax();
});

function scrollParallax() {

	var heightInfluence = $('.influence-digital').height();

	action = setTimeout(function() {
		
		// fade in block driver 
		if ($(this).scrollTop() > (heightInfluence/6)) {
			$('.influence-digital__drive').fadeIn();
		}

		if ($(this).scrollTop() > (heightInfluence/4)) {
			$('.bg-arrow__left').fadeIn();
		}

		if ($(this).scrollTop() > (heightInfluence/4)) {
			$('.bg-arrow__right').fadeIn();
		}

		if ($(this).scrollTop() > (heightInfluence)) {
			$('.bg-tweet__wall').fadeIn();
		}

	}, 200);
}
