$(function() {
	$('.jcarousel')
	.jcarousel({

    	wrap: 'circular',
    	vertical: true	// вертикально переключает, но с 5-го клика. Есть бага с пред и след картинкой. вместо них белый фон, а на примере должны быть "склеяны" и идти друг за другом
    })
    .jcarouselAutoscroll({
        interval: 5000,
        target: '+=1',
        autostart: true
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
		$(this).find('.submenu').stop(true, true).slideDown(300).animate({
			backgroundColor: "#03c" // этот метод не отрабатывает. скрипт подключал с xiper.net
		}, 300);
	}, function(){
		$(this).find('.submenu').slideUp(400).animate({
			backgroundColor: "#0ff" // этот метод не отрабатывает. скрипт подключал с xiper.net
		}, 300);;
	});



	$('.submenu li').hover(function(){
		$(this).find('.submenu2').fadeIn(1000);
	}, function(){
		$(this).find('.submenu2').fadeOut(400);
	});

});


