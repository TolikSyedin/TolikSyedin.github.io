$(function() {
	var $carousel = $('.jcarousel');
    $carousel.jcarousel({
    	
    	wrap: 'circular',
    	vertical: true	
    })
    .jcarouselAutoscroll({
        interval: 5000,
        target: '+=1',
        autostart: true
	})
	.jcarouselAutoscroll({
    	target: '+=1'
	});

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


	$('body select').msDropdown();
	$('#webmenu_msdd').css("width", "200px");

	$('.menu li').hover(function(){
		$(this).find('.submenu').slideDown(300).animate({
			backgroundColor: "#03c"
		}, 300);
	}, function(){
		$(this).find('.submenu').slideUp(400).animate({
			backgroundColor: "#0ff"
		}, 300);;
	});

	$('.submenu li').hover(function(){
		$(this).find('.submenu2').fadeIn(1000);
	}, function(){
		$(this).find('.submenu2').fadeOut(400);
	});

});