var number,
limit;
//random number from 1 to 100

limit = Math.random()*100+1;

for (number = 0; number <= limit; number++) {
	if (number%3 !==0) {
		if (number%7!==0) {
			console.log(number);
		} 
	}
}
