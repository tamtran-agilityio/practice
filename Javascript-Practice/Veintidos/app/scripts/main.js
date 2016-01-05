/*global $ jQuery */
$(function () {
  'use strict';

  // load data json
  renderItem('../templates/modules/services.html', '#services');
  renderItem('../templates/modules/footer.html', '#footerSocial');
  renderItem('../templates/modules/slider.html', '#cases');
  renderItem('../templates/modules/web.html', '#webItem');
  renderItem('../templates/modules/landing.html', '#lanDing');
  renderItem('../templates/modules/pages.html', '#pages');
  renderItem('../templates/modules/gallery.html', '#gallery');
  renderItem('../templates/modules/rotating.html', '#rotating');
  // renderItem('../templates/modules/preview.html', '#preview');
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
    setTimeout( function() {
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

    }, 1600);
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
    setTimeout(function () {
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
    }, 1600);
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
    $('#rotating li:eq(0)').addClass('active');
  },1000);
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
  setTimeout(function() {
    hoverItem();
  }, 2000);
  function hoverItem() {
    var $itemMugaku = $('#webItem a:eq(0)').find('li');
    var $itemCrea = $('#webItem a:eq(2)').find('li');
    var $itemHenry = $('#webItem a:eq(1)').find('li');
    var $itemRoom = $('#webItem a:eq(3)').find('li');
    $(window).width() >= 1024 && $(window).scroll(function() {
      $itemMugaku.hover(function() {
        $itemMugaku.css({
            width: '60.1%',
            height: '60.1%',
            'z-index': 1,
            'background-image': 'url(./images/work/work-thumb-mugako-b.jpg)'
        }),
        $itemMugaku.find('.web__name').addClass('show');
        $itemMugaku.find('.web__name h2').addClass('show');
        $itemMugaku.find('.web__name').removeClass('showhide');
        $itemMugaku.find('.web__name h2').removeClass('showhide');
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
              'background-image': 'url(./images/work/work-thumb-mugako-a.jpg)'
          });
          $itemMugaku.find('.web__name').addClass('showhide');
          $itemMugaku.find('.web__name h2').addClass('showhide');
          $itemMugaku.find('.web__name').removeClass('show');
          $itemMugaku.find('.web__name h2').removeClass('show');
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
              'background-image': 'url(../images/work/work-thumb-henry-b.jpg)'
          }),
          $itemCrea.css({
              height: '40.1%',
              width: '40.1%'
          }),
          $itemRoom.css({
              height: '40.1%',
              width: '60.1%'
          })
          $itemHenry.find('.web__name').addClass('show');
          $itemHenry.find('.web__name h2').addClass('show');
          $itemHenry.find('.web__name').removeClass('showhide');
          $itemHenry.find('.web__name h2').removeClass('showhide');
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
              'background-image': 'url(../images/work/work-thumb-henry-a.jpg)'
          }),
          $itemCrea.css({
              width: '50%',
              height: '50%'
          }),
          $itemRoom.css({
              width: '50%',
              height: '50%'
          });
          $itemHenry.find('.web__name').addClass('showhide');
          $itemHenry.find('.web__name h2').addClass('showhide');
          $itemHenry.find('.web__name').removeClass('show');
          $itemHenry.find('.web__name h2').removeClass('show');
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
              'background-image': 'url(./images/work/work-thumb-portfolio-b.jpg)'
          }),
          $itemRoom.css({
              width: '40.1%',
              height: '60.1%',
              'background-size': '150%'
          });
          $itemCrea.find('.web__name').addClass('show');
          $itemCrea.find('.web__name h2').addClass('show');
          $itemCrea.find('.web__name').removeClass('showhide');
          $itemCrea.find('.web__name h2').removeClass('showhide');
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
              'background-image': 'url(./images/work/work-thumb-portfolio-a.jpg)'
          }),
          $itemRoom.css({
              width: '50%',
              height: '50%',
              'background-size': '100%'
          });
          $itemCrea.find('.web__name').addClass('showhide');
          $itemCrea.find('.web__name h2').addClass('showhide');
          $itemCrea.find('.web__name').removeClass('show');
          $itemCrea.find('.web__name h2').removeClass('show');
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
              'background-image': 'url(./images/work/work-thumb-apersonal-b.jpg)'
          }),
          $itemCrea.css({
              width: '40.1%',
              height: '60.1%',
              'background-size': '150%'
          });
          $itemRoom.find('.web__name').addClass('show');
          $itemRoom.find('.web__name h2').addClass('show');
          $itemRoom.find('.web__name').removeClass('showhide');
          $itemRoom.find('.web__name h2').removeClass('showhide');
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
              'background-image': 'url(./images/work/work-thumb-apersonal-a.jpg)'
          }),
          $itemCrea.css({
              width: '50%',
              height: '50%',
              'background-size': '100%'
          });
          $itemRoom.find('.web__name').addClass('showhide');
          $itemRoom.find('.web__name h2').addClass('showhide');
          $itemRoom.find('.web__name').removeClass('show');
          $itemRoom.find('.web__name h2').removeClass('show');
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
  setTimeout(function() {
    $('#lanDing li:eq(0)').hover(function() {
      $('#lanDing li:eq(0)').find('.landing__image').css({
        opacity: 0
      });
    },
    function() {
      $('#lanDing li:eq(0)').find('.landing__image').css({
        opacity: 1
      })
    });
    $('#lanDing li:eq(1)').hover(function() {
      $('#lanDing li:eq(1)').find('.landing__image').css({
        opacity: 0
      });
      },
    function() {
      $('#lanDing li:eq(1)').find('.landing__image').css({
        opacity: 1
      })
    });
    $('#lanDing li:eq(2)').hover(function() {
      $('#lanDing li:eq(2)').find('.landing__image').css({
        opacity: 0
      });
      },
    function() {
      $('#lanDing li:eq(2)').find('.landing__image').css({
        opacity: 1
      })
    });
    $('#lanDing li:eq(3)').hover(function() {
      $('#lanDing li:eq(3)').find('.landing__image').css({
        opacity: 0
      });
      },
    function() {
      $('#lanDing li:eq(3)').find('.landing__image').css({
        opacity: 1
      })
    });
    $('#lanDing li:eq(4)').hover(function() {
     $('#lanDing li:eq(4)').find('.landing__image').css({
        opacity: 0
      });
      },
    function() {
     $('#lanDing li:eq(4)').find('.landing__image').css({
        opacity: 1
      })
    });
    $('#lanDing li:eq(5)').hover(function() {
      $('#lanDing li:eq(5)').find('.landing__image').css({
        opacity: 0
      });
      },
    function() {
      $('#lanDing li:eq(5)').find('.landing__image').css({
        opacity: 1
      })
    });
  }, 1600);

  // hover images pages
  setTimeout(function () {
    $('#pages li:eq(0)').hover(function() {
      $('#pages li:eq(0)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(0)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(1)').hover(function() {
      $('#pages li:eq(1)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(1)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(2)').hover(function() {
      $('#pages li:eq(2)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(2)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(3)').hover(function() {
      $('#pages li:eq(3)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(3)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(4)').hover(function() {
      $('#pages li:eq(4)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(4)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(5)').hover(function() {
      $('#pages li:eq(5)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(5)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(6)').hover(function() {
      $('#pages li:eq(6)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(6)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(7)').hover(function() {
      $('#pages li:eq(7)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(7)').find('.pages__image').css({
        opacity: 1
      })
    });
    $('#pages li:eq(8)').hover(function() {
      $('#pages li:eq(8)').find('.pages__image').css({
        opacity: 0
      });
      },
    function() {
      $('#pages li:eq(8)').find('.pages__image').css({
        opacity: 1
      })
    });
  }, 1600);

  // excute show image when click
  setTimeout(function() {
    var elements = document.querySelectorAll( '.landing__image' );
    Intense( elements );
    var elementsPages = document.querySelectorAll( '.pages__image' );
    Intense( elementsPages );
  }, 1600);
}(jQuery));
