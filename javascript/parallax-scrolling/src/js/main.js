$('.parallax-window').parallax({imageSrc: '/images/stellar-spire-eagle-nebula.jpg'});
$('.parallax-window').parallax({naturalWidth: 1000});
$('.parallax-window').parallax({zIndex: 100});
$('.parallax-container').parallax({imageSrc: '/images/spiral-galaxy.jpg'});
$('.parallax-mirror').parallax({imageSrc: '/images/helix-nebula.jpg'});

jQuery(window).trigger('resize').trigger('scroll');

var s = skrollr.init();
