/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(arg) {
		var arr = arg, flag = 0, sumArr = 0, 
	len, i;
	if (typeof arr === 'undefined'){
		throw new Error();
	} else if (arr.length === 0){
		return null;
	} else if (!Array.isArray(arr)) {
		throw new Error();
	} else {
		for (i = 0; len=arr.length, i < len; i++) {
			arr[i] = +arr[i];
		}		
	}
	for (var j = 0; j < len; j++) {
		if (isNaN(arr[j])) {				
				throw new Error();
			} else {
			sumArr+= arr[j];
			}
	}
	if (sumArr!== 'undefined') {
		return sumArr;
	}

}

module.exports = sum;