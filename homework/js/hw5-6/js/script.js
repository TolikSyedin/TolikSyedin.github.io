var time = 0;
var running = 0; 

function startPause(){
	if (running == 0) {
		running = 1;
		increment();
		document.getElementById('startPause').innerHTML = 'pause';
	} else {
		running = 0;
		document.getElementById('startPause').innerHTML = 'resume';

	}
}


function reset() {
	running = 0;
	time = 0;
	document.getElementById('startPause').innerHTML = 'start';
	document.getElementById('output').innerHTML = '00:00:00:0';
}



function increment() {
	if (running == 1) {
		setTimeout(function(){
			time++;
			var mins = Math.floor(time/10/60);
			var secs = Math.floor(time/10 % 60);
			var hours = Math.floor(time/10/60/60);
			var tenth = (time);

			if (mins < 10) {
				mins = '0' + mins;
			}

			if (secs < 10){
				secs = '0' + secs;
			}
			
			document.getElementById('output').innerHTML = ('0'+hours + ':' + mins + ':' + secs + ':' + tenth);
			increment();

		}, 100)
	}

}









// var sec = document.querySelector('.sec');
// sec.innerHTML = '<p>00</p><span>0</span>';

// var min = document.querySelector('.min');
// min.innerHTML = '<p>00</p>';

// var hour = document.querySelector('.hour');
// hour.innerHTML = '<p>00</p>'



// function startTimer (){
// 	setInterval(counter, 1);
// }

// var i = 0;

// function counter() {


// 	if (i < 1000) {
// 	var counter = document.querySelector('.sec span');
// 	counter.innerHTML = i;
// 	i++;
// 	// console.log(number);		
// 	} else if (i==1000) {

// 	}

// }

// var start = document.querySelector('a.pure-button');
// start.addEventListener('click', startTimer);
// console.log(start);