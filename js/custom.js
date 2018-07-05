jQuery(document).ready(function($){

/*==========================*/	
/*Preloader */	
/*==========================*/
$('.preloader').delay(350).fadeOut('slow');
/*==========================*/	
/*  Menu */	
/*==========================*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

	 $(".navbar-nav li a").click(function (event) {
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  
/*==========================*/	
/* Testimonial Slider */	
/*==========================*/
$('.project-slider').slick({
  dots: true,
  infinite: true,
  arrows:true,
  adaptiveHeight: true,
  speed: 200,
  autoplay:true
 
 
});
 
  
/*==========================*/	
/* Animated Bar  */	
/*==========================*/	
$('.bar-fill').waypoint({
	handler: function() {
      $(this).not('.animated').each(function() {
	  $(this).animate({
		  width: $(this).attr('data-percent')
      }, 500);
	 $(this).addClass('animated');
            });
        },
        offset: '95%'
});
	


/*==========================*/	
/* Animated Number  */	
/*==========================*/	 
  
  $('.timer').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });
 
      // start all the timers
      $('.timer').each(count);
 
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
	  
	  
	  $('.skill-container .timer').waypoint(function() {
    $('.skill-container .timer').not('.animated').each(count);
	$('.skill-container .timer').addClass('animated');
},{offset: '95%'});



	  $('.stat-container .timer').waypoint(function() {
    $('.stat-container .timer').not('.animated').each(count);
	$('.stat-container .timer').addClass('animated');
},{offset: '95%'});
 
 
 
 /*==========================*/	
/* Fix on Scroll */	
/*==========================*/
$('.fix').theiaStickySidebar({
      // Settings
      additionalMarginTop: 90
    });
 
 /*==========================*/	
/* Go to Top  */	
/*==========================*/
if ($('.go-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700, 'easeInOutExpo');
    });
}



/*==========================*/	
/* Header fix */	
/*==========================*/
var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
	
});	

	
 

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});


 
