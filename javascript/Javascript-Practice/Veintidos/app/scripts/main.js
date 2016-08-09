/*global $ jQuery */

!(function($, window, document) {
  'use strict';

  // function load data to json file
  $.fn.Temp = function() {
    'use strict';
    // function get data to data.json
    var getData = function(source, element) {

      $.get('../data/data.json', function(data) {

        // compile the template
        var template = Handlebars.compile(source);

        // pass our data to the template
        var html = template(data);
        element.prepend(html);
      });
    };

    // render article services with handlebarjs
    var renderItem = function(pathPage, idLoad ) {

      // DOM HTML prepend id services at home page
      $.get( pathPage, function(data) {

        var $renderElement = $(idLoad);
        getData(data, $renderElement);
      });
    };
    var init = function() {
      // load data json
      renderItem('../templates/modules/services.html', '#services');
      renderItem('../templates/modules/footer.html', '#footerSocial');
      renderItem('../templates/modules/slider.html', '#cases');
      renderItem('../templates/modules/web.html', '#webItem');
      renderItem('../templates/modules/landing.html', '#lanDing');
      renderItem('../templates/modules/pages.html', '#pages');
      renderItem('../templates/modules/gallery.html', '#gallery');
    }
    return {
      init : init
    }
  }

  // function load all file
  $.fn.Load = function() {
    'use strict';
    var element = document.querySelector('img');
    var heightWindow = $(window).height();
    var widthWindow = $(window).width();
    var $containCases = $('.wrapp-cases');
    // set size block when resize
    $(window).bind('resize', function() {
      $('.resize').css({
        width: widthWindow,
        height: heightWindow
      });

      // function of set height instashow-gallery-item
      galleryHeight();
      $(document).ready(function() {
        if (widthWindow >= 1024) {
          $( window ).scroll(function() {
            menuScroll();
          });
        }
      });
    });

    // function of show menu when scroll
    var menuScroll = function() {
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

      // set time out load page
      setTimeout(loadDone, 1600);

      $('main').animate({
        opacity: 1
      }, 1500);

      // set width and height class
      $('.resize').css({
        width: widthWindow,
        height: heightWindow
      });
    });

    // set load pages
    var loadDone = function() {
      $('body').addClass('pace-done');
      $('main').addClass('animation');
    }

    // function of set height instashow-gallery-item
    var galleryHeight = function() {
      var $galleryItem = $('.instashow-gallery-item');
      var itemHeight = $galleryItem.width();
      $galleryItem.css('height', itemHeight);
    }

    // check title page active
    var setPageActive = function(element, node) {
      if ($('body').hasClass(element)) {
        $(node).addClass('select');
      } else {
        $(node).removeClass('select');
      }
    }

    var setLink = function() {
      var _urlpath = $(location).attr('pathname').split('/').pop();

      $('#menu li').each(function(){
          var _this = $(this);
        var _str = _this.find('a').attr('href');
        _str !== _urlpath ? _this.find('a').removeClass('select') : _this.find('a').addClass('select');
      });
    }

    // set parallax scroll
    var parallaxScroll = function(argument) {
      var _scrollTop = $(window).scrollTop();
      $(this).css('top', 0 - 0.15 * _scrollTop + 'px');
    }

    // function of loader
    var loaderPage = function() {
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



    // function of set height instashow-gallery-item
    var galleryHeight = function() {
      var $galleryItem = $('.instashow-gallery-item');
      var itemHeight = $galleryItem.width();
      $galleryItem.css('height', itemHeight);
    }

    // set slider page works
    var coverSlider = function() {
      $('.cover-slider').each(function() {
        var target = $(this).find('.cover-slider__slide');
        var sliderLast = target.length - 1;
        var s = 0;
        var sliderActive = function() {
            target.removeClass('actives inactives');
            target.eq(s).addClass('inactives');
            ((s === sliderLast) && (s = -1))
            target.eq( ++s ).addClass('actives');
            setTimeout(sliderActive, 5000);
          };
        sliderActive();
      });
    }

    // show icon menu
    var showIconMenu = function() {
      var $headerItem = $('header');
      if ($('body').hasClass('index')) {
        $headerItem.find('.icon-menu').css('display', 'none');
        $headerItem.find('.lenguaje').css('display', 'block');
      }
    }

    var showMenu = function() {
      // handle icon menu
      var $iconMenu = $('.menu-icon');
      $iconMenu.click(function() {
        $('header').css({
          top: '0px'
        });
        $(this).css({
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
          opacity: 1,
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
    }

    // function hover
    var hoverItem = function() {
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
    var init = function() {
      $('.animsition').animsition();
      widthWindow <= 480 && $(document).ready(function() {
        $containCases.addClass('resize');
      });
      widthWindow <= 1024 && $(document).ready(function() {
        $containCases.addClass('resize');
      });

      // set parallax scroll page agency
      parallaxScroll('.parallax');

      // load finish
      setTimeout( loadDone, 1600);

      // function of set height instashow-gallery-item
      galleryHeight();

      // set link active in pages
      setLink();

      // show item menu
      showIconMenu();

      // excute function slider
      coverSlider();

      // show menu
      showMenu();

      // function hover on item image
      setTimeout( hoverItem, 1600);
      // set time out active after load data
      setTimeout(function() {

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

        //set pop up images page works
        var elements = document.querySelectorAll( '.landing__image' );
        Intense( elements );
        var elementsPages = document.querySelectorAll( '.pages__image' );
        Intense( elementsPages );

      }, 1600);
    }
    return {
      init : init
    }
  }

  // function of set border
  $.fn.setBorder = function() {
    'use strict';

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

    // function execute add border
    var getBorder = function() {
      // add border
      var elems = [$('.pogoSlider-nav li'), $('li.latest__item')];
      $.each( elems, function( i, elem ) {
        elem.animatedBorder({
          size: 1,
          color: '#4a4a4c',
          hover: !0
        });
      })
      var elems = [$('.pogoSlider-dir-btn--prev'), $('.pogoSlider-dir-btn--next'), $('.wrapp__preguntas li')];
      $.each( elems, function( i, elem ) {
        elem.animatedBorder({
          size: 1,
          color: '#4a4a4c',
          hover: !1
        });
      })
    }
    var init = function() {
      // set border
      setTimeout(getBorder, 1600);
    }
    return {
      init : init
    }
  }

  // function of set view item
  $.fn.setViewPort = function() {
    'use strict';

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
    var viewShow = function() {
      var elems = [
        $('.services__item'),
        $('.landing li'),
        $('.branding div'),
        $('.pages__block').find('li'),
        $('.wrapp__preguntas').find('li'),
        $('.instashow-gallery-item')
        ];
      $.each( elems, function( i, elem ) {
        // offSetShow = elem.data('select');
        elem.addClass('hidden').viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          offset: 300
        });
      });
      $('.mascara-trama').viewportChecker({
        classToAdd: 'contraer',
        offset: 150
      });
      $('.about__largue li').viewportChecker({
        classToAdd: 'up',
        offset: 150
      });
      $('.about__largue').viewportChecker({
        classToAdd: 'largue',
        offset: 250
      });
      $('.services__item h3').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 150
      });
    }
    var init = function() {
      setTimeout(viewShow, 1600);
    }
    return {
      init : init
    }
  }

  // functon set animation text
  $.fn.textRotator = function() {
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
        var element = $(this)
        var array = [];
        $.each(element.text().split(settings.separator), function(key, value) {
          array.push(value);
        });
        element.text(array[0]);

        // animation option
        var rotate = function() {
          switch (settings.animation) {
            case 'dissolve':
              element.animate({
                textShadowBlur:20,
                opacity: 0
              }, 500 , function() {
                index = $.inArray(element.text(), array)
                if((index + 1) == array.length) index = -1
                element.text(array[index + 1]).animate({
                  textShadowBlur:0,
                  opacity: 1
                }, 500 );
              });
            break;

            case 'flip':
              if(element.find(".back").length > 0) {
                element.html(element.find(".back").html())
              }

              var initial = element.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              element.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(element);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(element);
              element.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
                "-webkit-transform": " translateX(0px) translateY(-250px)",
                "-moz-transform": " translateX(0px) translateY(-250px)",
                "-o-transform": " translateX(0px) translateY(-250px)",
                "transform": " translateX(0px) translateY(-250px)",
                "display":"block"
              })

            break;

            case 'flipUp':
              if(element.find(".back").length > 0) {
                element.html(element.find(".back").html())
              }

              var initial = element.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              element.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(element);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(element);
              element.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
                "-webkit-transform": " rotateX(-180deg)",
                "-moz-transform": " rotateX(-180deg)",
                "-o-transform": " rotateX(-180deg)",
                "transform": " rotateX(-180deg)"
              })

            break;

            case 'flipCube':
              if(element.find(".back").length > 0) {
                element.html(element.find(".back").html())
              }

              var initial = element.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              element.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(element);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(element);
              element.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
                "-webkit-transform": " rotateY(180deg)",
                "-moz-transform": " rotateY(180deg)",
                "-o-transform": " rotateY(180deg)",
                "transform": " rotateY(180deg)"
              })

            break;

            case 'flipCubeUp':
              if(element.find(".back").length > 0) {
                element.html(element.find(".back").html())
              }

              var initial = element.text()
              var index = $.inArray(initial, array)
              if((index + 1) == array.length) index = -1

              element.html("");
              $("<span class='front'>" + initial + "</span>").appendTo(element);
              $("<span class='back'>" + array[index + 1] + "</span>").appendTo(element);
              element.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
                "-webkit-transform": " rotateX(180deg)",
                "-moz-transform": " rotateX(180deg)",
                "-o-transform": " rotateX(180deg)",
                "transform": " rotateX(180deg)"
              })

            break;

            case 'spin':
              if(element.find(".rotating").length > 0) {
                element.html(element.find(".rotating").html())
              }
              index = $.inArray(element.text(), array)
              if((index + 1) == array.length) index = -1

              element.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(array[index + 1]).show().css({
                "-webkit-transform": " rotate(0) scale(1)",
                "-moz-transform": "rotate(0) scale(1)",
                "-o-transform": "rotate(0) scale(1)",
                "transform": "rotate(0) scale(1)"
              })
            break;

            case 'fade':
              element.fadeOut(settings.speed, function() {
                index = $.inArray(element.text(), array)
                if((index + 1) == array.length) index = -1
                element.text(array[index + 1]).fadeIn(settings.speed);
              });
            break;
          }
        };
        setInterval(rotate, settings.speed);
      });
    }

    var init = function() {
      $('#heading .rotate').textrotator({
        animation: 'flip',
        speed: 3000
      });
    }
    return {
      init : init
    }
  }

  // execute all function
  $.fn.Setting = function() {
    $.fn.Temp().init();
    $.fn.Load().init();
    $.fn.setBorder().init();
    $.fn.setViewPort().init();
    $.fn.textRotator().init();
  }
}(window.jQuery, window, document));

window.jQuery(document).ready(function() {
  $.fn.Setting();
});
