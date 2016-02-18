function Solve(input) {
var result = 1;

input = input.map(Number);

for(var i=2; i<input.length; i++){
	if(input[i-1] > input[i]){
		result++;
	}
}

	return result;
}

var input = ['7', 1, 1, 2, 3, 4, 4, 0, 1];
console.log(Solve(input));