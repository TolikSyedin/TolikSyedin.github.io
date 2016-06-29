'use strict'

var data = [
		{
			question: 'Вопрос №1',
			answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
			correctAnswer: 1
		},
		{
			question: 'Вопрос №2',
			answers: ['Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №6'],
			correctAnswer: 5
		},
		{
			question: 'Вопрос №3',
			answers: ['Вариант ответа №7', 'Вариант ответа №8', 'Вариант ответа №9'],
			correctAnswer: 9
		}

]

localStorage.setItem('data', JSON.stringify(data));

var storage = localStorage.getItem('data');

var storage = JSON.parse(storage);

console.log(storage)

var html = $('#html').html();

var tmpl = _.template(html, data);

$('body').append(tmpl);

var answer,
 	score = 0,
	modal = $('#resultModal'),
	head = $('#myModalLabel');


$('#checkButton').click(function() {

	var userAnswer = $('input:checked').map(function(){
		return $(this).attr('id');
	})

	for(var i=0; i<userAnswer.length;i++) {
		if (userAnswer[i] != storage[i].correctAnswer) {
			answer = '<p class="bg-danger"> Ответ на ' + storage[i].question + ' -  неправильный! попробуйте ещё раз</p>';
		} else {
			answer = '<p class="bg-success"> Ответ на ' + storage[i].question + ' - правильный!</p>';
			score++;
		}

	modal.append(answer);

	}

	if (score < 3) {
		head.html('<p> Тест не сдан! </p>')
	} else {
		head.html('<p> Поздравляем! Вы успешно сдали тест! </p>')
	}

$('#retryBtn').click(function(){
	modal.html('');
	$('input:checked').removeAttr('checked');
	head.html('');
	score = 0;
});
$('button.close').click(function(){
	modal.html('');
	$('input:checked').removeAttr('checked');
	head.html('');
	score = 0;
});
$(document).on('keyup',function(e){
	if(e.keyCode === 27){
	$('body').removeClass('modal-open');
	modal.html('');
	$('input:checked').removeAttr('checked');
	head.html('');
	score = 0;

}});

});

