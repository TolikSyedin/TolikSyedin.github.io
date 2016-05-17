// TABS // 

$('.tab-links a').on('click', function(e){
	var $currentAttrValue = $(this).attr('rel');
	$(this).parent('li').addClass('active').siblings().removeClass('active');
	$('.tab-content ' + $currentAttrValue).fadeIn(1000).siblings().removeClass('active').hide();
});

//  FORMS // 

$('#help').on('click', function(){
	$('.helpmsg').css('display', 'inline-block');
});


$('#firstname').on('mouseenter', function(){
	$('#firstnamehelp').css('display', 'inline-block');
});
$('#firstname').on('mouseleave', function(){
	$('#firstnamehelp').css('display', 'none')
});


$('#lastname').on('mouseenter', function(){
	$('#lastnamehelp').css('display', 'inline-block');
});
$('#lastname').on('mouseleave', function(){
	$('#lastnamehelp').css('display', 'none');
});


$('#email').on('mouseenter', function(){
	$('#emailhelp').css('display', 'inline-block')
});
$('#email').on('mouseleave', function(){
	$('#emailhelp').css('display', 'none')
});