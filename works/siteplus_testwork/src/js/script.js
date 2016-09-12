$(document).ready(function () {
	    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        loopedSlides : 20,
		autoHeight: true,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + '0' +(index + 1) + '</span>';
        },
        onSlideChangeStart: function(swiper){
			var slide = swiper.slides;
			var index = swiper.snapIndex
			console.log(index)
			index++;
			$('.projects__desc').fadeOut(100);
			$('#desc'+ index).delay(300).fadeIn(100)
		},

    });
});
// var swiper = new Swiper('.swiper-container', {
//   // Default parameters
//   slidesPerView: 4,
//   spaceBetween: 40,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is <= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetweenSlides: 10
//     },
//     // when window width is <= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetweenSlides: 20
//     },
//     // when window width is <= 640px
//     640: {
//       slidesPerView: 3,
//       spaceBetweenSlides: 30
//     }
//   }
// })