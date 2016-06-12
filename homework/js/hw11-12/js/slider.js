(function($){
	var slider;
	var interval;
	var currentSlide = 0;
	var currentHeight; 



	$.fn.slider = function(){
		slider = this
		var length = slider.children().length;
		var firstChild = slider.children(':first').clone();

		currentHeight = slider.children().height();
		
		slider.append(firstChild);

		function intervalFunc(){
			interval = setInterval(function(){
				if(currentSlide < length){
					currentSlide++;
					slider.animate({'top': '-=' + currentHeight + 'px'}, 1000);
				} else if (currentSlide === length) {
					slider.css('top', '0px');
					currentSlide = 1;
					slider.animate({'top': '-=' + currentHeight + 'px'}, 1000);
				} 
							
			}, 1700);
		}

		intervalFunc();


		$.fn.slideLeft = function(){
			var button = this;

			button.on('click', function(){
				if(currentSlide===0){ 
					slider.stop(true, true).css({'top': '-' + currentHeight * length + 'px'});
					currentSlide = 5;
				} 
				
				currentSlide--;
				slider.stop(true, true).animate({'top': '+=' + currentHeight + 'px'}, 400);
																	
				})

			button.hover(function(){
					clearInterval(interval);
				}, function(){
					intervalFunc()
				});
			
		}
	
	
		$.fn.slideRight = function (){
			var button = this
			button.on('click', function(){
				if(currentSlide === length) {
					slider.css('top', '0px');
					currentSlide = 1;
					slider.stop(true, true).animate({'top': '-=' + currentHeight + 'px'}, 400);
				} else { 
					currentSlide++;
					slider.stop(true, true).animate({'top': '-=' + currentHeight + 'px'}, 400);
				}
			})

			button.hover(function(){
					clearInterval(interval);
				}, function(){
					intervalFunc()
				});

		}
		
	}

})(jQuery);