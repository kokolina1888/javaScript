function solve(params) {
    var n = parseInt(params[0]),
          k = parseInt(params[1]),
        numbers = params[2].split(" ").map(Number),
        min, max, res = [], res1,    
        i, m;

       for(i = 0; i <= (n-k); i++){
    	min = numbers[i];
    	max = numbers[i];  

    	for(m = i; m < k + i; m++){
    		if(numbers[m] < min){
    			min = numbers[m];
    		}
    		if(numbers[m]>max){
    			max = numbers[m];
    		}
      	}
      	res[i] = min + max;
     }
     res1 = res.join();
    console.log(res1);    
}
var tests = ['8','4', '1 8 8 4 2 9 8 11'];
solve(tests);
