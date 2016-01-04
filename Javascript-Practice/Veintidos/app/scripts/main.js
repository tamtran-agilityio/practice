/*global $ jQuery */
$(function () {
  'use strict';

  // call function amination
  $('.animsition').animsition();
  var element = document.querySelector('img');
  // Intense(element);
  $(window).load(function() {
    // Animate loader off screen
    setTimeout(function() {
      $('body').addClass('pace-done');
    }, 1600);
    setTimeout(function() {
      $('main').addClass('animation');
    }, 1600);
    $('main').animate({
      opacity: 1
    }, 1500);
    $('.loader').animate({
      opacity: 1
    }, 100);
    $('.loader').css({
      opacity: 1,
      bottom: 250
    });
    $('.loader img').css({
      transform: 'rotate(500deg)'
    });
  });

  // load data json
  renderItem('../templates/modules/services.html', '#services');
  renderItem('../templates/modules/footer.html', '#footerSocial');
  renderItem('../templates/modules/slider.html', '#cases');
  // function of set height instashow-gallery-item
  galleryHeight();

  // excute function slider page index
  setTimeout(function() {
    $('#cases').pogoSlider({
      autoplay: true,
      autoplayTimeout: 1500,
      displayProgess: true,
      preserveTargetSize: true,
      targetWidth: 1000,
      targetHeight: 300,
      responsive: true,
      slideTransition: 'verticalSlide',
      generateButton: true
    }).data('plugin_pogoSlider');
  }, 1600);

  // set size block when resize
  $(window).bind('resize', function() {
    var t = $(window).height();
    var o = $(window).width();
    $('.resize').css({
      width: o,
      height: t
    });
    galleryHeight();
    hoverItem();
    $(document).ready(function() {
      if ($(window).width() >= 1024) {
        $( window ).scroll(function() {
          menuScroll();
        });
      }
    });
  });
  $(window).load(function() {
    var e = $(window).height();
    var t = $(window).width();
    $('.resize').css({
      width: t,
      height: e
    });
  });
  $(window).width() <= 480 && $(document).ready(function() {
    $('.wrapp-cases').addClass('resize');
  });
  $(window).width() <= 1024 && $(document).ready(function() {
    $('.wrapp-cases').addClass('resize');
  });

  // Use plugin lazyload load image
  $(window).bind('load', function() {
    $('img').lazyload({
      effect: 'fadeIn'
    });
  });

  // excute function slider
  coverSlider();

  // excute function set title link active
  setPageActive('index','.link-home');
  setPageActive('works','.link-work');
  setPageActive('agency','.link-agency');

  // handle icon menu
  $('.menu-icon').click(function() {
    $('header').css({
      top: '0px'
    });
    $('.menu-icon').css({
      transform: 'rotate(90deg)'
    });
    $('.show').css({
      display: 'block'
    });
  });
  $('.show').click(function() {
    $('header').css({
      top: '-100%'
    });
    $('.menu-icon').css({
      transform: 'rotate(0deg)'
    });
    $('.show').css({
      display: 'none'
    });
  });
  $('.open-contact').click(function() {
    $('.contacto').addClass('open');
    $('.mascara-contact').addClass('slow');
    $('.nav').addClass('open');
    $('main').css({
      opacity: .1,
      'pointer-events': 'none'
    });
  });
  $('.cerrar').click(function() {
    $('.contacto').removeClass('open');
    $('.nav').removeClass('open');
    $('main').css({
        opacity: 1,
        'pointer-events': 'auto'
    });
  });

  /************** Function helper *************/

  // function get data to data.json
  function getData(source, element) {

    $.get('../data/data.json', function(data) {

      // compile the template
      var template = Handlebars.compile(source);

      // pass our data to the template
      var html = template(data);
      element.prepend(html);
    });
  };

  // render article services with handlebarjs
  function renderItem(pathPage, idLoad ) {

    // DOM HTML prepend id services at home page
    $.get( pathPage, function(data) {

      var $renderElement = $(idLoad);
      getData(data, $renderElement);
    });
  };
  // function set border of element
  $(function($) {
    $.fn.extend({
      repositionBorders: function() {
        $('body div.animatedBorder').each(function() {
          var t = $('.animatedBorderSprite-top', $(this)).css('background-color');
          var o = $('.animatedBorderSprite-top', $(this)).height();
          $(this).animatedBorder().animatedBorder({
            size: o,
            color: t
          })
        });
      },
      animatedBorder: function(t) {
        var o, s = {
          size: 2,
          color: '#6699CC',
          hover: !1
        };
        return t = $.extend(s, t),
        this.each(function() {
          switch (t) {
            case 'hide':
              $(this).children('.animatedBorderSprite').fadeOut('slow');
              break;
            case 'show':
              $(this).children('.animatedBorderSprite').fadeIn('fast');
              break;
            case 'destroy':
              $(this).children('.animatedBorderSprite').remove(),
              $(this).unbind('mouseenter mouseleave');
              break;
            default:
            if ($(this).hasClass('animatedBorder'))
              return $('.animatedBorderSprite', $(this)).remove(),
              void $(this).removeClass('animatedBorder');
            $(this).addClass('animatedBorder'),
            o = {
              height: $(this).innerHeight(),
              width: $(this).innerWidth()
            },
            $(this).append($('<div />').addClass('animatedBorderSprite animatedBorderSprite-top').css({
              top: -t.size,
              left: -t.size,
              width: o.width + 2 * t.size,
              height: t.size,
              'background-color': t.color,
              'z-index': 1
            })),
            $(this).append($('<div />').addClass('animatedBorderSprite animatedBorderSprite-bottom').css({
              bottom: -t.size,
              left: -t.size,
              width: o.width + 2 * t.size,
              height: t.size,
              'background-color': t.color,
              'z-index': 1
            })),
            $(this).append($('<div />').addClass('animatedBorderSprite').css({
              top: 0,
              left: -t.size,
              width: t.size,
              height: o.height,
              'background-color': t.color,
              'z-index': 1
            })),
            $(this).append($('<div />').addClass('animatedBorderSprite').css({
              top: 0,
              right: -t.size,
              width: t.size,
              height: o.height,
              'background-color': t.color,
              'z-index': 1
            })),
            t.hover && ($(this).hover(function() {
              $(this).children('.animatedBorderSprite').fadeIn('fast');
            }, function() {
              $(this).children('.animatedBorderSprite').fadeOut('slow');
            }),
            $(this).children('.animatedBorderSprite').hide());
          }
        })
      }
    })
  }(jQuery));

  $(document).ready(function(){

    // add border
    $('li.latest__item').animatedBorder({
      size: 1,
      color: '#4a4a4c',
      hover: !0
    });
    $('.pogoSlider-dir-btn--prev').animatedBorder({
      size: 1,
      color: '#4a4a4c',
      hover: !1
    });
    $('.pogoSlider-dir-btn--next').animatedBorder({
      size: 1,
      color: '#4a4a4c',
      hover: !1
    });
    $('.pogoSlider-nav li').animatedBorder({
      size: 1,
      color: '#4a4a4c',
      hover: !0
    });
    $('.wrapp__preguntas li').animatedBorder({
        size: 1,
        color: '#4a4a4c',
        hover: !1
    })
  });


  /* VIEWPORT CHECKER */
  (function($){
    $.fn.viewportChecker = function(useroptions){
      // Define options and extend with user
      var options = {
        classToAdd: 'visible',
        offset: 100
        // callbackFunction: function(elem){}
      };
      $.extend(options, useroptions);

      // Cache the given element and height of the browser
      var $elem = this,
      windowHeight = $(window).height();

      this.checkElements = function(){
      // Set some vars to check with
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html'),
        viewportTop = $(scrollElem).scrollTop(),
        viewportBottom = (viewportTop + windowHeight);

        $elem.each(function(){
          var $obj = $(this);
          // If class already exists; quit
          if ($obj.hasClass(options.classToAdd)) {
          return;
        }

        // define the top position of the element and include the offset which makes is appear earlier or later
        var elemTop = Math.round( $obj.offset().top ) + options.offset,
        elemBottom = elemTop + ($obj.height());

        // Add class if in viewport
        if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
          $obj.addClass(options.classToAdd);

          // Do the callback function. Callback wil send the jQuery object as parameter
          // options.callbackFunction($obj);
        }
      });
    };

    // Run checkelements on load and scroll
    $(window).scroll(this.checkElements);
    this.checkElements();

    // On resize change the height var
    $(window).resize(function(e){
      windowHeight = e.currentTarget.innerHeight;
    });
    };
  })(jQuery);

  $(document).ready(function(){
    // show item when scroll next
    $('.mascara-trama').viewportChecker({
      classToAdd: 'contraer',
      offset: 150
    });
    $('.services__web').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 350
    });
    $('.services__landing').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 400
    });
    $('.services__wordspress').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 420
    });
    $('.services__branding').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 350
    });
    $('.services__corporate').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 400
    });
    $('.services__advertising').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 420
    });
    $('.services__item h3').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInDown',
      offset: 150
    });
    $('.til-section h6').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 50
    });
    $('.landing li').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 150
    });
    $('.branding div').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 150
    });
    $('.pages__block li').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 150
    });
    $('.wrapp__preguntas li').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 150
    });
    $('ul.about__largue li').viewportChecker({
      classToAdd: 'up',
      offset: 150
    });
    $('.bloque').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.about__largue').viewportChecker({
        classToAdd: 'largue',
        offset: 250
    })
  });

  setInterval(function() {
    // Remove .active class from the active li, select next li sibling.
    var next = $('ul.heading__rotate li.active').removeClass('active').next('li');
    $('ul.heading__rotate li').css('transform', 'translateX(0px) translateY(0px)');
    // Did we reach the last element? Of so: select first sibling
    if (!next.length) {
      next = next.prevObject.siblings(':first');
      // Add .active class to the li next in line.
    }
    next.addClass('active');
  }, 3000);

  setInterval(function() {
    $('li.heading__rotating.active').css('transform', 'translateX(0px) translateY(-250px)');
  }, 2000);

  // function of set height instashow-gallery-item
  function galleryHeight() {
    var itemHeight = $('.instashow-gallery-item').width();
    $('.instashow-gallery-item').css('height', itemHeight);
  }

  // set slider page works
  function coverSlider() {
    $('.cover-slider').each(function() {
      var target = $(this).find('.cover-slider__slide');
      var sliderLast = target.length - 1;
      var s = 0;
      var sliderActive = function() {
          target.removeClass('actives inactives');
          target.eq(s).addClass('inactives');
          ((s === sliderLast) && (s = -1))
          target.eq(++s).addClass('actives');
          window.setTimeout(sliderActive, 5000);
        };
      sliderActive();
    });
  }

  // check title page active
  function setPageActive(element, node) {
    if ($('body').hasClass(element)) {
      $(node).addClass('select');
    } else {
      $(node).removeClass('select');
    }
  }

  // set hover image when sreen larger
  function hoverItem() {
    var $itemMugaku = $('li.web__list--mugaku');
    var $itemCrea = $('li.web__list--crea');
    var $itemHenry = $('li.web__list--henry');
    var $itemRoom = $('li.web__list--room' );
    $(window).width() >= 1024 && $(window).scroll(function() {
      $itemMugaku.hover(function() {
        $itemMugaku.css({
            width: '60.1%',
            height: '60.1%',
            'z-index': 1,
            'background-image': 'url(./images/work-thumb-mugako-b.jpg)'
        }),
        $('li.web__list--mugaku .web__name').addClass('show');
        $('li.web__list--mugaku .web__name h2').addClass('show');
        $('li.web__list--mugaku .web__name').removeClass('showhide');
        $('li.web__list--mugaku .web__name h2').removeClass('showhide');
        $itemHenry.css({
            width: '40.1%',
            height: '60.1%',
            'background-size': '150%'
        }),
        $itemCrea.css({
            height: '40.1%',
            width: '60.1%'
        }),
        $itemRoom.css({
            height: '40.1%',
            width: '40.1%'
        })
      }, function() {
          $itemMugaku.css({
              width: '50%',
              height: '50%',
              'z-index': 0,
              'background-image': 'url(./images/work-thumb-mugako-a.jpg)'
          });
          $('li.web__list--mugaku .web__name').addClass('showhide');
          $('li.web__list--mugaku .web__name h2').addClass('showhide');
          $('li.web__list--mugaku .web__name').removeClass('show');
          $('li.web__list--mugaku .web__name h2').removeClass('show');
          $itemHenry.css({
              width: '50%',
              height: '50%',
              'background-size': '100%'
          }),
          $itemCrea.css({
              width: '50%',
              height: '50%'
          }),
          $itemRoom.css({
              width: '50%',
              height: '50%'
          })
        });

      $itemHenry.hover(function() {
          $itemMugaku.css({
              width: '40.1%',
              height: '60.1%',
              'background-size': '150%',
              'z-index': 1
          }),
          $itemHenry.css({
              width: '60.1%',
              'z-index': 1,
              height: '60.1%',
              'background-image': 'url(../images/work-thumb-henry-b.jpg)'
          }),
          $itemCrea.css({
              height: '40.1%',
              width: '40.1%'
          }),
          $itemRoom.css({
              height: '40.1%',
              width: '60.1%'
          })
          $('li.web__list--henry .web__name').addClass('show');
          $('li.web__list--henry .web__name h2').addClass('show');
          $('li.web__list--henry .web__name').removeClass('showhide');
          $('li.web__list--henry .web__name h2').removeClass('showhide');
      }, function() {
          $itemMugaku.css({
              width: '50%',
              height: '50%',
              'background-size': '100%',
              'z-index': 0
          }),
          $itemHenry.css({
              width: '50%',
              'z-index': 0,
              height: '50%',
              'background-image': 'url(../images/work-thumb-henry-a.jpg)'
          }),
          $itemCrea.css({
              width: '50%',
              height: '50%'
          }),
          $itemRoom.css({
              width: '50%',
              height: '50%'
          });
          $('li.web__list--henry .web__name').addClass('showhide');
          $('li.web__list--henry .web__name h2').addClass('showhide');
          $('li.web__list--henry .web__name').removeClass('show');
          $('li.web__list--henry .web__name h2').removeClass('show');
        });
      $itemCrea.hover(function() {
          $itemMugaku.css({
              height: '40.1%',
              width: '60.1%'
          }),
          $itemHenry.css({
              height: '40.1%',
              width: '40.1%'
          }),
          $itemCrea.css({
              width: '60.1%',
              'z-index': 1,
              height: '61%',
              'background-image': 'url(./images/work-thumb-portfolio-b.jpg)'
          }),
          $itemRoom.css({
              width: '40.1%',
              height: '60.1%',
              'background-size': '150%'
          });
          $('li.web__list--crea .web__name').addClass('show');
          $('li.web__list--crea .web__name h2').addClass('show');
          $('li.web__list--crea .web__name').removeClass('showhide');
          $('li.web__list--crea .web__name h2').removeClass('showhide');
      }, function() {
          $itemMugaku.css({
              width: '50%',
              height: '50%'
          }),
          $itemHenry.css({
              width: '50%',
              height: '50%'
          }),
          $itemCrea.css({
              width: '50%',
              'z-index': 0,
              height: '50%',
              'background-image': 'url(./images/work-thumb-portfolio-a.jpg)'
          }),
          $itemRoom.css({
              width: '50%',
              height: '50%',
              'background-size': '100%'
          });
          $('li.web__list--crea .web__name').addClass('showhide');
          $('li.web__list--crea .web__name h2').addClass('showhide');
          $('li.web__list--crea .web__name').removeClass('show');
          $('li.web__list--crea .web__name h2').removeClass('show');
      });
      $itemRoom.hover(function() {
          $itemMugaku.css({
              height: '40.1%',
              width: '40.1%'
          }),
          $itemHenry.css({
              height: '40.1%',
              width: '60.1%'
          }),
          $itemRoom.css({
              width: '60.1%',
              height: '60.1%',
              'z-index': 1,
              'background-image': 'url(./images/work-thumb-apersonal-b.jpg)'
          }),
          $itemCrea.css({
              width: '40.1%',
              height: '60.1%',
              'background-size': '150%'
          });
          $('li.web__list--room .web__name').addClass('show');
          $('li.web__list--room .web__name h2').addClass('show');
          $('li.web__list--room .web__name').removeClass('showhide');
          $('li.web__list--room .web__name h2').removeClass('showhide');
      }, function() {
          $itemMugaku.css({
              width: '50%',
              height: '50%'
          }),
          $itemHenry.css({
              width: '50%',
              height: '50%'
          }),
          $itemRoom.css({
              width: '50%',
              height: '50%',
              'z-index': 0,
              'background-image': 'url(./images/work-thumb-apersonal-a.jpg)'
          }),
          $itemCrea.css({
              width: '50%',
              height: '50%',
              'background-size': '100%'
          });
          $('li.web__list--room .web__name').addClass('showhide');
          $('li.web__list--room .web__name h2').addClass('showhide');
          $('li.web__list--room .web__name').removeClass('show');
          $('li.web__list--room .web__name h2').removeClass('show');
        });
      })
  }

  hoverItem();
  // set parallax scroll
  function parallaxScroll() {
    var e = $(window).scrollTop();
    $('.parallax').css('top', 0 - 0.15 * e + 'px');
  }

  // function of show menu when scroll
  function menuScroll() {
    var heightScroll = $(window).scrollTop();
    var heightMenu = $('header').height();
    if (heightScroll > heightMenu) {
      $('header').css('top', '-100px');
    } else {
      $('header').css('top', '0');
    }
  }
  $(document).ready(function(){
    if ($(window).width() >= 1024) {
      $( window ).scroll(function() {
        menuScroll();
      });
    }
  })

  // show icon menu
  function showIconMenu() {
    if ($('body').hasClass('index')) {
      $('header').find('.icon-menu').css('display', 'none');
      $('header').find('.lenguaje').css('display', 'block');
    }
  }
  showIconMenu();

  // hover images landing
  $('li.landing__race').hover(function() {
    $('li.landing__race .landing__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.landing__race .landing__image').css({
      opacity: 1
    })
  });
  $('li.landing__optimus').hover(function() {
    $('li.landing__optimus .landing__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.landing__optimus .landing__image').css({
      opacity: 1
    })
  });
  $('li.landing__sony').hover(function() {
    $('li.landing__sony .landing__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.landing__sony .landing__image').css({
      opacity: 1
    })
  });
  $('li.landing__mahou').hover(function() {
    $('li.landing__mahou .landing__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.landing__mahou .landing__image').css({
      opacity: 1
    })
  });
  $('li.landing__consejero').hover(function() {
    $('li.landing__consejero .landing__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.landing__consejero .landing__image').css({
      opacity: 1
    })
  });
  $('li.landing__teresa').hover(function() {
    $('li.landing__teresa .landing__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.landing__teresa .landing__image').css({
      opacity: 1
    })
  });

  // hover images pages
  $('li.pages__wikilson').hover(function() {
    $('li.pages__wikilson .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__wikilson .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__idealista').hover(function() {
    $('li.pages__idealista .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__idealista .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__suzuki').hover(function() {
    $('li.pages__suzuki .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__suzuki .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__correos').hover(function() {
    $('li.pages__correos .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__correos .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__la-rioja').hover(function() {
    $('li.pages__la-rioja .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__la-rioja .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__chupachups').hover(function() {
    $('li.pages__chupachups .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__chupachups .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__groove').hover(function() {
    $('li.pages__groove .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__groove .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__creatividad').hover(function() {
    $('li.pages__creatividad .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__creatividad .pages__image').css({
      opacity: 1
    })
  });
  $('li.pages__suzuki-uno').hover(function() {
    $('li.pages__suzuki-uno .pages__image').css({
      opacity: 0
    });
    },
  function() {
    $('li.pages__suzuki-uno .pages__image').css({
      opacity: 1
    })
  });

  // excute show image when click
  var elements = document.querySelectorAll( '.landing__image' );
  Intense( elements );
  var elementsPages = document.querySelectorAll( '.pages__image' );
  Intense( elementsPages );
}(jQuery));

;(function(window) {

  'use strict';

  /**
   * **************************************************************************
   * utils
   * **************************************************************************
   */

  // from https://gist.github.com/desandro/1866474
  var lastTime = 0;
  var prefixes = 'webkit moz ms o'.split(' ');
  // get unprefixed rAF and cAF, if present
  var requestAnimationFrame = window.requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame;
  // loop through vendor prefixes and get prefixed rAF and cAF
  var prefix;
  for( var i = 0; i < prefixes.length; i++ ) {
    if ( requestAnimationFrame && cancelAnimationFrame ) {
      break;
    }
    prefix = prefixes[i];
    requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
    cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
    window[ prefix + 'CancelRequestAnimationFrame' ];
  }

  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if ( !requestAnimationFrame || !cancelAnimationFrame ) {
    requestAnimationFrame = function( callback, element ) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
      var id = window.setTimeout( function() {
        callback( currTime + timeToCall );
      }, timeToCall );
      lastTime = currTime + timeToCall;
      return id;
    };

    cancelAnimationFrame = function( id ) {
      window.clearTimeout( id );
    };
  }

  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // from http://www.quirksmode.org/js/events_properties.html#position
  function getMousePos(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY)   {
      posx = e.pageX;
      posy = e.pageY;
    }
    else if (e.clientX || e.clientY)  {
      posx = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
    return {
      x : posx,
      y : posy
    }
  }

  // from http://www.sberry.me/articles/javascript-event-throttling-debouncing
  function throttle(fn, delay) {
    var allowSample = true;

    return function(e) {
      if (allowSample) {
        allowSample = false;
        setTimeout(function() { allowSample = true; }, delay);
        fn(e);
      }
    };
  }

  /***************************************************************************/

  /**
   * TiltFx fn
   */
  function TiltFx(el, options) {
    this.el = el;
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
    this._initEvents();
  }

  /**
   * TiltFx options.
   */
  TiltFx.prototype.options = {
    // number of extra image elements (div with background-image) to add to the DOM - min:1, max:5 (for a higher number, it's recommended to remove the transitions of .tilt__front in the stylesheet.
    extraImgs : 2,
    // the opacity value for all the image elements.
    opacity : 0.7,
    // by default the first layer does not move.
    bgfixed : true,
    // image element's movement configuration
    movement : {
      perspective : 1000, // perspective value
      translateX : -10, // a relative movement of -10px to 10px on the x-axis (setting a negative value reverses the direction)
      translateY : -10, // a relative movement of -10px to 10px on the y-axis
      translateZ : 20, // a relative movement of -20px to 20px on the z-axis (perspective value must be set). Also, this specific translation is done when the mouse moves vertically.
      rotateX : 2, // a relative rotation of -2deg to 2deg on the x-axis (perspective value must be set)
      rotateY : 2, // a relative rotation of -2deg to 2deg on the y-axis (perspective value must be set)
      rotateZ : 0 // z-axis rotation; by default there's no rotation on the z-axis (perspective value must be set)
    }
  }

  /**
   * Initialize: build the necessary structure for the image elements and replace it with the HTML img element.
   */
  TiltFx.prototype._init = function() {
    this.tiltWrapper = document.createElement('div');
    this.tiltWrapper.className = 'tilt';

    // main image element.
    this.tiltImgBack = document.createElement('div');
    this.tiltImgBack.className = 'tilt__back';
    this.tiltImgBack.style.backgroundImage = 'url(' + this.el.src + ')';
    this.tiltWrapper.appendChild(this.tiltImgBack);

    // image elements limit.
    if( this.options.extraImgs < 1 ) {
      this.options.extraImgs = 1;
    }
    else if( this.options.extraImgs > 5 ) {
      this.options.extraImgs = 5;
    }

    if( !this.options.movement.perspective ) {
      this.options.movement.perspective = 0;
    }

    // add the extra image elements.
    this.imgElems = [];
    for(var i = 0; i < this.options.extraImgs; ++i) {
      var el = document.createElement('div');
      el.className = 'tilt__front';
      el.style.backgroundImage = 'url(' + this.el.src + ')';
      el.style.opacity = this.options.opacity;
      this.tiltWrapper.appendChild(el);
      this.imgElems.push(el);
    }

    if( !this.options.bgfixed ) {
      this.imgElems.push(this.tiltImgBack);
      ++this.options.extraImgs;
    }

    // add it to the DOM and remove original img element.
    this.el.parentNode.insertBefore(this.tiltWrapper, this.el);
    this.el.parentNode.removeChild(this.el);

    // tiltWrapper properties: width/height/left/top
    this.view = { width : this.tiltWrapper.offsetWidth, height : this.tiltWrapper.offsetHeight };
  };

  /**
   * Initialize the events on the main wrapper.
   */
  TiltFx.prototype._initEvents = function() {
    var self = this,
      moveOpts = self.options.movement;

    // mousemove event..
    this.tiltWrapper.addEventListener('mousemove', function(ev) {
      requestAnimationFrame(function() {
          // mouse position relative to the document.
        var mousepos = getMousePos(ev),
          // document scrolls.
          docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop},
          bounds = self.tiltWrapper.getBoundingClientRect(),
          // mouse position relative to the main element (tiltWrapper).
          relmousepos = {
            x : mousepos.x - bounds.left - docScrolls.left,
            y : mousepos.y - bounds.top - docScrolls.top
          };

        // configure the movement for each image element.
        for(var i = 0, len = self.imgElems.length; i < len; ++i) {
          var el = self.imgElems[i],
            rotX = moveOpts.rotateX ? 2 * ((i+1)*moveOpts.rotateX/self.options.extraImgs) / self.view.height * relmousepos.y - ((i+1)*moveOpts.rotateX/self.options.extraImgs) : 0,
            rotY = moveOpts.rotateY ? 2 * ((i+1)*moveOpts.rotateY/self.options.extraImgs) / self.view.width * relmousepos.x - ((i+1)*moveOpts.rotateY/self.options.extraImgs) : 0,
            rotZ = moveOpts.rotateZ ? 2 * ((i+1)*moveOpts.rotateZ/self.options.extraImgs) / self.view.width * relmousepos.x - ((i+1)*moveOpts.rotateZ/self.options.extraImgs) : 0,
            transX = moveOpts.translateX ? 2 * ((i+1)*moveOpts.translateX/self.options.extraImgs) / self.view.width * relmousepos.x - ((i+1)*moveOpts.translateX/self.options.extraImgs) : 0,
            transY = moveOpts.translateY ? 2 * ((i+1)*moveOpts.translateY/self.options.extraImgs) / self.view.height * relmousepos.y - ((i+1)*moveOpts.translateY/self.options.extraImgs) : 0,
            transZ = moveOpts.translateZ ? 2 * ((i+1)*moveOpts.translateZ/self.options.extraImgs) / self.view.height * relmousepos.y - ((i+1)*moveOpts.translateZ/self.options.extraImgs) : 0;

          el.style.WebkitTransform = 'perspective(' + moveOpts.perspective + 'px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(1,0,0,' + rotX + 'deg) rotate3d(0,1,0,' + rotY + 'deg) rotate3d(0,0,1,' + rotZ + 'deg)';
          el.style.transform = 'perspective(' + moveOpts.perspective + 'px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(1,0,0,' + rotX + 'deg) rotate3d(0,1,0,' + rotY + 'deg) rotate3d(0,0,1,' + rotZ + 'deg)';
        }
      });
    });

    // reset all when mouse leaves the main wrapper.
    this.tiltWrapper.addEventListener('mouseleave', function(ev) {
      setTimeout(function() {
      for(var i = 0, len = self.imgElems.length; i < len; ++i) {
        var el = self.imgElems[i];
        el.style.WebkitTransform = 'perspective(' + moveOpts.perspective + 'px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
        el.style.transform = 'perspective(' + moveOpts.perspective + 'px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
      }
      }, 60);

    });

    // window resize
    window.addEventListener('resize', throttle(function(ev) {
      // recalculate tiltWrapper properties: width/height/left/top
      self.view = { width : self.tiltWrapper.offsetWidth, height : self.tiltWrapper.offsetHeight };
    }, 50));
  };

  function init() {
    // search for imgs with the class "tilt-effect"
    [].slice.call(document.querySelectorAll('img.tilt-effect')).forEach(function(img) {
      new TiltFx(img, JSON.parse(img.getAttribute('data-tilt-options')));
    });
  }

  init();

  window.TiltFx = TiltFx;

})(window);
