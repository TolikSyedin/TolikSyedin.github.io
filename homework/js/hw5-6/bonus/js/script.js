var myTimer = {
	hours: 0,
	mins: 0,
	sec: 0,
	tenth: 0
}

	if (myTimer.hours < 10) {
	myTimer.hours = '0' + myTimer.hours;
	}

	if (myTimer.mins < 10) {
	myTimer.mins = '0' + myTimer.mins;
	}

	if (myTimer.sec < 10) {
		myTimer.sec = '0' + myTimer.sec;
	}


	if (myTimer.tenth < 10){
		myTimer.tenth = '00' + myTimer.tenth
	} else if (myTimer.tenth < 100) {
		myTimer.tenth = '0' + myTimer.tenth;
	}

var running = 0;
var myCounter = myTimer.hours + ':' + myTimer.mins + ':' + myTimer.sec + ':' + myTimer.tenth;
var timer = document.querySelector('.timer');
var counter = document.createElement('p');


timer.appendChild(counter);
counter.innerHTML = (myCounter);



function startStop(){
	if (running == 0) {
		running = 1;
		document.getElementById('startStop').innerHTML = ('stop');
		increment();
	} else {
		running = 0;
		document.getElementById('startStop').innerHTML = ('start');
	}
}


document.getElementById('startStop').addEventListener('click', startStop);


function reset(){
	time = 0;
	running = 0;
	counter.innerHTML = ('00:00:00:000');
}


document.getElementById('reset').addEventListener('click', reset);





function increment() {
	var interval = setInterval(function(){
		if (running == 1) {
			myTimer.tenth = myTimer.tenth % 1000;
			myTimer.tenth++;
			counter.innerHTML = (myTimer.hours + ':' + myTimer.mins + ':' + myTimer.sec + '.' + myTimer.tenth);
			console.log(myTimer.tenth);
			}

			else {
			clearInterval(interval)
			}
	

	}, 1);

}


