//•	each 0 - with the absolute 
//difference of its neighboring numbers
//•	all other even numbers - 
//with the maximum of its neighboring numbers
//•	each 1 - with the sum of 
//its neighboring numbers
//•	all other odd numbers - with the 
//minimum of its neighboring numbers

function solve(params) {
	var nk = params[0].split(" ").map(Number),
	s = params[1].split(" ").map(Number),
	helper = [],
	result = 0,
	len, i, j, l, m;
	len = s.length;

for(l=0; l<nk[1]; l++) { 
//case i = 0
		if (s[0] === 0) {
			helper[0] = Math.abs(s[1] - s[len-1]);
		} else if(s[0] % 2 === 0 && s[0] !== 0 ) {
			if (s[len-1] > s[1]) {
				helper[0] = s[len-1];
			} else {
				helper[0] = s[1];
			}
		} else if (s[0] === 1) {
			helper[0] = s[len-1] + s[1];
		} else if (s[0] % 2 !== 0 && s[0] !== 1 ) {
			if (s[len-1] < s[1]) {
				helper[0] = s[len-1];
			} else {
				helper[0] = s[1];
			}
		}
		
	//case i = len-1

	if (s[len-1] === 0) {
			helper[len-1] = Math.abs(s[len-2] - s[0]);
		} else if(s[len-1] % 2 === 0 && s[len-1] !== 0 ) {
			if (s[len-2] > s[0]) {
				helper[len-1] = s[len-2];
			} else {
				helper[len-1] = s[0];
			}
		} else if (s[len-1] === 1) {
			helper[len-1] = s[len-2] + s[0];
		} else if (s[len-1] % 2 !== 0 && s[len-1] !== 1 ) {
			if (s[len-2] < s[0]) {
				helper[len-1] = s[len-2];
			} else {
				helper[len-1] = s[0];
			}
		}

	for(i = 1; i < len-1; i++){
		if (s[i] === 0) {
			helper[i] = Math.abs(s[i-1] - s[i+1]);
		} else if(s[i] % 2 === 0 && s[i] !== 0 ) {
			if (s[i-1] > s[i+1]) {
				helper[i] = s[i-1];
			} else {
				helper[i] = s[i+1];
			}
		} else if (s[i] === 1) {
			helper[i] = s[i-1] + s[i+1];
		} else if (s[i] % 2 !== 0 && s[i] !== 1 ) {
			if (s[i-1] < s[i+1]) {
				helper[i] = s[i-1];
			} else {
				helper[i] = s[i+1];
			}
		}
		
	}

	for(j = 0; j < len; j++) {
		s[j] = helper[j];
		
	}
	
}

   for(m = 0; m < len; m++) {
		result += s[m];
	}
	console.log(result);
}

var tests = ['10 10', '0 1 2 3 4 5 6 7 8 9'];
solve(tests);


