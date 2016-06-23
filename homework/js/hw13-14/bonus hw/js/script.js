'use strict'
var data = [
	{
		question: 'Вопрос №1',
		answers: [
			{
				text: 'Вариант ответа №1',
				id: 1,
				correct: true
			},
			{
				text: 'Вариант ответа №2',
				id: 2,
				correct: false
			},
			{
				text: 'Вариант ответа №3',
				id: 3,
				correct: true
			}
		]
	},
	
	{
		question: 'Вопрос №2',
		answers: [
			{
				text: 'Вариант ответа №4',
				id: 4,
				correct: false
			},
			{
				text: 'Вариант ответа №5',
				id: 5,
				correct: false
			},
			{
				text: 'Вариант ответа №6',
				id: 6,
				correct: true
			}
		]
	},

	{
		question: 'Вопрос №3',
		answers: [
			{
				text: 'Вариант ответа №7',
				id: 7,
				correct: true
			},
			{
				text: 'Вариант ответа №8',
				id: 8,
				correct: true
			},
			{
				text: 'Вариант ответа №9',
				id: 9,
				correct: false
			}
		]
	}
]

localStorage.setItem('data', JSON.stringify(data));
var loSt = JSON.parse(localStorage.getItem('data'));

var html = $('#template').html();

var temp = _.template(html, data);

$('body').append(temp);

var testSuccessful = true,
	userAnswers = [],
	allAnswers = [],
	correctAnswers = [],
	score = 0;
	
	
// Массив всех доступных ответов

	for(var i = 0; i < data.length; i++) {
		allAnswers = allAnswers.concat(data[i].answers);
	}
	console.log('allAnswers', allAnswers)

// Массив верных ответов

	for(var i = 0; i < allAnswers.length; i++) {
		if(allAnswers[i].correct) {
			correctAnswers.push(allAnswers[i].id)			
		}
	}
	console.log('correctAnswers', correctAnswers)

$('#checkButton').on('click', function(){
// Массив отмеченных пользователем ответов
	userAnswers = $('input:checked').map(function(){
		return $(this).attr('id')
	})

	console.log('userAnswers', userAnswers)




// Проверка результата на правильность


	for (var i = 0; i < userAnswers.length; i++){
		
		if (correctAnswers.indexOf(Number(userAnswers[i])) == -1) {
			console.log('nogood');
			testSuccessful = false;
		} else { 
			console.log('ok')
			score++
		}

	}	

	console.log(score);

// Проверка результатов на количество ответов

	if (score != correctAnswers.length){
		testSuccessful = false;
	} 

// Вывод результата в модальное окно 
	console.log(testSuccessful)
	if(testSuccessful){
		$('#resultModal').html('<p class="bg-success">Test passed!<p>')
	} else {
		$('#resultModal').html('<p class="bg-danger">Test NOT passed!<p>')

	}
});

$('#retryBtn').click(function(){
	score = 0;
	console.log(score)
	testSuccessful = true;

})