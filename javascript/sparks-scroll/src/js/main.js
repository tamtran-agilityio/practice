

$(window).scroll(function() { 
	// body...
	var sparkScroll = $(this).scrollTop();

	// Check value of image background basket
	var parallaxContainer = $('.background-basket').height();

	// Set transform of part logo top
	if (sparkScroll <= parallaxContainer) {

		var opacity = (sparkScroll - $('.background-basket').offset().top + 200) / (sparkScroll / 100);

		// Set property transform of traditional sparks
		$('.basket-line-long').css({
			'transform' : 'translate(0px, '- sparkScroll /60 +'%)'
		});

		$('.basket-iphone').css({
			'transform' : 'translate(0px, -'- sparkScroll /50 +'%)'
		});

		$('.background-basket').css({
			'transform' : 'translate(0px, -'- sparkScroll /60 +'%)'
		});

		$('.exchange-info').css({
			'transform' : 'translate(0px, -'- sparkScroll /200 +'%)'
		});

		$('line-long').css({
			'transform' : 'translate(0px, -'+ sparkScroll /15 +'%)'
		});

		$('.radio-airwaves').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.line-short').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.globes-online').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.line-short-last').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});

		$('.sparks-cloud').css({
			'transform' : 'translate(0px, -'+ sparkScroll /10 +'%)'
		});
	}
	
	// Set property opacity of part what sparks
	if(sparkScroll > $('.content-sparks').offset().top - $(window).height()) {

		var opacity = (sparkScroll - $('.content-sparks').offset().top + 200) / (sparkScroll / 100);
		// Set property background position content what spark
		$('.what-sparks').css({'background-position':'center '+ (sparkScroll - $('.what-sparks').offset().top) +'px'});
		$('.background-basket').css({'background-position':'center '+ (sparkScroll - $('.background-basket').offset().top) +'px'});
		// Set property background opacity content what spark
		$('.sparks-what-text').css({'opacity': opacity});
		$('.fan-iphone').css({'opacity': opacity});
		$('.app-iphone').css({'opacity': opacity});
		$('.channels-text').css({'opacity': opacity});
		$('.background-sparks').css({'opacity': opacity});

	}

	// Set property opacity of part how does
	if(sparkScroll > $('.benefit-content').offset().top - $(window).height()) {

		var opacitysText = (sparkScroll - $('.benefit-content').offset().top + 500) / (sparkScroll / 100);
		var opacityVisual = (sparkScroll - $('.comment-visual').offset().top + 800) / (sparkScroll / 100);
		var opacityArrow = (sparkScroll - $('.comment-visual').offset().top + 700) / (sparkScroll / 50);
		var opacityTweet = (sparkScroll - $('.comment-visual').offset().top + 600) / (sparkScroll / 50);
		var opacityArrowRight = (sparkScroll - $('.comment-visual').offset().top + 700) / (sparkScroll / 100);
		var opacityTweetUser = (sparkScroll - $('.comment-visual').offset().top + 500) / (sparkScroll / 80);
		var opacityTopic = (sparkScroll - $('.comment-visual').offset().top + 300) / (sparkScroll / 100);
		
		$('.how-does').css({'background-position':'center '+ (sparkScroll - $('.how-does').offset().top) +'px'});
		// Set background position content benefit
		$('.benefit-content').css({'background-position':'center '+ (sparkScroll - $('.benefit-content').offset().top) +'px'});
		
		// Set property opacity content benefit
		$('.benefit-content').css({'opacity': opacitysText});

		// Set property opacity grow content
		$('.grow-content').css({'opacity': opacitysText});

		// Set property opacity comment visual	
		$('.comment-visual').css({'opacity': opacityVisual});

		// Set property opacity image arrow left
		$('.arrow-left').css({'opacity': opacityArrow});	

		// Set property opacity image tweet wall
		$('.tweet-wall').css({'opacity': opacityTweet});

		// Set property opacity image comtent comment
		$('.content-comment').css({'opacity': opacityTweet});

		// Set property opacity image comment list
		$('.comment-list').css({'opacity': opacityTweet});

		// Set property opacity image arrow right
		$('.arrow-right').css({'opacity': opacityArrowRight});

		// Set property opacity image comment user
		$('.content-user').css({'opacity': opacityTweetUser});

		// Set property opacity text topic content
		$('.topic-content').css({'opacity': opacityTopic});
	}

	// Set background and opacity of ipad
	if(sparkScroll > $('.topic-tweet').offset().top - $(window).height()) {

		var opacityTopicTweet = (sparkScroll - $('.topic-tweet').offset().top + 800) / (sparkScroll / 100);
		var opacityArrowHorizontal = (sparkScroll - $('.topic-tweet').offset().top +800) / (sparkScroll / 100);
		var opacityIpad = (sparkScroll - $('.topic-tweet').offset().top +700) / (sparkScroll / 100);
		
		// Set property background position of slide ipad
		$('.screenshot').css({'background-position':'center '+ (sparkScroll - $('.screenshot').offset().top) +'px'});
		
		// Set property opacity of image topic tweet
		$('.topic-tweet').css({'opacity': opacityTopicTweet});

		// Set property opacity of image arrow horizontal
		$('.arrow-horizontal').css({'opacity': opacityArrowHorizontal});

		// Set property opacity of image ipad
		$('.background-ipad').css({'opacity': opacityIpad});
	}

	// Promoscope content ipad
	if(sparkScroll > $('.background-ipad').offset().top - $(window).height()){


		var opacityContent = (sparkScroll - $('.background-ipad').offset().top + 500) / (sparkScroll / 100);
		
		//Set property background of content ipad
		$('.content-ipad').css({'background-position':'center '+ (sparkScroll - $('.content-ipad').offset().top) +'px'});
		
		//Set property opacity of image content ipad
		$('.content-ipad').css({'opacity': opacityContent});
	}
});

// Set top down of image 
// $(document).ready(function() {
		
// 		function beeTop() {
// 				$(".content-ipad").animate({top: "-=500"}, 1000, "swing", beeDown);
// 		}
// 		function beeDown() {
// 				$(".content-ipad").animate({top: "+=500"}, 1000, "swing", beeTop);
// 		}
		
// 		beeDown();
// });

//  Scrolling image content in image ipade
$(function(){
	var scroller = $('.background-ipad div.content-ipad');
	var scrollerContent = scroller.children('ul');
	scrollerContent.children().clone().appendTo(scrollerContent);
	var curX = 0;
	scrollerContent.children().each(function(){
			var $this = $(this);
			$this.css('top', curX);
			curX += $this.outerWidth(true);
	});
	var fullW = curX * 2;
	var viewportW = scroller.width();

	// Scrolling speed management
	var controller = {curSpeed:0, fullSpeed:4};
	var $controller = $(controller);
	var tweenToNewSpeed = function(newSpeed, duration)
	{
			if (duration === undefined)
					duration = 600;
			$controller.stop(true).animate({curSpeed:newSpeed}, duration);
	};

	// Pause on hover
	scroller.hover(function(){
			tweenToNewSpeed(0);
	}, function(){
			tweenToNewSpeed(controller.fullSpeed);
	});

	// Scrolling management; start the automatical scrolling
	var doScroll = function()
	{
			var curX = scroller.scrollTop();
			var newX = curX + controller.curSpeed;
			if (newX > fullW*0.5 - viewportW + 200)
					newX -= fullW;
			scroller.scrollTop(newX);
	};

	setInterval(doScroll, 100);
	tweenToNewSpeed(controller.fullSpeed);
});
