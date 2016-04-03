
		
		document.getElementById("btn1").addEventListener("click", timer);
		document.getElementById("btn2").addEventListener("click", stop);

		var yearInput;
		var monthInput;
		var dateInput;
		var then;
		var now;
		var millisecondsLeft;
		var secondsLeft;
		var minutesLeft;
		var hoursLeft;
		var daysLeft;
		var weeksLeft;
		var intervalId;
		

		function counter () {
			
			 yearInput = document.getElementById("year").value;
			 monthInput = document.getElementById("month").value;
			 dateInput = document.getElementById("date").value;
			 now = new Date();
			 calcFunction(yearInput, monthInput, dateInput);
			 // var then = new Date (yearInput + "/" + monthInput + "/" + dateInput);
			 
			 diff = then.getTime() - now.getTime();
			 
			 millisecondsLeft = diff % 1000; 
			 secondsLeft = Math.round(diff / 1000) % 60;
			 minutesLeft = Math.round(diff / 1000 / 60) % 60;
			 hoursLeft = Math.round(diff / 1000 / 60 / 60) % 24;
			 daysLeft = Math.round(diff / 1000 / 60 / 60 / 24 % 7);
			 weeksLeft = Math.round(diff / 1000 / 60 / 60 / 24 / 7);

			 document.getElementById("msecond").innerHTML = millisecondsLeft;
			 document.getElementById("second").innerHTML = secondsLeft;
			 document.getElementById("minute").innerHTML = minutesLeft;
			 document.getElementById("hour").innerHTML = hoursLeft;
			 document.getElementById("day").innerHTML = daysLeft;
			 document.getElementById("week").innerHTML = weeksLeft

			 			  
		}
		
		function calcFunction (x,y,z) {
			 then = new Date (x + "/" + y + "/" + z);
			 return then
		}

		 function timer() { intervalId = setInterval(counter, 1); } 

		function stop() { clearInterval(intervalId); }
		
		
		
		

		
		
	