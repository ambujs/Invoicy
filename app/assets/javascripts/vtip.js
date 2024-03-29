/**
Vertigo Tip by www.vertigo-project.com
Requires jQuery
*/

this.vtip = function() {    
    this.xOffset = 15; // x distance from mouse
    this.yOffset = -30; // y distance from mouse       
	
    
    $(".vtip").unbind().hover(    
        function(e) {
            this.t = this.title;
            this.title = ''; 
            this.top = (e.pageY + yOffset); this.left = (e.pageX + xOffset);
            
            $('body').append( '<p id="vtip">' + this.t + '</p>' );
                        
            $('p#vtip').css("top", this.top+"px").css("left", this.left+"px").fadeIn("slow");
	    $('p#vtip').css("-moz-border-radius", "5px");
	    $('p#vtip').css("-webkit-border-radius", "5px");
	    
            
        },
        function() {
            this.title = this.t;
            $("p#vtip").fadeOut("slow").remove();
        }
    ).mousemove(
        function(e) {
            this.top = (e.pageY + yOffset);
            this.left = (e.pageX + xOffset);
                         
            $("p#vtip").css("top", this.top+"px").css("left", this.left+"px");
        }
    );          
		
	
    
};

jQuery(document).ready(function($){vtip();}) 