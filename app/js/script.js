/*SCRIP.JS*/
$(document).ready(function(){
	/*formstyler*/
	$('.jq-select select').styler();
	/*end of formstyler*/

	/*image in select for feedback block*/
	if($('.feedback .jq-select').length){

		function optionIndex(){
			//var i = 1;
			//$('.feedback .jq-select li').each(function(){
			//	$(this).addClass('li-'+i);
			//	i++;
			//});

			var selectedOptionIndex = $('.jq-select select option:selected').index();
			$('.feedback .jq-select .jq-selectbox__select-text').removeClass().addClass('jq-selectbox__select-text').addClass('li-'+selectedOptionIndex);
		}

		optionIndex();


		$('.jq-select select').on('change', function(){
			optionIndex();
		});
	}
	/*end of image in select for feedback block*/


});
/*end of SCRIPT.JS*/