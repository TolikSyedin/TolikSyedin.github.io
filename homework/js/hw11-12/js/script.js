$('.slidewrapper').slider();
$('.sliderLeftControl').slideLeft();
$('.sliderRightControl').slideRight();

var div = $('.wrapper')
console.log(div)

var data = {
	name: 'Анатолий Михайлович Съедин',
	img: 'img/photo.jpg',
	employment: 'Эксперт по недвижимости в АН Park Lane',
	motivation: '',
	reason: ['Это перспективно', 'Возможность самореализоваться', 'Оплата в у.е.', 'Люблю творить и создавать'],
	contactNumber: '+380638998160',
	vkAccount: 'http:/www.vk.com/mightybeatz',
	feedback: 'Люблю - музыку и природу, хочу путешествовать и творить. Очень целеустремленный'
}

html = $('#html').html();

content = tmpl(html, data);

div.append(content);

