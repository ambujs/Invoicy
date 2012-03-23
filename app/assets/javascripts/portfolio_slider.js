$(document).ready(function() {
		
	/* --------------------------------- Portfolio details slider Script --------------------------------- */

	// Save  the jQuery objects for later use.
	var outer		= $("#preview-outer");
	var arrow		= $("#arrow");
	var thumbs		= $("#thumbs span");
	var preview_pos;
	var preview_els	= $("#preview-inner div");
	var image_width	= preview_els.eq(0).width(); // Get width of imaages
			
	// Hook up the click event
	thumbs.click(function() {
		// Get position of current image
				
		preview_pos = preview_els.eq( thumbs.index( this) ).position();
				
		// Animate them!
		outer.stop().animate( {'scrollLeft' : preview_pos.left},	500 );
		arrow.stop().animate( {'left' : $(this).position().left },	500 );
				
		$('#thumbs span.shadow img.image-left').css({'border-color' : '#dfdfdf'});
		$(this).find('img.image-left').css({'border-color' : '#c5c5c5'});
	});

	// Reset positions on load
	arrow.css( {'left' : thumbs.eq(0).position().left } ).show();
	outer.animate( {'scrollLeft' : 0}, 0 );
	// Set initial width
	$("#preview-inner").css('width', preview_els.length * image_width);
		

});
  
