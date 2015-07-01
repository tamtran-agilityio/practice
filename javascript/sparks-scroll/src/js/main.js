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
	
	if(sparkScroll > $('.wapper-content').offset().top - $(window).height()) {

		$('.wapper-content').css({'background-position':'center '+ (sparkScroll - $('.wapper-content').offset().top) +'px'});

		var opacity = (sparkScroll - $('.wapper-content').offset().top + 200) / (sparkScroll / 5);

		$('.sparks-what-text').css({'opacity': opacity});

		$('.fan-iphone').css({'opacity': opacity});

		$('.app-iphone').css({'opacity': opacity});

		$('.channels-text').css({'opacity': opacity});

		$('.background-sparks').css({'opacity': opacity});

	}

	if(sparkScroll > $('.benefit-content').offset().top - $(window).height()) {

		$('.benefit-content').css({'background-position':'center '+ (sparkScroll - $('.benefit-content').offset().top) +'px'});

		var opacitysText = (sparkScroll - $('.benefit-content').offset().top + 100) / (sparkScroll / 5);

		$('.benefit-content').css({'opacity': opacitysText});

		$('.grow-content').css({'opacity': opacitysText});

		var opacityVisual = (sparkScroll - $('.comment-visual').offset().top + 700) / (sparkScroll / 10);
		
		$('.comment-visual').css({'opacity': opacityVisual});

		var opacityArrow = (sparkScroll - $('.comment-visual').offset().top + 600) / (sparkScroll / 6);

		$('.arrow-left').css({'opacity': opacityArrow});

		var opacityTweet = (sparkScroll - $('.comment-visual').offset().top + 600) / (sparkScroll / 10);
		
		$('.tweet-wall').css({'opacity': opacityTweet});

		$('.content-comment').css({'opacity': opacityTweet});

		$('.comment-list').css({'opacity': opacityTweet});

		var opacityArrowRight = (sparkScroll - $('.comment-visual').offset().top + 450) / (sparkScroll / 6);

		$('.arrow-right').css({'opacity': opacityArrowRight});

		var opacityTweetUser = (sparkScroll - $('.comment-visual').offset().top + 400) / (sparkScroll / 6);

		$('.content-user').css({'opacity': opacityTweetUser});

		var opacityTopic = (sparkScroll - $('.comment-visual').offset().top + 300) / (sparkScroll / 6);

		$('.topic-content').css({'opacity': opacityTopic});
	}

	if(sparkScroll > $('.topic-tweet').offset().top - $(window).height()) {

		$('.slide-ipad').css({'background-position':'center '+ (sparkScroll - $('.slide-ipad').offset().top) +'px'});
		var opacity = (sparkScroll - $('.topic-tweet').offset().top + 700) / (sparkScroll / 6);

		$('.topic-tweet').css({'opacity': opacity});

		var opacityArrowHorizontal = (sparkScroll - $('.topic-tweet').offset().top + 200) / (sparkScroll / 6);

		$('.arrow-horizontal').css({'opacity': opacityArrowHorizontal});

		var opacityIpad = (sparkScroll - $('.topic-tweet').offset().top + 100) / (sparkScroll / 6);

		$('.background-ipad').css({'opacity': opacityIpad});
	}
});
