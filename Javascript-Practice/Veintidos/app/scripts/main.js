/*global $ jQuery */
(function($, window, document) {
  // 'use strict';

  var element = document.querySelector('img');
  var heightWindow = $(window).height();
  var widthWindow = $(window).width();
  var $containCases = $('.wrapp-cases');
  // call function amination use plugin animation
  $('.animsition').animsition();

  // function of set height instashow-gallery-item
  galleryHeight();

  // set link active in pages
  setLink();

  // show item menu
  showIconMenu();

  // excute function slider
  coverSlider();


  // set size block when resize
  $(window).bind('resize', function() {
    $('.resize').css({
      width: widthWindow,
      height: heightWindow
    });
    galleryHeight();
    $(document).ready(function() {
      if (widthWindow >= 1024) {
        $( window ).scroll(function() {
          menuScroll();
        });
      }
    });
  });

  widthWindow <= 480 && $(document).ready(function() {
    $containCases.addClass('resize');
  });
  widthWindow <= 1024 && $(document).ready(function() {
    $containCases.addClass('resize');
  });

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
    if (widthWindow >= 1024) {
      $( window ).scroll(function() {
        menuScroll();
      });
    }
  })

  $(window).load(function() {

    // Use plugin lazyload load image
    $('img').lazyload({
      effect: 'fadeIn'
    });
    // set loader page
    loaderPage();

    // set load pages
    setTimeout(function() {
      $('body').addClass('pace-done');
      $('main').addClass('animation');
    }, 1600);
    $('main').animate({
      opacity: 1
    }, 1500);

    // set width and height class
    $('.resize').css({
      width: widthWindow,
      height: heightWindow
    });

    // load data json
    renderItem('../templates/modules/services.html', '#services');
    renderItem('../templates/modules/footer.html', '#footerSocial');
    renderItem('../templates/modules/slider.html', '#cases');
    renderItem('../templates/modules/web.html', '#webItem');
    renderItem('../templates/modules/landing.html', '#lanDing');
    renderItem('../templates/modules/pages.html', '#pages');
    renderItem('../templates/modules/gallery.html', '#gallery');
  });

  // set parallax scroll page agency
  parallaxScroll('.parallax');

  // set time out active after load data
  setTimeout(function() {

    // function of hover
    hoverItem();

    // excute function slider page index use plugin pogoSlider
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

    // set pop up images page works
    var elements = document.querySelectorAll( '.landing__image' );
    Intense( elements );
    var elementsPages = document.querySelectorAll( '.pages__image' );
    Intense( elementsPages );

  }, 1600);

  $(function() {
    'use strict';

    // Listen for the jQuery ready event on the document
    var defaults = {
      animation: "dissolve",
      separator: ",",
      speed: 6000
    };

    $.fx.step.textShadowBlur = function(fx) {
      $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
    };

    $.fn.textrotator = function(options){
      var settings = $.extend({}, defaults, options);

      return this.each(function(){
        var el = $(this)
        var array = [];
        $.each(el.text().split(settings.separator), function(key, value) {
          array.push(value);
        });
        el.text(array[0]);

        // animation option
        var rotate = function() {
          switch (settings.animation) {
            case 'dissolve':
              el.animate({
                textShadowBlur:20,
                opacity: 0
              }, 500 , function() {
                index = $.inArray(el.text(), array)
                if((index + 1) == array.length) index = -1
                el.text(array[index + 1]).animate({
                  textShadowBlur:0,
                  opacity: 1
                }, 500 );
              });
            break;

            case 'flip':
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }

              var initial = el.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
                "-webkit-transform": " translateX(0px) translateY(-250px)",
                "-moz-transform": " translateX(0px) translateY(-250px)",
                "-o-transform": " translateX(0px) translateY(-250px)",
                "transform": " translateX(0px) translateY(-250px)",
                "display":"block"
              })

            break;

            case 'flipUp':
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }

              var initial = el.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
                "-webkit-transform": " rotateX(-180deg)",
                "-moz-transform": " rotateX(-180deg)",
                "-o-transform": " rotateX(-180deg)",
                "transform": " rotateX(-180deg)"
              })

            break;

            case 'flipCube':
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }

              var initial = el.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
                "-webkit-transform": " rotateY(180deg)",
                "-moz-transform": " rotateY(180deg)",
                "-o-transform": " rotateY(180deg)",
                "transform": " rotateY(180deg)"
              })

            break;

            case 'flipCubeUp':
              if(el.find(".back").length > 0) {
                el.html(el.find(".back").html())
              }

              var initial = el.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              el.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(el);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
              el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
                "-webkit-transform": " rotateX(180deg)",
                "-moz-transform": " rotateX(180deg)",
                "-o-transform": " rotateX(180deg)",
                "transform": " rotateX(180deg)"
              })

            break;

            case 'spin':
              if(el.find(".rotating").length > 0) {
                el.html(el.find(".rotating").html())
              }
              index = $.inArray(el.text(), array)
              if((index + 1) == array.length) index = -1

              el.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(array[index + 1]).show().css({
                "-webkit-transform": " rotate(0) scale(1)",
                "-moz-transform": "rotate(0) scale(1)",
                "-o-transform": "rotate(0) scale(1)",
                "transform": "rotate(0) scale(1)"
              })
            break;

            case 'fade':
              el.fadeOut(settings.speed, function() {
                index = $.inArray(el.text(), array)
                if((index + 1) == array.length) index = -1
                el.text(array[index + 1]).fadeIn(settings.speed);
              });
            break;
          }
        };
        setInterval(rotate, settings.speed);
      });
    }

    // checking show item
    $.fn.viewportChecker = function(useroptions) {
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

      this.checkElements = function() {
        // Set some vars to check with
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html'),
        viewportTop = $(scrollElem).scrollTop(),
        viewportBottom = (viewportTop + windowHeight);

        $elem.each(function() {
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

    // add border of item
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
    });
  });

