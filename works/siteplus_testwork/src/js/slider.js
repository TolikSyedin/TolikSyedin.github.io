;(function($) {
	var slider;

	var	currentSlide = 1;


	$.fn.slider = function(){
		slider = this;



	}

	$.fn.slideLeft = function(){
		var button = this;
		button.on('click', function(){

			slider.children().animate({opacity:0},300);
			slider.animate({marginLeft:'-500px'},400);



		})
	} 
	$.fn.slideRight = function(){
		var button = this;


	}


})(jQuery);