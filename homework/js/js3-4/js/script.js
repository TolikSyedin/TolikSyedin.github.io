

var page = {
	header: 'Тест по программированию',
	questions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
	answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 
	'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 
	'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	submit: 'Проверить мои результаты'

}


var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);


var header = document.createElement('h1')
header.innerHTML = page.header
wrapper.appendChild(header)

var ol = document.createElement('ol')
wrapper.appendChild(ol);

var k = 0; 

for (var i = 0; i < page.questions.length; i++) {
	var li = document.createElement('li')
	ol.appendChild(li);
	li.innerHTML = page.questions[i];
	var ul = document.createElement('ul')
	li.appendChild(ul);

	for(var j = 0; j < 3; j++) {

		var answerItem = document.createElement('li');
		ul.appendChild(answerItem)
		var answers = document.createElement('p');
		answerItem.appendChild(answers)
		var checkbox = document.createElement('input')
		checkbox.type = 'checkbox';
		checkbox.id = k + 1;
		answers.appendChild(checkbox);
		var label = document.createElement('label');
		label.setAttribute('for', k + 1);
		answers.appendChild(label);
		label.innerHTML = page.answers[k];

		k++
		
	}

}

var result = document.createElement('button');
result.innerHTML = page.submit;
wrapper.appendChild(result)