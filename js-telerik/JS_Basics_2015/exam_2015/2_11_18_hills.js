function solve(params) {
	var s = params[0].split(" ").map(Number),
	min = [],
	sum = [],
	sumIndex = 0,
	maxSum = 0,
	minIndex = 0,
	flag = 0,
	check = 0,
	count = 0,
	countMax = 0,
	len, len1, len3,
	i, j, k;

	len = s.length;

	for(i = 1; i < len; i++) {
		if(s[i-1] > s[i]){
			flag = 0;
		} else {
			flag = 1;
		}
		

		if (flag !== check) {
			min[minIndex] = count;
		
			check = flag;
			minIndex++;
			count = 1;			
		} else {
			count++;
		}
	}
	min[minIndex] = count;

	len1 = min.length;

	for(j = 0; j < len1; j+=2) {

		sum[sumIndex] = min[j] + min[j+1];
		sumIndex++;
	}
	len3 = sum.length;
	for (k = 0; k < len3; k++) {
		if(sum[k]>maxSum){
			maxSum = sum[k];
		}
	}
	console.log(maxSum);	
}

var tests = ['10 1 2 3 4 5 4 3 2 1 10'];
solve(tests);
