var startPauseButton = document.getElementById('startPause');
startPauseButton.addEventListener('click', startPause);


var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);


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
	document.getElementById('output').innerHTML = '00:00:00<span>0</span>';
}



function increment() {
	if (running == 1) {
		setTimeout(function(){
			time++;

			var hours = Math.floor(time/100/60/60 % 24); // 1 day = 360000*24
			var mins = Math.floor(time/100/60 % 60); // 360000 = 1 hour
			var secs = Math.floor(time/100 % 60); // 6000 = 1 min
			var tenth = time % 100; // 100 = 1 sec/

			if (hours < 10) {
				hours = '0' + hours;
			}

			if (mins < 10) {
				mins = '0' + mins;
			}

			if (secs < 10){
				secs = '0' + secs;
			} 

			if (tenth < 10) {
				tenth = '0' + tenth;
			}
			
			document.getElementById('output').innerHTML = (hours + ':' + mins + ':' + secs + '<span>' + tenth + '</span>');
			increment();

		}, 1) 
	}

}