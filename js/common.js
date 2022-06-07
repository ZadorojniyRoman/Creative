$(function() {

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu__top').slideDown(300);
		}else{
			$('.mnu__top').slideUp(300);
		}
		new WOW().init();
	});
});
$(document).on('click', '.header__top .lang', function () {
   $(this).find('.lang-list').slideToggle();
  });

// Header Slick

(function ($) {
			$(document).ready(function () {
				$('.header__slider').slick({
					dots: false,
					arrows: true,
					infinite: true,
					speed: 900,
					autoplay: true,
					wirableWidth: true,
	 				autoplaySpeed: 5000,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<div class="btn_slick btn_prev"></div>',
	  			nextArrow: '<div class="btn_slick btn_next"></div>',
	  			responsive: [
				    {
				      breakpoint: 1025,
				      settings: {
				        arrows: false
				      }
				    }
				  ]
				});


				// Productions Slider
				$('.product__slider').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: true,
				  fade: true,
				  wirableWidth: true,
				  prevArrow: '<div class="btn_slick2 btn_prev2"></div>',
	  			nextArrow: '<div class="btn_slick2 btn_next2"></div>',
				  asNavFor: '.product__subslider',
				  responsive: [
				    {
				      breakpoint: 1025,
				      settings: {
				        arrows: false,
				      }
				    }
				  ]
				});
				$('.product__subslider').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  asNavFor: '.product__slider',
				  dots: false,
				  wirableWidth: true,
				  arrows: false,
				  centerMode: true,
				  focusOnSelect: true
				});

			$('.slider__items').slick({
					dots: false,
					arrows: true,
					prevArrow: '<div class="btn_slick btn_slick3 btn_prev4 btn_prev4"></div>',
	  			nextArrow: '<div class="btn_slick btn_slick3 btn_next4 btn_next4"></div>',
					wirableWidth: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					responsive: [
				    {
				      breakpoint: 1025,
				      settings: {
				        arrows: false,
				      }
				    }
				  ]
				});

			// Секция Отзыв
			$('.review-second__slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					wirableWidth: true,
					asNavFor: '.review-all__slider'
				});
				$('.review-all__slider').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.review-second__slider',
					dots: false,
					wirableWidth: true,
					arrows: true,
					prevArrow: '<div class="btn_slick btn_slick3 btn_prev btn_prev3"></div>',
	  			nextArrow: '<div class="btn_slick btn_slick3 btn_next btn_next3"></div>',
					centerMode: true,
					focusOnSelect: true,
					responsive: [
						{
				      breakpoint: 1284,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				      }
				    },
				    {
				      breakpoint: 1025,
				      settings: {
				        arrows: false,
				        slidesToShow: 1,
				        slidesToScroll: 1,
				      }
				    }
				  ]
				});

				// Секция Page Slider
			$('.page__slider').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  fade: true,
				  arrows: false,
				  wirableWidth: true,
				  asNavFor: '.page__subslider',
				});
				$('.page__subslider').slick({
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  asNavFor: '.page__slider',
				  dots: false,
				  wirableWidth: true,
				  arrows: true,
				  prevArrow: '<div class="btn_slick btn_slick5 btn_prev btn_prev5"></div>',
	  			nextArrow: '<div class="btn_slick btn_slick5 btn_next btn_next5"></div>',
				  centerMode: true,
				  focusOnSelect: true,
				  responsive: [
				    {
				      breakpoint: 1284,
				      settings: {
				      	arrows: false,
				        slidesToShow: 2,
				        slidesToScroll: 1,
				      }
				    },
				    {
				      breakpoint: 1024,
				      settings: {
				      	arrows: false,
				        slidesToShow: 2,
				        slidesToScroll: 1,
				      }
				    },
				    {
				      breakpoint: 768,
				      settings: {
				      	arrows: false,
				        slidesToShow: 1,
				        slidesToScroll: 1,
				      }
				    },
				    {
				      breakpoint: 425,
				      settings: {
				      	arrows: false,
				        slidesToShow: 1,
				        slidesToScroll: 1,
				      }
				    }
				  ]
				});
			});
				$('.header__slider').on('afterChange', function (event, slick, nextSlide) {
					$('.slider-count').find($('.slider-count__current').text(PrependZeros(nextSlide + 1, 2)));
				});
				$('.header__slider').on('init, afterChange', function (event, slick) {
					$('.slider-count').find($('.slider-count__all').text(PrependZeros(slick.slideCount, 2)));
				});

				$('.product__slider').on('afterChange', function (event, slick, nextSlide) {
					$('.product_slider-count').find($('.slider-count__current2').text(PrependZeros(nextSlide + 1, 2)));
				});
				$('.product__slider').on('init, afterChange', function (event, slick) {
					$('.product_slider-count').find($('.slider-count__all2').text(PrependZeros(slick.slideCount, 2)));
				});

				$('.slider__items').on('afterChange', function (event, slick, nextSlide) {
					$('.slider_slider-count').find($('.slider-count__current4').text(PrependZeros(nextSlide + 1, 2)));
				});
				$('.slider__items').on('init, afterChange', function (event, slick) {
					$('.slider_slider-count').find($('.slider-count__all4').text(PrependZeros(slick.slideCount, 2)));
				});

				$('.review-second__slider').on('afterChange', function (event, slick, nextSlide) {
					$('.review_slider-count').find($('.slider-count__current3').text(PrependZeros(nextSlide + 1, 2)));
				});
				$('.review-second__slider').on('init, afterChange', function (event, slick) {
					$('.review_slider-count').find($('.slider-count__all3').text(PrependZeros(slick.slideCount, 2)));
				});

			// Отображения номеров слайдов с ноликами для главного слайдера 
			var PrependZeros = function (str, len, seperator) {
				if (typeof str === 'number' || Number(str)) {
					str = str.toString();
					return ((len - str.length) > 0) ? new Array(len + 1 - str.length).join('0') + str : str;
				} else {
					var spl = str.split(seperator || ' ');
					for (var i = 0; i < spl.length; i++) {
						if (Number(spl[i]) && spl[i].length < len) {
							spl[i] = PrependZeros(spl[i], len);
						}
					}
					return spl.join(seperator || ' ');
				}
			};
			$('.header__slider').on('init', function (event, slick) {
				$('.slider-count').find($('.slider-count__all').text(PrependZeros(slick.slideCount, 2)));
			});

			$('.product__slider').on('init', function (event, slick) {
				$('.product_slider-count').find($('.slider-count__all2').text(PrependZeros(slick.slideCount, 2)));
			});

			$('.slider__items').on('init', function (event, slick) {
				$('.slider_slider-count').find($('.slider-count__all4').text(PrependZeros(slick.slideCount, 2)));
			});

			$('.review-second__slider').on('init', function (event, slick) {
				$('.review_slider-count').find($('.slider-count__all3').text(PrependZeros(slick.slideCount, 2)));
			});

			// Filter

					$('.portfolio__filter li').each(function () {
						if($(this).find('.portfolio__filter-link').data('img') == 'shop') {
							$(this).find('.portfolio__filter-link').addClass('active');
						}
					});

					$('.filter .portfolio__items .portfolio__items-item').each(function () {
						if($(this).data('img') == 'shop') {
							$(this).addClass('active');
						}
					});
				
					$('.portfolio__filter .portfolio__filter-link').on('click', function (e) {
						e.preventDefault();
						var img = $(this).data('img');


						$('.portfolio__filter .portfolio__filter-link').removeClass('active');
						$(this).addClass('active');
						$('.filter .portfolio__items .portfolio__items-item').each(function () {
							if($(this).data('img') == img) {
								$(this).addClass('active');
							} else {
								$(this).removeClass('active');
							}
						});

					});
						$('.more .portfolio__more').on('click', function (e) {
						e.preventDefault();

						$('.filter .portfolio__items .portfolio__items-item').addClass('active');
						});


					//Service

					$('.service__items .service__items-item').each(function () {
						if($(this).find('.service__items-item').data('img') == 'img') {
							$(this).find('.service__items-item').addClass('active');
						}
					});

					$('.service__items .service__items-item--box').each(function () {
						if($(this).data('img') == 'img') {
							$(this).addClass('active-box');
						}
					});

					$('.service__items .service__items-item').on('click', function (e) {
						e.preventDefault();
						var img = $(this).data('img');

						$('.service__items .service__items-item').removeClass('active');
						$(this).addClass('active');
						$('.service__items .service__items-item--box').each(function () {
							if($(this).data('img') == img) {
								$(this).addClass('active-box');
							} else {
								$(this).removeClass('active-box');
							}
						});
					});

		})(jQuery);


// Scroll
$(function(){

$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
  e.preventDefault();
	});
});
// Google Maps //
function initMap() {
  const myLatLng = {
    lat: 50.46346813879092,
    lng: 30.45257869081256
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: false
  });
}
$(document).ready(function(){ 
	$('#review__content').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
	  itemSelector: '.review__content-box',
// указываем класс элемента являющегося блоком в нашей сетке
          singleMode: false,
// true - если у вас все блоки одинаковой ширины
	  isResizable: true,
// перестраивает блоки при изменении размеров окна
	  isAnimated: true,
// анимируем перестроение блоков
          animationOptions: { 
	      queue: false, 
	      duration: 500 
	  }
// опции анимации - очередь и продолжительность анимации
	}); 
  });