// function of set height instashow-gallery-item
  function galleryHeight() {
    var $galleryItem = $('.instashow-gallery-item');
    var itemHeight = $galleryItem.width();
    $galleryItem.css('height', itemHeight);
  }

  // check title page active
  function setPageActive(element, node) {
    if ($('body').hasClass(element)) {
      $(node).addClass('select');
    } else {
      $(node).removeClass('select');
    }
  }

  function setLink() {
    var _urlpath = $(location).attr('pathname').split('/').pop();

    $('#menu > li').each(function(){
        var _this = $(this);
      var _str = _this.find('a').attr('href');
      _str !== _urlpath ? _this.find('a').removeClass('select') : _this.find('a').addClass('select');
    });
  }

  // set parallax scroll
  function parallaxScroll(argument) {
    var _scrollTop = $(window).scrollTop();
    $(this).css('top', 0 - 0.15 * _scrollTop + 'px');
  }

  // function of loader
  function loaderPage() {
    var $loaderItem = $('.loader');
    $loaderItem.animate({
      opacity: 1
    }, 100);
    $loaderItem.css({
      opacity: 1,
      bottom: 250
    });
    $loaderItem.find('img').css({
      transform: 'rotate(500deg)'
    });
  }

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

  // function of set height instashow-gallery-item
  function galleryHeight() {
    var $galleryItem = $('.instashow-gallery-item');
    var itemHeight = $galleryItem.width();
    $galleryItem.css('height', itemHeight);
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

  // show icon menu
  function showIconMenu() {
    var $headerItem = $('header');
    if ($('body').hasClass('index')) {
      $headerItem.find('.icon-menu').css('display', 'none');
      $headerItem.find('.lenguaje').css('display', 'block');
    }
  }
  // function hover on item image
  function hoverItem() {
    var $blockWeb = $('.web__name');
    var $itemMugaku = $('#webItem a:eq(0)').find('li');
    var $itemCrea = $('#webItem a:eq(2)').find('li');
    var $itemHenry = $('#webItem a:eq(1)').find('li');
    var $itemRoom = $('#webItem a:eq(3)').find('li');
    if ($(window).width() >= 1024) {
      $itemMugaku.mouseenter(function() {
        $(this).css({
          width: '60.1%',
          height: '60.1%',
          'z-index': 1,
          'background-image': 'url(./images/work/work-thumb-mugako-b.jpg)'
        }),
        $(this).find('.web__name').addClass('show');
        $(this).find('.web__name h2').addClass('show');
        $(this).find('.web__name').removeClass('showhide');
        $(this).find('.web__name h2').removeClass('showhide');
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
      });
      $itemMugaku.mouseleave(function() {
        $(this).css({
          width: '50%',
          height: '50%',
          'z-index': 0,
          'background-image': 'url(./images/work/work-thumb-mugako-a.jpg)'
        });
        $(this).find('.web__name').addClass('showhide');
        $(this).find('.web__name h2').addClass('showhide');
        $(this).find('.web__name').removeClass('show');
        $(this).find('.web__name h2').removeClass('show');
        $itemCrea.css({
          width: '50%',
          height: '50%',
          'background-size': '100%'
        }),
        $itemHenry.css({
          width: '50%',
          height: '50%'
        }),
        $itemRoom.css({
          width: '50%',
          height: '50%'
        })
      });

      $itemHenry.mouseenter(function() {
        $(this).css({
          width: '60.1%',
          'z-index': 1,
          height: '60.1%',
          'background-image': 'url(../images/work/work-thumb-henry-b.jpg)'
        });
        $(this).find('.web__name').addClass('show');
        $(this).find('.web__name h2').addClass('show');
        $(this).find('.web__name').removeClass('showhide');
        $(this).find('.web__name h2').removeClass('showhide');
        $itemMugaku.css({
          width: '40.1%',
          height: '60.1%',
          'background-size': '150%',
          'z-index': 1
        }),
        $itemCrea.css({
          height: '40.1%',
          width: '40.1%'
        }),
        $itemRoom.css({
          height: '40.1%',
          width: '60.1%'
        })
      });
      $itemHenry.mouseleave(function() {
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
      $itemCrea.mouseenter(function() {
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
      })
      $itemCrea.mouseleave(function() {
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
      $itemRoom.mouseenter(function() {
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
      });
      $itemRoom.mouseleave(function() {
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
    }
  }
  // handle icon menu
  var $iconMenu = $('.menu-icon');
  $iconMenu.click(function() {
    $('header').css({
      top: '0px'
    });
    $iconMenu.css({
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
    $iconMenu.css({
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
}(window.jQuery, window, document));

$(function () {

  //excute function
  $(document).ready(function(){
    $('#heading .rotate').textrotator({
      animation: 'flip',
      speed: 3000
    });
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
    });
    // set show item when scroll
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
    });
  });

}(jQuery));
