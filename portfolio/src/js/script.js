$(document).ready(function(){

	var documentEl = $(document);
	var body = $('html, body');
	var wind = $(window);
	var prev = '<svg class="svg__icon" viewBox="0 0 270.46 512"><path class="a" d="M124.94,266.21L366.47,507.73A14.49,14.49,0,0,0,387,487.24L155.74,256,387,24.79A14.54,14.54,0,0,0,376.77,0a14.13,14.13,0,0,0-10.19,4.29L125,245.82A14.41,14.41,0,0,0,124.94,266.21Z" transform="translate(-120.77 0)"/></svg>';
	var next = '<svg class="svg__icon" viewBox="0 0 270.46 512"><path class="a" d="M387,245.82L145.42,4.29A14.13,14.13,0,0,0,135.23,0,14.54,14.54,0,0,0,125,24.79L356.26,256,125,487.24a14.49,14.49,0,0,0,20.49,20.49L387.06,266.21A14.41,14.41,0,0,0,387,245.82Z" transform="translate(-120.77 0)"/></svg>';
	var parallaxImg = $('.parallaxImg');



	function goToHome() {
    	body.stop(true).animate({
    		scrollTop:0
    	}, 1200, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
	}
    function goToPortfolio() {
    	body.stop(true).animate({
    		scrollTop:$('#portfolio').offset().top
    	}, 1200, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
    }
    function goToAbout() { 
    	body.stop(true).animate({
    		scrollTop:$('#about').offset().top
    	}, 1200, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
    }

    function goToContacts() {
    	body.stop(true).animate({
    		scrollTop:$('#contacts').offset().top
    	}, 1200, function() {
	    	callback(); // Callback is required for iOS
		});
    	return false;
  	};

	function callback() {
		console.log('menu movement callback')
	};


	function navigation(){
		var topOffset = documentEl.scrollTop();
		var headerList = $('.header__list');


		if(topOffset > 500){
			headerList.addClass('header__list--navigate');
		} else {
			headerList.removeClass('header__list--navigate');

		}
	}


	wind.scroll(navigation);

	$('#home-link').click(goToHome);
	$('.header__btn').click(goToPortfolio);
    $('#portfolio-link').click(goToPortfolio);    
    $('#about-link').click(goToAbout)
	$('#contacts-link').click(goToContacts);
 	

	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		navText: [prev,next],
		margin: 400,
		// autoplay: true,
		// autoplayHoverPause: true,
	});


	wind.scroll(function(){
		parallaxImg.css('top', (Math.floor(documentEl.scrollTop()*.1*-1) + 'px'));
	})


	$('#portfolio').hover(function(){
		parallaxImg.css('transform', 'none')
	});
	$('#portfolio').mouseleave(function(){
		parallaxImg.css('transform', 'translate3d(0px,0px,0px)')

	});





	// $('.portfolio__item').hover(function(){
	// 	var item = $(this);
	// 	var svg = item.find('.svg');
	// 	var desc = item.find('.portfolio__desc');
	// 	item.animate({'padding': '0 540px 0 0'}, 800);
	// 	svg.animate({'opacity': '1'}, 800);
	// 	desc.animate({
	// 		'display': 'block',
	// 		'padding-left': 0
	// 	}, 800);

	// }, function(){
	// 	var item = $(this);
	// 	item.animate({'padding': '0 260px'}, 400);
	// });


});