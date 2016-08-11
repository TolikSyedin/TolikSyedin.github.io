$(document).ready(function(){

	var documentEl = $(document);
	var wind = $(window);
	var body = $('html, body');
	var headerList = $('.header__list');
	var parallaxImg = $('.parallaxImg');
	var aboutText = $('.about__text');
	var slideBars = $('.about__meter');
	var jsBar = $('.about__meter--js')
	var prev = '<svg class="controls__svg" viewBox="0 0 270.46 512"><path class="a" d="M124.94,266.21L366.47,507.73A14.49,14.49,0,0,0,387,487.24L155.74,256,387,24.79A14.54,14.54,0,0,0,376.77,0a14.13,14.13,0,0,0-10.19,4.29L125,245.82A14.41,14.41,0,0,0,124.94,266.21Z" transform="translate(-120.77 0)"/></svg>';
	var next = '<svg class="controls__svg" viewBox="0 0 270.46 512"><path class="a" d="M387,245.82L145.42,4.29A14.13,14.13,0,0,0,135.23,0,14.54,14.54,0,0,0,125,24.79L356.26,256,125,487.24a14.49,14.49,0,0,0,20.49,20.49L387.06,266.21A14.41,14.41,0,0,0,387,245.82Z" transform="translate(-120.77 0)"/></svg>';
	var topOffset;

	function goToHome() {
    	body.stop(true).animate({
    		scrollTop:0
    	}, 500, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
	}
    function goToPortfolio() {
    	body.stop(true).animate({
    		scrollTop:$('#portfolio').offset().top
    	}, 500, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
    }
    function goToAbout() { 
    	body.stop(true).animate({
    		scrollTop:$('#about').offset().top
    	}, 500, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
    }

    function goToContacts() {
    	body.stop(true).animate({
    		scrollTop:$('#contacts').offset().top
    	}, 500, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
  	};

	function callback() {
		console.log('menu movement callback')
	};


	$('#home-link').click(goToHome);
	$('.header__btn').click(goToPortfolio);
    $('#portfolio-link').click(goToPortfolio);    
    $('#about-link').click(goToAbout)
	$('#contacts-link').click(goToContacts);
 	

	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [prev,next],
		margin: 400,
		autoplay: true,
		autoplayHoverPause: true,
		mouseDrag: false
	});


	wind.scroll(function(){
		topOffset = documentEl.scrollTop();

		

		if(topOffset > 500){
			headerList.addClass('header__list--navigate');
		} else {
			headerList.removeClass('header__list--navigate');
		}
	
		if(topOffset > 850){
			aboutText.addClass('about__text--animated');
			slideBars.addClass('about__meter--slideOut');
			jsBar.addClass('about__meter--JSslideOut');
	
		}

		parallaxImg.css('top', (Math.floor(documentEl.scrollTop()*.1*-1) + 'px'));
	});

});