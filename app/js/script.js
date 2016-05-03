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
	if($('.jq-slider ul').length){
		$('.jq-slider ul').owlCarousel({
			items: 4,
			margin: 5,
			loop: false,
			nav: true,
			navText: ['<div class="company-about__experts-arrow-left jq-slider__left"></div>', '<div class="company-about__experts-arrow-right jq-slider__right"></div>']
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
	/*end of slick&owl-carousel*/

	if($('.company-about__experts-slider').length){

		/*company-about__experts-arrow height*/
		var slide = $('.company-about__experts-slider li');

		function sliderHeight(){
			var minHeight = 9999;
			var i = 0;

			slide.each(function(){
				if($(this).outerHeight() < minHeight){
					minHeight = $(this).outerHeight();
				}
				$('.company-about__experts-arrow-left, .company-about__experts-arrow-right').css('height', minHeight);
			});
		}

		setTimeout(function () {
			sliderHeight();
		}, 50);

		$(window).resize(function(){
			setTimeout(function () {
				sliderHeight();
			}, 50);
		});
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
			sliderHeight();
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
});
/*end of SCRIPT.JS*/