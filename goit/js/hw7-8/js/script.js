// TABS // 

$('.tab-links a').on('click', function(e){
	var $currentAttrValue = $(this).attr('rel');
	$(this).parent('li').addClass('active').siblings().removeClass('active');
	$('.tab-content ' + $currentAttrValue).fadeIn(1000).siblings().removeClass('active').hide();
});

//  FORMS // 

$('#help').on('click', function(){
	$('.helpmsg').toggleClass('show');
});

$('.string').hover(function(){
	$(this).find('.helpmsg').addClass('show')},
	function(){
	$(this).find('.helpmsg').removeClass('show')	
});