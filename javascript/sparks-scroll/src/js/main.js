// var s = skrollr.init();

// skrollr.init({forceHeight: false});

var parallaxContainer = $('.background-basket').height();

$(window).scroll(function() { 
	// body...
	var sparkScroll = $(this).scrollTop();

	//
	if (sparkScroll <= parallaxContainer) {

		$('.basket-line-long').css({
			'transform' : 'translate(0px, '+ sparkScroll /60 +'%)'
		});

		$('.basket-iphone').css({
			'transform' : 'translate(0px, -'+ sparkScroll /50 +'%)'
		});

		$('.background-basket').css({
			'transform' : 'translate(0px, -'+ sparkScroll /60 +'%)'
		});

		$('.txt-wapper').css({
			'transform' : 'translate(0px, -'+ sparkScroll /20 +'%)'
		});

		$('.basket-line-long').css({
			'transform' : 'translate(0px, -'+ sparkScroll /15 +'%)'
		});

		$('.basket-radio').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.basket-line-short').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.basket-globes').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.basket-line-short-last').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.basket-cloud').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});
	}
	
	if(sparkScroll > $('.wapper-content').offset().top - $(window).height()){

		$('.wapper-content').css({'background-position':'center '+ (sparkScroll - $('.wapper-content').offset().top) +'px'});

		var opacity = (sparkScroll - $('.wapper-content').offset().top + 200) / (sparkScroll / 5);

		$('.sparks-what-text').css({'opacity': opacity});

		$('.fan-iphone').css({'opacity': opacity});

		$('.app-iphone').css({'opacity': opacity});

		$('.channels-text').css({'opacity': opacity});

		$('.background-sparks').css({'opacity': opacity});

	}
});
