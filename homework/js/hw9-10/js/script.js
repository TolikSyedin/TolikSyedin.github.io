$(document).ready(function(){

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

});

	$('body select').msDropdown();

});