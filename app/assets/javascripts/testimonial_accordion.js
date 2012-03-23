$(document).ready(function(){
	
	//Set default open/close settings
	$('.acc_container').hide(); //Hide/close all containers
	$('.acc_trigger:first').addClass('active').prev().show(); //Add "active" class to first trigger, then show/open the immediate next container
	var oldBlock = $('.acc_trigger:first').addClass('active').prev().find('.block');
		
	//On Click
	$('.acc_trigger').click(function(){
		if( $(this).prev().is(':hidden') ) { //If immediate next container is closed...	
				
			oldBlock.fadeTo(200, 0);
			$('.acc_trigger').removeClass('active').prev().slideUp(500);//Remove all .acc_trigger classes and slide up the immediate next container	
					
			$(this).toggleClass('active').prev().slideDown(0);
			var height = $(this).prev().height();
			$(this).prev().slideUp(0);
			$(this).prev().css("height", height);
			$(this).prev().slideDown(500);
				
			var newBlock = $(this).prev().find('.block');
			newBlock.delay(200).fadeTo(500, 1);					
			newBlock.delay(200).fadeTo(500, 1);

			oldBlock = newBlock;

		}
		return false; //Prevent the browser jump to the link anchor
	});
	$('.acc_container .block').css('-moz-border-radius' , '10px');
	$('.acc_container .block').css('-webkit-border-radius' , '10px');
});