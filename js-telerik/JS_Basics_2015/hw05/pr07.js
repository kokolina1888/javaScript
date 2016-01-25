var number,
	maxDiv,
	i,
	check;

	number = 10;
	check = 0;

if (number%2===0) {
	maxDiv = number/2;
} else {
	maxDiv = (number - 1)/2;
}

for (i = 2; i <= maxDiv; i++) {
	if (number%i===0 && i !== number) {
		check ++;
	} 
}
if (check >= 1) {
	console.log(true);
} else {
	console.log(false);
}