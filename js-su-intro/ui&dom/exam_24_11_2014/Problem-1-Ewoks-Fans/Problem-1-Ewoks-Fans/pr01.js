// People born on 25.05.1973 and after are fans of Ewoks and these
// before that – haters. 
// The biggest hater is the oldest person born before 25.05.1973. 
// The biggest fan is the youngest person born after 25.05.1973. 
// Find the biggest fan and hater of Ewoks. 
// Exclude people born on or before 01.01.1900 and those born 
// on and after 01.01.2015, because most of them are either dead or not born yet.
// Print at the console 
// when the biggest fan and the biggest hater 
// of Ewoks were born. Use the method "date.toDateString()" 
// to format the date at the output. 
// If there is only one fan or hater, 
// print out the date of his birth. 
// If there are no people between 01.01.1900 and 01.01.2015 print “No result”. 
function solve(args){
	var dates = args, len, i, dayE = 25, monthE = 5, yearE = 1973, man, haters = [], fans = [];
	len = dates.length;
	var controlDate = new Date(1973, 04, 25);
	var excludeFirstDate = new Date(1900, 01, 01);
	var excludeSecondDate = new Date(2014, 12, 01);

	for(i = 0; i < len; i+=1){
		dates[i] = dates[i].split('.');
	}
	for(var j = 0; j < len; j+= 1){
		var currentDate = new Date(dates[j][2], dates[j][1]-1, dates[j][0]);
		if (currentDate>=controlDate && currentDate<=excludeSecondDate)
		{
			man = 'fan';
			fans.push(j);
		}
		else if(currentDate<=controlDate && currentDate>=excludeFirstDate)
		{
			

			man = 'hater';
			haters.push(j);
		}
	}
	
	var hatersLen = haters.length;
	var fanLen = fans.length;
	if(hatersLen === 0 && fanLen === 0){
		console.log('No result');
	}
	if(fanLen === 1){
		var onlyFanDate = new Date(dates[fans[0]][2], dates[fans[0]][1]-1, dates[fans[0]][0])
		console.log('The biggest fan of ewoks was born on '+ onlyFanDate.toDateString());
	}
	else if(fanLen>1){
		var max = 0;
		var biggerFan = new Date(dates[fans[0]][2], dates[fans[0]][1]-1, dates[fans[0]][0]);
		for(var m = 0; m < fanLen; m+=1){
			var currentFanDate = new Date(dates[fans[m]][2], dates[fans[m]][1]-1, dates[fans[m]][0])
			if (currentFanDate>biggerFan) {
				biggerFan = currentFanDate;
				max = m;
			}
		}
		var fanDate = new Date(dates[fans[max]][2], dates[fans[max]][1]-1, dates[fans[max]][0]);
		console.log('The biggest fan of ewoks was born on ' + fanDate.toDateString());	
	}
	if(hatersLen === 1){
		var onlyHaterDate = new Date(dates[haters[0]][2], dates[haters[0]][1]-1, dates[haters[0]][0])
		console.log('The biggest hater of ewoks was born on ' + onlyHaterDate.toDateString());
	}
	else if(hatersLen>1){
		var min = 0;
		var biggerHater = new Date(dates[haters[0]][2], dates[haters[0]][1]-1, dates[haters[0]][0]);
		

		for(var k = 1; k < hatersLen; k+=1){
		var currentDate = new Date(dates[haters[k]][2], dates[haters[k]][1]-1, dates[haters[k]][0]);
	
			if (currentDate<biggerHater) {
				biggerHater = currentDate;
				min = k;
			}
		}

		var date = new Date(dates[haters[min]][2], dates[haters[min]][1]-1, dates[haters[min]][0] );
		console.log('The biggest hater of ewoks was born on ' + date.toDateString());	
	}
	
}
test = [
'22.02.1975', '11.04.1974', '22.02.1973'];
solve(test);