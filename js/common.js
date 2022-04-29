$(document).ready(function() {

	if ($(".slider-we-chosen").length > 0) {
		var swiper = new Swiper('.slider-we-chosen', {
			slidesPerView: 4,
			spaceBetween: 30,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			// autoplay: {
		 //        delay: 2500,
		 //        disableOnInteraction: false,
	  //     	},
	      	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
	      	},
		     pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		    },
		    breakpoints: {
		        1200: {
		          slidesPerView: 3,
		        },
		        768: {
		          slidesPerView: 2,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}


	$(".list-nav li.toggle-link > a").on('click', function(e) {
		if (window.matchMedia('(max-width: 1125px)').matches) {
			 e.preventDefault();
			if($(this).next("ul").is(":visible")){
	            $(this).next("ul").slideUp(200);
	            $(this).removeClass("active");

	        } else {
	            $
	            $(this).next("ul").slideDown(200);
	            $(this).parents().siblings().children(".list-nav li.toggle-link > a").removeClass("active");
	            $(this).addClass("active");
	       }
		}
    });


    $('.open-city').on('click', function(e) {
        e.preventDefault();
       $(this).toggleClass('active');
       $('ul.hidden-city-list').slideToggle(300);
    });


    $(".title-item-filter").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(200);
            $(this).removeClass("active");

        } else {
            $(this).next("div").slideDown(200);
            // $(this).parents().siblings().children(".title-item-filter").removeClass("active");
            $(this).addClass("active");
        }
    });


       // Боковое меню
       $('.menuToggle').on('click', function() {
       	$(this).toggleClass('active');
       	$('body').toggleClass('none-scroll');
       	$('.nav-block').toggleClass('active');
       	$('.overlay-page').toggleClass('active');
       });

       $('.overlay-page').on('click', function() {
       	$('body').removeClass('none-scroll');
       	$('.nav-block').removeClass('active');
       	$('.menuToggle').removeClass('active');
       	$(this).removeClass('active');
       });




        $('.btn--text-show-js').on('click',  function(event) {
		event.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).parents('.it-item-info-txt-card-block').find('.hidden-text-card-block').slideUp(200);
			$(this).removeClass('active');
			$(this).text('Читать больше');
		}
		else{
			$(this).parents('.it-item-info-txt-card-block').find('.hidden-text-card-block').slideDown(200);
			$(this).addClass('active');
			$(this).text('Скрыть');
		}

	});


        if ($(".gallery-top-card").length > 0) {
        	var galleryThumbs = new Swiper('.gallery-thumbs-card', {
        		direction: 'vertical',
        		spaceBetween: 0,
        		slidesPerView: 4,
        		loop: false,
        		watchSlidesVisibility: true,
        		watchSlidesProgress: true,
        	});
        	var galleryTop = new Swiper('.gallery-top-card', {
        		spaceBetween: 10,
        		loop:false,
        		loopedSlides: 6,
        		navigation: {
        			nextEl: '.swiper-button-next',
        			prevEl: '.swiper-button-prev',
        		},
        		thumbs: {
        			swiper: galleryThumbs,
        		},
        	});
        }


        // табы
        $('ul.list-card-product-tab a').click(function(e) {
        	e.preventDefault();
        	$('ul.list-card-product-tab .active').removeClass('active');
        	$(this).addClass('active');
        	var tab = $(this).attr('href');
        	$('.card-product-tabs-content').not(tab).css({'display':'none'});
        	$(tab).fadeIn(400);
        });



        $( "#selectmenu" ).selectmenu();


        $('.selectmenu-table').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 300;

		var option = $(this).find('option:first-child').text();


		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: option,
		}).insertAfter($this);

		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$('.select__gap').removeClass('on');
				$('.select__list').slideUp(dur);
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});
	});

	$(document).mouseup(function (e){
		var div = $(".select");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.select__gap').removeClass('on');
			$('.select__list').slideUp(300);
		}
	});


	 $('.select-sort').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 300;

		var option = $(this).find('option:first-child').text();


		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select-sort"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: option,
		}).insertAfter($this);

		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$('.select__gap').removeClass('on');
				$('.select__list').slideUp(dur);
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});
	});

	$(document).mouseup(function (e){
		var div = $(".select-sort");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.select__gap').removeClass('on');
			$('.select__list').slideUp(300);
		}
	});



	$('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });




    if ($(".slider-main-catalog").length > 0) {
		var swiper = new Swiper('.slider-main-catalog', {
			slidesPerView: 3,
			spaceBetween: 30,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			// autoplay: {
		 //        delay: 2500,
		 //        disableOnInteraction: false,
	  //     	},
	      	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
	      	},
		     pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		    },
		    breakpoints: {
		        1200: {
		          slidesPerView: 3,
		        },
		        768: {
		          slidesPerView: 2,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}



	if ($(".slider-post").length > 0) {
		var swiper = new Swiper('.slider-post', {
			slidesPerView: 1,
			spaceBetween: 30,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
	      	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
	      	},
		     pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		    },
		    breakpoints: {
		        1200: {
		          slidesPerView: 1,
		        },
		        768: {
		          slidesPerView: 1,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}




	if ($(".slider-business").length > 0) {
		var swiper = new Swiper('.slider-business', {
			slidesPerView: 1,
			spaceBetween: 0,
			initialSlide: 1,
			observer: false, // помощь инициализации
			observeParents: false,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
	      	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
	      	},
		     pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		    },
		    breakpoints: {
		        992: {
		          slidesPerView: 1,
		        },
		        768: {
		          slidesPerView: 1,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}



 //    <div class="swiper-container">
	//     <div class="swiper-wrapper">
	//         <div class="swiper-slide"></div>
	//     </div>
	//     <div class="swiper-pagination"></div>
	//     <div class="swiper-button-prev"></div>
	//     <div class="swiper-button-next"></div>
	// </div>



	// Помощь анимации
	// data-wow-delay="0.3s" // задержка анимации
	// data-wow-offset="10" // — расстояние в пикселях от нижнего края браузера до верхней границы элемента необходимое для начала анимации;
	new WOW().init();


	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши.
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch: false,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});

	// Маска для формы телефона https://github.com/RobinHerbots/Inputmask
    $("input[type='tel']").inputmask({
	  mask: '+7 (999) 999 99-99',
	  showMaskOnHover: false,
	  autoUnmask: true,
	});


	//Плавный скролл до блока .div по клику на .scroll
	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


	$(".item-vacancii-open").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(300);
            $(this).removeClass("active");

        } else {
            $(".item-vacancii-toggle").slideUp(300);
            $(this).next("div").slideDown(300);
            $(this).parents().siblings().children(".item-vacancii-open").removeClass("active");
            $(this).addClass("active");
        }
    });


	// яндекс карта
	if ($("#map").length > 0) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [58.765389, 23.627969],
				zoom: 5
			}, {
				searchControlProvider: 'yandex#search'
			}),
		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		        	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        	),

		        myPlacemark1 = new ymaps.Placemark([59.929443, 30.368473], {
		        	balloonContent: 'ул. Торжковская, дом 1, корп. 2,пом 215, Бизнес центр "Паритет',
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#imageWithContent',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/marker.png',
		            // Размеры метки.
		            iconImageSize: [87, 87],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-20, -55],
		            // Смещение слоя с содержимым относительно слоя с картинкой.
		            iconContentOffset: [15, 15],
		            // Макет содержимого.
		            iconContentLayout: MyIconContentLayout
		        });


		        myPlacemark2 = new ymaps.Placemark([55.754928, 37.662704], {
		        	balloonContent: 'Москва',
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#imageWithContent',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/marker.png',
		            // Размеры метки.
		            iconImageSize: [87, 87],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-20, -55],
		            // Смещение слоя с содержимым относительно слоя с картинкой.
		            iconContentOffset: [15, 15],
		            // Макет содержимого.
		            iconContentLayout: MyIconContentLayout
		        });

		        myMap.behaviors.disable('scrollZoom');

		        myMap.geoObjects
		        .add(myPlacemark1)
		        .add(myPlacemark2)

		        myMap.setZoom(5, {duration: 750});

		    });
	}


    //full page main
	if ($("#main-page").length > 0){
		$('#main-page').fullpage({
		    anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		    sectionSelector: '.section-js',
		    menu: '#menu-page',
		    responsiveWidth: 310,
		    easingcss3: 'ease-out',
		    scrollingSpeed: 1000,
		    afterLoad : function(index, nextIndex, direction){

		      if(nextIndex == 1 ) {
		      	$(".video-page").get(0).play();
		    	$(".video-page").get(1).play();
		    	$(".video-page").get(2).play();
	    			$('.section-page1').find('.for-whom-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.7s',
			          'animation-duration': '0.9s'
			        });

			        $('.header-main').addClass('animated fadeIn').css({
			          'animation-delay': '0.5s',
			          'animation-duration': '0.7s'
			        });

			 	}
			 	if(nextIndex == 2 ){
			 		$(".video-page").get(0).play();
			    	$(".video-page").get(1).play();
			    	$(".video-page").get(2).play();
			 	}
			 	if(nextIndex == 3 ){
			 		$(".video-page").get(0).play();
			    	$(".video-page").get(1).play();
			    	$(".video-page").get(2).play();
			 	}

		    },
		    onLeave: function(index, nextIndex, direction) {

			    if(nextIndex == 1 ) {
					$('.section-page1').find('.for-whom-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });

			    }
			    if(nextIndex == 2){
			      $('.section-page2').find('.for-whom-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			    if(nextIndex == 3){
			    	$('.section-page3').find('.for-whom-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			    if(nextIndex == 4){
			    	$('.section-page4').find('.main-card-product-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			    if(nextIndex == 5){
			    	$('.section-page5').find('.main-map-txt-glav').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });

			        $('.section-page5').find('.one-map-bg').addClass('animated fadeIn').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });

			        $('.section-page5').find('.two-map-town').addClass('animated fadeIn').css({
			          'animation-delay': '1.5s',
			          'animation-duration': '0.9s'
			        });

			        $('.section-page5').find('.thee-map-line').addClass('animated fadeIn').css({
			          'animation-delay': '3s',
			          'animation-duration': '0.9s'
			        });


			        $('.section-page5').find('.main-map-txt-dop').addClass('animated fadeInUp').css({
			          'animation-delay': '3s',
			          'animation-duration': '0.9s'
			        });



			    }


			    else{

			    }
		    },
	  	});
	}

	$(document).on('click', '.button-page-top-js', function(e){
		e.preventDefault();
  		$.fn.fullpage.moveSectionUp();
	});
	$(document).on('click', '.button-page-bottom-js', function(e){
		e.preventDefault();
	 	$.fn.fullpage.moveSectionDown();
	});


	if ($("#directions-page").length > 0){
		$('#directions-page').fullpage({
		    anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7'],
		    sectionSelector: '.section-js',
		    menu: '#menu-page',
		    responsiveWidth: 310,
		    easingcss3: 'ease-out',
		    scrollingSpeed: 1000,
		    afterLoad : function(index, nextIndex, direction){

		      if(nextIndex == 1 ) {
	    			$('.section-directions-page1').find('.advantages-directions-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.7s',
			          'animation-duration': '0.9s'
			        });

			        $('.header-main').addClass('animated fadeIn').css({
			          'animation-delay': '0.5s',
			          'animation-duration': '0.7s'
			        });
			 	}

		    },
		    onLeave: function(index, nextIndex, direction) {

			    if(nextIndex == 1 ) {
					$('.section-directions-page1').find('.advantages-directions-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.7s',
			          'animation-duration': '0.9s'
			        });

			    }
			    if(nextIndex == 2){
			      $('.section-directions-page2').find('.directions-all-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			    if(nextIndex == 3){
			      $('.section-directions-page3').find('.directions-all-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			    if(nextIndex == 4){
			      $('.section-directions-page4').find('.directions-all-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			    if(nextIndex == 5){
			      $('.section-directions-page5').find('.directions-all-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			     if(nextIndex == 6){
			     	$('.header-main').addClass('header-main-blc');


			     	$('.menu-page-wrpper').addClass('menu-page-wrpper-blc');
			     	$('.arrow-wrapper').addClass('arrow-wrapper-blc');

			      $('.section-directions-page6').find('.we-chosen-block').addClass('animated fadeInUp').css({
			          'animation-delay': '0.4s',
			          'animation-duration': '0.9s'
			        });
			    }
			    else {

			    	$('.header-main').hasClass('header-main-blc');
			    	$('.header-main').removeClass('header-main-blc');

			    	$('.menu-page-wrpper').hasClass('menu-page-wrpper-blc');
			    	$('.menu-page-wrpper').removeClass('menu-page-wrpper-blc');

			     	$('.arrow-wrapper').hasClass('arrow-wrapper-blc');
			     	$('.arrow-wrapper').removeClass('arrow-wrapper-blc');
			    }
			},
	  	});
	}










});




