function pow (a, b) {
	var result;
	result = Math.pow(a, b);
	console.log('result = ', result);
}

pow(prompt('Enter base number'), prompt('Enter exponent number') );


var names  = [];


for (var i = 0; i < 5; i++) {
	names.push(prompt('enter your name'));
	console.log(names)
}


var userName = prompt('Enter username please');
console.log('userName', userName)


var rightName = false;

for (var i = 0; i < names.length; i++) {

	var nameItem = names[i];
	console.log('nameItem = ', nameItem);

	if (nameItem == userName) {
		var rightName = true;
		alert('Congratulations ' + userName + '! Login succesfull')
		break
	}
}


if (!rightName) {
	alert('Error! No user found!')
}