console.log(document.body);


var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);


var header = document.createElement('h1');
header.innerHTML = 'Тест по программированию';
wrapper.appendChild(header);



// list // 



var list = document.createElement('ol')
list.classList.add('list');
wrapper.appendChild(list);


for (var i = 1; i <= 3; i++) {
	var question = document.createElement('li');
	question.classList.add('questions');
	list.insertBefore(question, list.children[i])
	question.innerHTML = ('Вопрос номер ' + i);

}


for (var i = 0; i < 3; i++) {
		var answerList = document.createElement('ul');
		answerList.classList.add('answers')
		list.children[i].appendChild(answerList);

}


var answers = document.querySelector('.answers')

for (var i = 0; i < 3; i++)	 {
	var asd = document.createElement('li');
	Answers.appendChild(asd)
}

for (i=0; i<page.question.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        var h4 = document.createElement('h4');
        h4.innerHTML = page.question[i];
        li.appendChild(h4);
        for (j=0;j<3;j++) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = page.checkboxname[k];
            checkbox.id = page.id[k];
            var p = document.createElement('p');
            var label = document.createElement('label');
            label.htmlFor = page.id[k];
            label.appendChild(document.createTextNode(page.answer[k]));
            li.appendChild(p);
            p.appendChild(checkbox);
            p.appendChild(label);
            k++;
        }
    }


// var question1 = document.createElement('li');
// question1.classList.add('questions');
// question1.setAttribute('id', 'question1');
// list.appendChild(question1);
// question1.innerHTML = ('Вопрос №1');



// var question2 = question1.cloneNode(true);
// question2.setAttribute('id', 'question2');
// question2.innerHTML = ('Вопрос №2');
// list.insertBefore(question2, list.children[1]);


// var question3 = question1.cloneNode(true);
// question3.setAttribute('id', 'question3');
// question3.innerHTML = ('Вопрос №3');
// list.insertBefore(question3, list.children[2]);



// Answers //


// var answerList = document.createElement('ul');
// question1.appendChild(answerList);


// var answerItem1 = document.createElement('li');
// answerItem1.classList.add('answerItems');
// answerList.appendChild(answerItem1);


// var answerItem2 = answerItem1.cloneNode(true);
// answerList.insertBefore(answerItem2, answerList.children[1]);


// var answerItem3 = answerItem1.cloneNode(true);
// answerList.insertBefore(answerItem3, answerList.children[2]);


// p //


// var answer1 = document.createElement('p');
// answer1.classList.add('answers');
// answerItem1.appendChild(answer1);

// var answer2 = answer1.cloneNode(true);
// answerItem2.insertBefore(answer2, answerItem2.children[1]);

// var answer3 = answer1.cloneNode(true);
// answerItem3.insertBefore(answer3, answerItem2.children[2])


// checkbox //


// var checkbox1 = document.createElement('input');
// checkbox1.setAttribute('type', 'checkbox');
// checkbox1.setAttribute('id', 'answer1');
// answer1.appendChild(checkbox1);


// var checkbox2 = checkbox1.cloneNode(true);
// answer2.insertBefore(checkbox2, answer2.children[1]);


// var checkbox3 = checkbox1.cloneNode(true);
// answer3.insertBefore(checkbox3, answer2.children[2]);


// label //


// var label1 = document.createElement('label');
// label1.setAttribute('for', 'answer1');
// answer1.insertBefore(label1, answer1.children[1]);
// label1.innerHTML = ('Вариант ответа №1');

// var label2 = label1.cloneNode(true);
// label2.innerHTML = ('Вариант ответа №2');
// answer2.insertBefore(label2, answer2.children[2])


// var label3 = label1.cloneNode(true);
// label3.innerHTML = ('Вариант ответа №3');
// answer3.insertBefore(label3, answer2.children[3])



console.log(wrapper);
