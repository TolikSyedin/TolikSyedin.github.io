$(document).ready(function () {
    var pCont = $('.projects__container'),
        pWrap = $('.projects__wrapper'),
        pItem = $('.projects__item'),
        ww = $(window).width(),
        params,
        swiper = new Swiper('.swiper-container', {
            autoHeight: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoResize: false,
            resizeReInit: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            pagination: '.swiper-pagination',
            paginationClickable: true, 
            paginationBulletRender: function (index, className) {
                return '<span class="' + className + '">' + '0' +(index + 1) + '</span>';
                },
            onSlideChangeEnd: function(swiper, className){
        		var slide = swiper.slides;
        		var index = swiper.snapIndex
                index++;
                $('.projects__desc').fadeOut(100);
                $('#desc'+ index).delay(400).fadeIn(300)
                console.log('done!');

        	   },

            
    });
    params = swiper.params;

    $(window).resize(function(){
        var ww = $(window).width()
         if(ww < 1500 && ww > 1200){
            pItem.css('margin', '0 8% 0 0%');
            pWrap.css({
                marginLeft: '-200px',
            });
            pCont.css('margin', '0 auto');
            swiper = new Swiper ('.swiper-container', params)
        } else if (ww < 1200 & ww > 769) {
            pWrap.css('marginLeft', '-70px');
            swiper = new Swiper ('.swiper-container', params)

        } else if (ww < 769 && ww > 650) {
            pItem.css('margin', '0 11% 0 -1%');
            pWrap.css('marginLeft', '10%');
            swiper = new Swiper ('.swiper-container', params)
        } 


    });
    $(window).trigger("resize");

 });