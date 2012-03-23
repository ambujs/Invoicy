$(document).ready(function() { 
	/* HOMEPAGE Slider script - Infinite Carousel */
	var current_slides = $('#carousel_ul').html();
	var max_slide = $("#carousel_ul li").size();
	if (max_slide == 2) {
		$('#carousel_ul').append(current_slides);
		$('#carousel_ul').append(current_slides);
	}
	if (max_slide == 3) {
		$('#carousel_ul').append(current_slides);
	}
	if (max_slide == 4) {
		$('#carousel_ul').append(current_slides);
	}
				
	$('#carousel_ul img').hide();//hide all the images on the page
	
	windowPositioning();
	
	$('.lr_scroll').stop().fadeTo(0, 0);
	
	if (jQuery.browser.msie) {
		$('.description').stop().slideUp(0); 
	}
	else {
		$('.description').stop().fadeTo(0, 0); 
	}
	$('html').css('overflow-x', 'hidden');
	
		
	var current_slide = 0;
	if (jQuery.browser.msie) {
		$('#carousel_ul li:eq(' + current_slide + ') .description').stop().slideUp(500);  
	}
	else {
		$('#carousel_ul li:eq(' + current_slide + ') .description').stop().fadeTo(500, 1);  
	}
	
	//alert ($('#header-container').css(''));
	
	// Initialize first item... 
	var item_width = $('#carousel_ul li').outerWidth();	
	var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
	
	
	$('#carousel_ul:not(:animated)').animate({'left' : left_indent},0,function(){    		
		
		if (jQuery.browser.msie) {
			$('#carousel_ul li:eq(' + (current_slide - 1) + ') .description').stop().slideDown(500);  
		}
		else {
			$('#carousel_ul li:eq(' + (current_slide - 1) + ') .description').stop().fadeTo(500, 1);  
		}
		$('#carousel_ul li:first').before($('#carousel_ul li:last'));
		$('#carousel_ul').css({'left' : '-961px'});
	});  
	

	//options( 1 - ON , 0 - OFF)
	var auto_slide = 1;
	var hover_pause = 1;
	var key_slide = 1;
        
	//speed of auto slide(
	var auto_slide_seconds = 5000;
	/* IMPORTANT: i know the variable is called ...seconds but it's in milliseconds ( multiplied with 1000) '*/
    $("#div-hover").css('left', function() {
		var awidth = $(window).width();
		var aexcess_width = ((awidth - 960) / 2);
		return aexcess_width + "px";		
	});
    
	/*move the last list item before the first item. The purpose of this is if the user clicks to slide left he will be able to see the last item.*/
	$('#carousel_ul li:first').before($('#carousel_ul li:last')); 
        
	//check if auto sliding is enabled
	if(auto_slide == 1){
	/*set the interval (loop) to call function slide with option 'right' and set the interval time to the variable we declared previously */
		$(window).bind("load", function() {
			timer = setInterval('slide("right")', auto_slide_seconds); 
		});	
		/*and change the value of our hidden field that hold info about the interval, setting it to the number of milliseconds we declared previously*/
		$('#hidden_auto_slide_seconds').val(auto_slide_seconds);
	}
  
	var vleft = 959;
	if (jQuery.browser.webkit) {
		vleft = 960;
		if (/chrome/.test( navigator.userAgent.toLowerCase())) {
			vleft = 960;
		}
	}	
	if (jQuery.browser.msie){
		vleft = 960; // unfortunately, IE7 is working well compared to other browsers including IE8.
		//alert( $.browser.version );
		if (jQuery.browser.version >= 9.0) {
			vleft = 959;
		}

	}
	
		
	// slider adjustment for loading and resizing of window
	
	var width = $(window).width();
	var excess_width = ((width - 960) / 2) - vleft;
	
	aexcess_width = "-" + excess_width + "px"
	$("#carousel_ul li").css('left', function() {
		var width = $(window).width();
		var excess_width = ((width - 960) / 2) - vleft;

		return excess_width + "px";		
	});	
		
	$(window).bind('resize', function() {
		var width = $(window).width();
		$("#carousel_ul li").css('left', function() {
			var excess_width = ((width - 960) / 2) - vleft;
			return excess_width + "px";
		});
		windowPositioning();
	});
		
		
	$('#carousel_ul li img').hover(function(){
		if (jQuery.browser.msie)
			$('.lr_scroll').stop().fadeTo(300, 0.7);
		else
			$('.lr_scroll').stop().fadeTo(300, 1);
	},function(){
		$('.lr_scroll').stop().fadeTo(300, 0);
	});
	
		
	$('.description').hover(function(){
		if (jQuery.browser.msie)
			$('.lr_scroll').stop().fadeTo(300, 0.7);
		else
			$('.lr_scroll').stop().fadeTo(300, 1);
	},function(){
		$('.lr_scroll').stop().fadeTo(300, 0);
	});
	
	
	$('#div-hover').hover(function(){
		//stop the interval
		clearInterval(timer)
		if (jQuery.browser.msie)
			$('.lr_scroll').stop().fadeTo(300, 0.7);
		else
			$('.lr_scroll').stop().fadeTo(300, 1);
	
	},function(){
		$('.lr_scroll').stop().fadeTo(300, 0);
		timer = setInterval('slide("right")', auto_slide_seconds); 
	});
	
	if (jQuery.browser.msie) {
		$(function() {
			var zIndexNumber = 1000;
			$('div').each(function() {
				$(this).css('zIndex', zIndexNumber);
				zIndexNumber -= 10;
			});
		});
	}
});
  

