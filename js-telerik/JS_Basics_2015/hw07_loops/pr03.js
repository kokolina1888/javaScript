var numbers,
	len, 
	min,
	max,
	i;

	numbers = [1022, 12, 1028, 33, 610, 15, 29];
	len = numbers.length;
	min = numbers[0];
	max = numbers[len-1];

	for (i = 0; i <= len; i++) {
		if (numbers[i] < min) {
			min = numbers[i];
		} else if(numbers[i] > max) {
			max = numbers[i];
		}
	}
	console.log('min =' + min);
	console.log('max =' + max);



