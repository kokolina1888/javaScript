function solve(params) {
	var s = +params[0],
	c1 = +params[1], 
	c2 = +params[2], 
	c3 = +params[3],
	i, j, k, all,
	answer = 0;

	for(i = 0; i <= s/c1; i+=1){
		for(j = 0; j<= s/c2; j++){
			for(k = 0; k<=s/c3; k++){
				all = i*c1 + j*c2+k*c3;
				if(all>answer && all<=s){
					
					answer = all;
					}
			}			
		}
	}
	return answer;
}

var tests = [['110'],['13'],['15'], ['17']];
console.log(solve(tests));