var current_slide = 2;
// Slide function  	
function slide(where){
	var max_slides = $("#carousel_ul li").size();
	// Fade the description to slide
	if (jQuery.browser.msie)
		$('.description').stop().slideUp(300); 
	else
		$('.description').stop().fadeTo(500, 0); 
	
	
	// Get the item width   
	var item_width = $('#carousel_ul li').outerWidth();
	/* using a if statement and the where variable check 
	we will check where the user wants to slide (left or right)*/
	if(where == 'left'){
		//...calculating the new left indent of the unordered list (ul) for left sliding		
		var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
	}
	else {
		//...calculating the new left indent of the unordered list (ul) for right sliding
		var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
	}
            
	//make the sliding effect using jQuery's animate function... '
	$('#carousel_ul:not(:animated)').animate({'left' : left_indent}, 1500,function(){    		
                
	/* when the animation finishes use the if statement again, and make an ilussion
	of infinity by changing place of last or first item*/
	
	if(where == 'left'){
		//...and if it slided to lseft we put the last item before the first item
					
		if (current_slide < 1) {
			current_slide = max_slides;
		}
		
		if (jQuery.browser.msie) {
			$('#carousel_ul li:eq(' + (current_slide - 1) + ') .description').stop().slideDown(500);  
		}
		else {
			$('#carousel_ul li:eq(' + (current_slide - 1) + ') .description').stop().fadeTo(500, 1);  
		}
		
		$('#carousel_ul li:first').before($('#carousel_ul li:last'));
	}
	else {
		//...and if it slided to right we put the first item after the last item
		if (current_slide > max_slides) {
			current_slide = 1;
		}
		if (jQuery.browser.msie) {
			$('#carousel_ul li:eq(' + (current_slide + 1) + ') .description').stop().slideDown(500); 
		}
		else {
			$('#carousel_ul li:eq(' + (current_slide + 1) + ') .description').stop().fadeTo(500,1);
		}
		
		  
		$('#carousel_ul li:last').after($('#carousel_ul li:first')); 
	}
             
	$('#carousel_ul').css({'left' : '-961px'});
		//...and then just get back the default left indent
		//$('.description').stop().fadeTo(500, 0.7);  
	});       
}

function windowPositioning() {
	var top = ($(window).height() - $('#header-container').outerHeight()) / 2;
	var left = ($(window).width() - $('#header-container').outerWidth()) / 2;
	
	if ($(window).width() < 1135) {
		$('#left_scroll').css({'left' : '-25px'});
		$('#right_scroll').css({'right' : '-25px'});
	}
	else {
		$('#left_scroll').css({'left' : '-100px'});
		$('#right_scroll').css({'right' : '-100px'});
	}
		
	/* fixing 1px gap differences between modern browsers */

	if ((left % 2) != 0) {
		left = Math.round(left);
	}
	// we're getting decimal value for some browser..
	
	/*
	if (rounded) {
		$('#slider-bg-overlap').css({left: '1px'});
	}
	*/
	$('#slider-bg-overlap').css({left: '0px'});	
	jQuery.each(jQuery.browser, function(i, val) {
	if (i=="webkit") {
		left = left - 1;
		$('#slider-bg-overlap').css({left: '0px'});
		if (/chrome/.test( navigator.userAgent.toLowerCase()))
			left = left;
	}
	if (i=="msie") {
		left = left - 1;
		$('#slider-bg-overlap').css({left: '0px'});
	}
	});
	
	
	if (jQuery.browser.msie){
		if (jQuery.browser.version >= 9.0) {
			left = left + 1;
		}

	}
		
	$('#header-container').css({position:'relative', margin:0, left: (left > 0 ? left : 0)+'px'});
	$('#carousel_container').css({position:'relative', margin:0, left: 0});
	$('#content-container').css({position:'relative', margin:0, left: (left > 0 ? left : 0)+'px'});
	$('#bottom-container').css({position:'relative', margin:0, left: (left > 0 ? left : 0)+'px'});
	
	var divhoverleft = left + 8;
	$('#div-hover').css({position:'absolute', margin:0, left: (divhoverleft > 0 ? divhoverleft : 0)+'px'});
		
	/* */
}	

$(window).bind("load", function() {
	setInterval("preload_images()", 10);
});	

function preload_images() {
	var images = $('#carousel_ul img').length;
	$('#carousel_ul img:hidden').eq(0).fadeIn(500);
}