/*SCRIP.JS*/
$(document).ready(function(){

	if($('.fb').length){
		$('.fb').fancybox();
	}

	if($('.feedback .button.fb').length){
		var fbButton = $('.feedback .button.fb');
		var fbFormTitle = $('.feedback-form h2');

		fbButton.on('click', function(){
			var fbTitleText = $('.jq-select option:selected').text();
			fbFormTitle.text(fbTitleText);
		});
	}

	/*formstyler*/
	$('.jq-select select').styler();
	/*end of formstyler*/

	/*edu sliders*/
	if($('.edu__slider--books ul').length){
		$('.edu__slider--books ul').slick({
			prevArrow: $('.edu__slider--books .edu__arrow-left'),
			nextArrow: $('.edu__slider--books .edu__arrow-right'),
			adaptiveHeight: true
		});
	}

	if($('.edu__slider--articles ul').length){
		$('.edu__slider--articles ul').slick({
			prevArrow: $('.edu__slider--articles .edu__arrow-left'),
			nextArrow: $('.edu__slider--articles .edu__arrow-right'),
			adaptiveHeight: true,
			slidesToShow: 3
		});
	}
	/*end of edu sliders*/

	/*books-articles lists on main page*/
	if($('.edu').length){
		var eduNav = $('.edu__nav>li');
		var eduContent = $("div[class*='edu__slider']");

		eduContent.hide();
		eduNav.each(function(){
			if($(this).hasClass('active')){
				eduContent.eq($(this).index()).show();
			}
		});

		eduNav.on('click', function (e) {
			e.preventDefault();
			eduNav.removeClass('active');
			$(this).addClass('active');
			eduContent.hide();
			eduContent.eq($(this).index()).show();

			$('.edu__slider--books ul').slick('unslick');
			$('.edu__slider--books ul').slick({
				prevArrow: $('.edu__slider--books .edu__arrow-left'),
				nextArrow: $('.edu__slider--books .edu__arrow-right'),
				adaptiveHeight: true
			});

			$('.edu__slider--articles ul').slick('unslick');
			$('.edu__slider--articles ul').slick({
				prevArrow: $('.edu-page__articles-left'),
				nextArrow: $('.edu-page__articles-right'),
				adaptiveHeight: true,
				slidesToShow: 3
			});
		});
	}
	/*end of books-articles lists on main page*/

	/*header__application link */
	if($('.header__application a').length){
		var apply = $('.header__application a, .trainings__apply, .training-page__slider ul li .text a, .coaching-page__specialists a, .company-about__experts .button, .company-about__themes .button, .trainings-unit__header .button, .business-cases-unit__footer .apply');
		var feedbackTop = $('.feedback').offset().top;

		apply.on('click', function(e){
			e.preventDefault();
			console.log(feedbackTop);
			$('html, body').animate({scrollTop: feedbackTop}, 750);
		});
	}
	/*end of header__application link*/

	/*coaching-page__info experts link */
	if($('.coaching-page__info .experts').length){
		var expertsLink = $('.coaching-page__info .experts');
		var expertsTop = $('.coaching-page__specialists').offset().top;

		expertsLink.on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop: expertsTop}, 750);
		});
	}
	/*end of coaching-page__info experts link*/

	/*company-about__students-link experts link */
	if($('.company-about__students-link').length){
		var studentsToExpertsLink = $('.company-about__students-link');
		var studentsToExpertsPosition = $('.company-about #experts').offset().top;

		studentsToExpertsLink.on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop: studentsToExpertsPosition}, 500);

			setTimeout(function(){
				$('.company-about__nav li').removeClass('active');
				$('#experts').addClass('active');
				showHide();

				$('.company-about__experts-slider ul').slick('unslick');
				$('.company-about__experts-slider ul').slick({
					prevArrow: $('.company-about__experts-arrow-left'),
					nextArrow: $('.company-about__experts-arrow-right'),
					adaptiveHeight: true,
					infinite: false,
					slidesToShow: 4
				});
			}, 501);
		});
	}
	/*end of company-about__students-link experts link*/

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

	/*training-page__slider*/
	if($('.training-page__slider ul').length){
		$('.training-page__slider ul').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			prevArrow: $('.training-page__arrow-left'),
			nextArrow: $('.training-page__arrow-right')
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
	if($('.edu-page:not(.edu-page--all).edu-page__articles ul').length){
		$('.edu-page__articles ul').slick({
			prevArrow: $('.edu-page__articles-left'),
			nextArrow: $('.edu-page__articles-right'),
			adaptiveHeight: true,
			slidesToShow: 3
		});
	}
	/*end of .edu-page__articles*/

	/*.edu-page__books-list*/
	if($('.edu-page:not(.edu-page--all).edu-page__books-list ul').length){
		$('.edu-page__books-list ul').slick({
			prevArrow: $('.edu-page__books-list-left'),
			nextArrow: $('.edu-page__books-list-right'),
			adaptiveHeight: true,
			slidesToShow: 5
		});
	}
	/*end of .edu-page__books-list*/

	if($('.company-about__experts-slider').length){

		/*text characters limitation in company-about__experts-slider*/
		var expertsItem = $('.company-about__experts-slider li');
		var expertsTextShow = $('.company-about__experts-slider ul b');
		var expertsTextHide = $('.company-about__experts-slider li i');

		expertsTextShow.hide();
		expertsTextHide.hide();

		expertsTextShow.on('click', function () {
			$(this).parent().children('.text').hide();
			$(this).parent().children('.hidden').show();
			$(this).hide();
			$(this).next('i').show();
		});

		expertsTextHide.on('click', function () {
			$(this).parent().children('.text').show();
			$(this).parent().children('.hidden').hide();
			$(this).hide();
			$(this).prev('b').show();
		});

		expertsItem.each(function(){
			var expertsTextCount = 0;
			var expertsText = $(this).children('div.text').children('p');
			console.log($(this).children('div.text').children('p'));

			expertsText.each(function(){
				expertsTextCount += $(this).text().length;
				if(expertsTextCount > 150){
					$(this).parent().next('b').show();

					$(this).parent().clone().insertAfter($(this).parent()).addClass('hidden');

					var prevLength  = $(this).prevAll('p').text().length;

					var remainingChunk =
							$(this).text().substring(0, 150 - prevLength);
					$(this).text(remainingChunk + '...');

					$(this).nextAll('p').empty();

					return false;
				}
			});
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

			$('.company-about__experts-slider ul').slick('unslick');

			$('.company-about__experts-slider ul').slick({
				prevArrow: $('.company-about__experts-arrow-left'),
				nextArrow: $('.company-about__experts-arrow-right'),
				adaptiveHeight: true,
				infinite: false,
				slidesToShow: 4
			});

		});

		if($('li:target').length){
			console.log($('li:target'));
			companyAboutBtn.removeClass('active');
			$('li:target').addClass('active');

			showHide();
		}
	}
	/*end of company-about__nav*/

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
});
/*end of SCRIPT.JS*/