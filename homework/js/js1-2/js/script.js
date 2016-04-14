// function pow (a, b) {
// 	var result;
// 	result = Math.pow(a, b);
// 	console.log('result = ', result);
// }

// pow(prompt('Enter base number'), prompt('Enter exponent number') );


var names  = [];


for (var i = 0; i < 5; i++) {
	names.push(prompt('enter your name'));
	console.log(names)
}

var userName = prompt('Enter username please');

if (userName == names[0]) {
	alert('OK!')

}