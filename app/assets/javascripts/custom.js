$(document).ready(function() {
	
	/* --------------------------------- Initialize Cufon --------------------------------- */
	
	
	Cufon.replace('h1, h1.quote, h2, h3, h4');
	Cufon.replace('.footerTitleSpan, #intro p');
	Cufon.replace('.sf-menu li span');
	Cufon.replace('.nivo-caption p, a.button-header span, .bottom-tab span');
	Cufon('.sf-menu li a.main', {
		hover: {
			color: '#333'
		}
	});
	
	/* --------------------------------- Initialize Carousel --------------------------------- */

	
	jQuery('#mycarousel').jcarousel({
		auto: 2,
		scroll: 4,
		speed: 1000,
		wrap: 'last',
		initCallback: mycarousel_initCallback
	});

	function mycarousel_initCallback(carousel) {
		// Disable autoscrolling if the user clicks the prev or next button.
		carousel.buttonNext.bind('click', function() {
			carousel.startAuto(0);
		});

		carousel.buttonPrev.bind('click', function() {
			carousel.startAuto(0);
		});

		// Pause autoscrolling if the user moves with the cursor over the clip.
		carousel.clip.hover(function() {
			carousel.stopAuto();
		}, function() {
			carousel.startAuto();
		});
	};
	
	/* --------------------------------- Initialize SF menu --------------------------------- */
	
	
	jQuery('ul.sf-menu').superfish({
		speed: 400,
		animation:  {opacity:'show',height:'show'}
	});
		

	/* --------------------------------- Initialize jqTransform --------------------------------- */
	
	
	$('form.jqtransform').jqTransform({imgPath:'../images/jqtransform/'});
	

	/* --------------------------------- Form Value Clearing Script --------------------------------- */
	
	
	var clearNamePrevious = '';
	var clearEmailPrevious = '';
	
	// clear input on focus
	$('#name, #email, #search').focus(function() {
		if($(this).val()==$(this).attr('title')) {
			clearNamePrevious = $(this).val();
			$(this).val('');
		}
	});

	// if field is empty afterward, add text again
	$('#name, #email, #search').blur(function() {
		if($(this).val()=='') {
			$(this).val(clearNamePrevious);
		}
	});
	
	
	/* --------------------------------- Form Value Clearing Script --------------------------------- */
	
	
	$("a[rel^='prettyPhoto']").hover(function()
	{
		$(this).find("img").stop().fadeTo(200, 0.6);
		
	}, function()
	{
		$(this).find("img").stop().fadeTo(200, 1);
	});

	/* --------------------------------- Form Value Clearing Script --------------------------------- */
	
	var current_next = $(".sf-menu li a.current").parent().next().find("a.main");
	if (jQuery.browser.msie) {
		current_next.css("background-position", "0px -37px");
	}

	
	
	
	
});
  
