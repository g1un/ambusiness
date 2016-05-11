/*SCRIP.JS*/
$(document).ready(function(){
	/*formstyler*/
	$('.jq-select select').styler();
	/*end of formstyler*/

	/*image in select for feedback block*/
	if($('.feedback .jq-select').length){

		function optionIndex(){
			var selectedOptionIndex = $('.jq-select select option:selected').index();
			$('.feedback .jq-select .jq-selectbox__select-text').removeClass().addClass('jq-selectbox__select-text').addClass('li-'+selectedOptionIndex);
		}

		optionIndex();

		$('.jq-select select').on('change', function(){
			optionIndex();
		});
	}
	/*end of image in select for feedback block*/

	/*slick&owl-carousel*/
	//if($('.jq-slider ul').length){
	//	$('.jq-slider ul').owlCarousel({
	//		items: 4,
	//		margin: 5,
	//		loop: false,
	//		nav: true,
	//		navText: ['<div class="company-about__experts-arrow-left jq-slider__left"></div>', '<div class="company-about__experts-arrow-right jq-slider__right"></div>']
	//	});
	//}

	if($('.company-about__experts-slider ul').length){
		$('.company-about__experts-slider ul').slick({
			prevArrow: $('.company-about__experts-arrow-left'),
			nextArrow: $('.company-about__experts-arrow-right'),
			adaptiveHeight: true,
			infinite: false,
			slidesToShow: 4
		});
	}

	if($('.professionals__slider ul').length){
		$('.professionals__slider ul').slick({
			prevArrow: $('.professionals__arrow-left'),
			nextArrow: $('.professionals__arrow-right'),
			adaptiveHeight: true
		});
	}

	if($('.edu__slider ul').length){
		$('.edu__slider ul').slick({
			prevArrow: $('.edu__arrow-left'),
			nextArrow: $('.edu__arrow-right'),
			adaptiveHeight: true
		});
	}

	/*training-page__slider*/
	if($('.training-page__slider ul').length){
		$('.training-page__slider ul').slick({
			autoplay: true,
			arrows: false,
			autoplaySpeed: 5000
		});
	}
	/*end of training-page__slider*/

	/*trainings-unit__slider*/
	if($('.trainings-unit__slider-list').length){
		$('.trainings-unit__slider-list').slick({
			autoplay: true,
			arrows: false,
			autoplaySpeed: 5000,
			cssEase: 'ease-in-out',
			dots: true,
			adaptiveHeight: true,
			dotsClass: 'trainings-unit__slider-dots'
		});
	}
	/*end of trainings-unit__slider*/

	/*.edu-page__articles*/
	if($('.edu-page__articles ul').length){
		$('.edu-page__articles ul').slick({
			prevArrow: $('.edu-page__articles-left'),
			nextArrow: $('.edu-page__articles-right'),
			adaptiveHeight: true,
			slidesToShow: 3
		});
	}
	/*end of .edu-page__articles*/

	/*.edu-page__books-list*/
	if($('.edu-page__books-list ul').length){
		$('.edu-page__books-list ul').slick({
			prevArrow: $('.edu-page__books-list-left'),
			nextArrow: $('.edu-page__books-list-right'),
			adaptiveHeight: true,
			slidesToShow: 5
		});
	}
	/*end of .edu-page__books-list*/

	/*end of slick&owl-carousel*/

	if($('.company-about__experts-slider').length){

		/*company-about__experts-arrow height*/
		//var slide = $('.company-about__experts-slider li');
		//
		//function sliderHeight(){
		//	var minHeight = 9999;
		//	var i = 0;
		//
		//	slide.each(function(){
		//		if($(this).outerHeight() < minHeight){
		//			minHeight = $(this).outerHeight();
		//		}
		//		$('.company-about__experts-arrow-left, .company-about__experts-arrow-right').css('height', minHeight);
		//	});
		//}
		//
		//setTimeout(function () {
		//	sliderHeight();
		//}, 50);
		//
		//$(window).resize(function(){
		//	setTimeout(function () {
		//		sliderHeight();
		//	}, 50);
		//});
		/*end of company-about__experts-arrow height*/

		/*text characters limitation in company-about__experts-slider*/
		var slideText = $('.company-about__experts-slider li p');
		var letterLimit = 150;
		var slideTextShow = $('.company-about__experts-slider li b');
		var slideTextHide = $('.company-about__experts-slider li i');

		slideText.each(function(){
			var letterNumber = $(this).text().length;
			if(letterNumber > letterLimit){
				$("<p class='hidden'>"+$(this).text().trim()+"</p>").insertAfter($(this));
				$(this).text($(this).text().trim().substring(0, letterLimit)+'...');
			}
		});

		slideTextShow.on('click', function(){
			$(this).toggle();
			$(this).parent().find('i').toggleClass('show');
			$(this).parent().find('p').toggleClass('hidden');
		});

		slideTextHide.on('click', function(){
			$(this).toggleClass('show');
			$(this).parent().find('b').toggle();
			$(this).parent().find('p').toggleClass('hidden');
		});
		/*end of text height limitation in company-about__experts-slider*/
	}

	/*company-about__nav*/
	if($('.company-about__nav').length){
		var companyAboutBtn = $('.company-about__nav li'),
				companyAbout = [$('.company-about__school'), $('.company-about__experts')];

		function showHide(){
			for(var i=0; i<companyAbout.length; i++){
				companyAbout[i].hide();
			}

			companyAboutBtn.each(function(){
				if($(this).hasClass('active')){
					companyAbout[$(this).index()].show();
				}
			});
		}

		showHide();

		companyAboutBtn.on('click', function(){
			companyAboutBtn.removeClass('active');
			$(this).addClass('active');

			showHide();
			//sliderHeight();

			$('.company-about__experts-slider ul').slick('unslick');

			$('.company-about__experts-slider ul').slick({
				prevArrow: $('.company-about__experts-arrow-left'),
				nextArrow: $('.company-about__experts-arrow-right'),
				adaptiveHeight: true,
				infinite: false,
				slidesToShow: 4
			});

		});
	}
	/*end of company-about__nav*/

	///*owl-carousel*/
	//$(".professionals__slider ul").owlCarousel({
	//	loop: true,
	//	nav: true,
	//	items: 1,
	//});
	///*end of owl-carousel*/

	///*slider*/
	//if($('.professionals__slider ul li').length >= 2){
	//	var slide = $('.professionals__slider ul li');
	//	var slider = $('.professionals__slider ul');
	//	var sliderLeft = $('.professionals__arrow-left');
	//	var sliderRight = $('.professionals__arrow-right');
	//
	//	function sliderPositioning(){
	//		var sliderWidth = slider.outerWidth();
	//		var i = 0;
	//
	//		slide.each(function(){
	//			$(this).css({
	//				'display': 'block',
	//				'position': 'absolute',
	//				'top': 0,
	//				'left': i*sliderWidth+'px',
	//				'width': sliderWidth
	//			});
	//
	//			i++;
	//
	//			if(i == slide.length){
	//				if(slide.css('left') == 0 || slide.css('left') == '0px'){
	//					slider.css('height', slide.outerHeight());
	//				}else{
	//					console.log(slide.css('error'));
	//				}
	//			}
	//		});
	//	}
	//
	//	sliderPositioning();
	//
	//	$(window).resize(function() {
	//		sliderPositioning();
	//	});
	//
	//	sliderLeft.on('click', function(){
	//		var sliderWidth = slider.outerWidth();
	//		if(slide.css('left') == -sliderWidth){
	//
	//		}
	//	});
	//}
	///*end of slider*/

	/*business-cases-unit list*/
	if($('.business-cases-unit').length){
		var nav = $('.business-cases-unit__nav>li');
		var content = $('.business-cases-unit__content>li');

		content.hide();
		nav.each(function(){
			if($(this).hasClass('active')){
				content.eq($(this).index()).show();
			}
		});

		nav.on('click', function (e) {
			e.preventDefault();
			nav.removeClass('active');
			$(this).addClass('active');
			content.hide();
			content.eq($(this).index()).show();
		});
	}
	/*end of business-cases-unit list*/

	/*header__application link */
	if($('.header__application a').length){
		var apply = $('.header__application a, .trainings__apply, .training-page__slider ul li .text a, .coaching-page__specialists a, .company-about__experts .button, .company-about__themes .button, .trainings-unit__header .button');
		var feedbackTop = $('.feedback').offset().top;

		apply.on('click', function(e){
			e.preventDefault();
			console.log(feedbackTop);
			$('html, body').animate({scrollTop: feedbackTop}, 750);
		});
	}
	/*end of header__application link*/
});
/*end of SCRIPT.JS*/