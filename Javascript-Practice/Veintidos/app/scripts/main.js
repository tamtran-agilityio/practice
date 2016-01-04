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

  // set size block when resize
  $(window).bind('resize', function() {
    var t = $(window).height();
    var o = $(window).width();
    $('.resize').css({
      width: o,
      height: t
    });
    galleryHeight();
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

  $(function() {
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

  // excute function slider page index
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

  galleryHeight();
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

  coverSlider();

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

  // set hover image when sreen larger
  $(window).width() >= 1024 && $(window).scroll(function() {
    $('li.web__list--mugaku').hover(function() {
      $('li.web__list--mugaku').css({
          width: '60.1%',
          height: '60.1%',
          'z-index': 1,
          'background-image': 'url(./images/work-thumb-mugako-b.jpg)'
      }),
      $('li.web__list--mugaku .web__name').addClass('show');
      $('li.web__list--mugaku .web__name h2').addClass('show');
      $('li.web__list--mugaku .web__name').removeClass('showhide');
      $('li.web__list--mugaku .web__name h2').removeClass('showhide');
      $('li.web__list--henry').css({
          width: '40.1%',
          height: '60.1%',
          'background-size': '150%'
      }),
      $('li.web__list--crea').css({
          height: '40.1%',
          width: '60.1%'
      }),
      $('li.web__list--room').css({
          height: '40.1%',
          width: '40.1%'
      })
    }, function() {
        $('li.web__list--mugaku').css({
            width: '50%',
            height: '50%',
            'z-index': 0,
            'background-image': 'url(./images/work-thumb-mugako-a.jpg)'
        });
        $('li.web__list--mugaku .web__name').addClass('showhide');
        $('li.web__list--mugaku .web__name h2').addClass('showhide');
        $('li.web__list--mugaku .web__name').removeClass('show');
        $('li.web__list--mugaku .web__name h2').removeClass('show');
        $('li.web__list--henry').css({
            width: '50%',
            height: '50%',
            'background-size': '100%'
        }),
        $('li.web__list--crea').css({
            width: '50%',
            height: '50%'
        }),
        $('li.web__list--room').css({
            width: '50%',
            height: '50%'
        })
      });

    $('li.web__list--henry').hover(function() {
        $('li.web__list--mugaku').css({
            width: '40.1%',
            height: '60.1%',
            'background-size': '150%',
            'z-index': 1
        }),
        $('li.web__list--henry').css({
            width: '60.1%',
            'z-index': 1,
            height: '60.1%',
            'background-image': 'url(../images/work-thumb-henry-b.jpg)'
        }),
        $('li.web__list--crea').css({
            height: '40.1%',
            width: '40.1%'
        }),
        $('li.web__list--room').css({
            height: '40.1%',
            width: '60.1%'
        })
        $('li.web__list--henry .web__name').addClass('show');
        $('li.web__list--henry .web__name h2').addClass('show');
        $('li.web__list--henry .web__name').removeClass('showhide');
        $('li.web__list--henry .web__name h2').removeClass('showhide');
    }, function() {
        $('li.web__list--mugaku').css({
            width: '50%',
            height: '50%',
            'background-size': '100%',
            'z-index': 0
        }),
        $('li.web__list--henry').css({
            width: '50%',
            'z-index': 0,
            height: '50%',
            'background-image': 'url(../images/work-thumb-henry-a.jpg)'
        }),
        $('li.web__list--crea').css({
            width: '50%',
            height: '50%'
        }),
        $('li.web__list--room').css({
            width: '50%',
            height: '50%'
        });
        $('li.web__list--henry .web__name').addClass('showhide');
        $('li.web__list--henry .web__name h2').addClass('showhide');
        $('li.web__list--henry .web__name').removeClass('show');
        $('li.web__list--henry .web__name h2').removeClass('show');
      });
    $('li.web__list--crea').hover(function() {
        $('li.web__list--mugaku').css({
            height: '40.1%',
            width: '60.1%'
        }),
        $('li.web__list--henry').css({
            height: '40.1%',
            width: '40.1%'
        }),
        $('li.web__list--crea').css({
            width: '60.1%',
            'z-index': 1,
            height: '61%',
            'background-image': 'url(./images/work-thumb-portfolio-b.jpg)'
        }),
        $('li.web__list--room').css({
            width: '40.1%',
            height: '60.1%',
            'background-size': '150%'
        });
        $('li.web__list--crea .web__name').addClass('show');
        $('li.web__list--crea .web__name h2').addClass('show');
        $('li.web__list--crea .web__name').removeClass('showhide');
        $('li.web__list--crea .web__name h2').removeClass('showhide');
    }, function() {
        $('li.web__list--mugaku').css({
            width: '50%',
            height: '50%'
        }),
        $('li.web__list--henry').css({
            width: '50%',
            height: '50%'
        }),
        $('li.web__list--crea').css({
            width: '50%',
            'z-index': 0,
            height: '50%',
            'background-image': 'url(./images/work-thumb-portfolio-a.jpg)'
        }),
        $('li.web__list--room').css({
            width: '50%',
            height: '50%',
            'background-size': '100%'
        });
        $('li.web__list--crea .web__name').addClass('showhide');
        $('li.web__list--crea .web__name h2').addClass('showhide');
        $('li.web__list--crea .web__name').removeClass('show');
        $('li.web__list--crea .web__name h2').removeClass('show');
    });
    $('li.web__list--room').hover(function() {
        $('li.web__list--mugaku').css({
            height: '40.1%',
            width: '40.1%'
        }),
        $('li.web__list--henry').css({
            height: '40.1%',
            width: '60.1%'
        }),
        $('li.web__list--room').css({
            width: '60.1%',
            height: '60.1%',
            'z-index': 1,
            'background-image': 'url(./images/work-thumb-apersonal-b.jpg)'
        }),
        $('li.web__list--crea').css({
            width: '40.1%',
            height: '60.1%',
            'background-size': '150%'
        });
        $('li.web__list--room .web__name').addClass('show');
        $('li.web__list--room .web__name h2').addClass('show');
        $('li.web__list--room .web__name').removeClass('showhide');
        $('li.web__list--room .web__name h2').removeClass('showhide');
    }, function() {
        $('li.web__list--mugaku').css({
            width: '50%',
            height: '50%'
        }),
        $('li.web__list--henry').css({
            width: '50%',
            height: '50%'
        }),
        $('li.web__list--room').css({
            width: '50%',
            height: '50%',
            'z-index': 0,
            'background-image': 'url(./images/work-thumb-apersonal-a.jpg)'
        }),
        $('li.web__list--crea').css({
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

  var elements = document.querySelectorAll( '.landing__image' );
  Intense( elements );
  var elementsPages = document.querySelectorAll( '.pages__image' );
  Intense( elementsPages );
}(jQuery));
