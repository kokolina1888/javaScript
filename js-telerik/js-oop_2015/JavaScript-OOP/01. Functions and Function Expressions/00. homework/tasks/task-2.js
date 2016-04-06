/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(arg1, arg2) {
	var from = +arg1,
	to = +arg2,
	num, arr=[],
	limit, ind=0, i, j,
	 flag=0;
	num = from;
	

	if (arg2 === undefined || arg1 === undefined) {
		throw new Error();
	} else if(isNaN(from)||isNaN(to)){
		throw new Error();
	}

	if(from === 0){
		num = 1;
	} else { 
		num = from;
	}
	//console.log(num);
	if(num >= 1 && num<=to){
		if (to === 1) {
			arr = [];
			return arr;
		} else if (to === 2) {
			arr[0] = 2;
			
		} 
		if(num>=1 && to>2 && num<to) {
			if(num === 1){
				num=2;
			}
			for(i=num;i<=to;i++){
				console.log(i);
				for(j = 2; j<i; j++ ){
				//console.log(i);
					if(i%j===0){
				flag = 1;
				//console.log(i);						

				//console.log(flag);						
					}//if
				}//for
				if (flag===0) {
					arr[ind]=i;
					ind+=1;

				} else {
					flag=0;
				}
			}//for2
	}//else if
}//if
return arr;
}//fun

	module.exports = findPrimes;
//console.log(findPrimes(258, 262));