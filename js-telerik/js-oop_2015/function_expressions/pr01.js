//Write a function that sums an array of numbers:
//    Numbers must be always of type Number
//    Returns null if the array is empty
//    Throws Error if the parameter is not passed (undefined)
//    Throws if any of the elements is not convertible to Number
function solve(){
function sum(arg) {
	var arr = arg, flag = 0, sumArr = 0, 
	len, i;
	if (typeof arr === 'undefined'){
		return 'Error';
	} else if (arr.length === 0){
		return null;
	} else if (!Array.isArray(arr)) {
		return 'Error';
	} else {
		for (i = 0; len=arr.length, i < len; i++) {
			arr[i] = +arr[i];
		}		
	}
	for (var j = 0; j < len; j++) {
		if (isNaN(arr[j])) {				
				return 'Error';
			} else {
			sumArr+= arr[j];
			}
	}
	if (sumArr!== 'undefined') {
		return sumArr;
	}

}
}
//module.exports = sum;

/*function sumArrayNumbers(arg){
	var arr = arg, flag = 0, sum = 0, 
	len, i;
	if (typeof arr === 'undefined'){
		return 'error';
	} else if (arr.length === 0){
		return null;
	} else if (!Array.isArray(arr)) {
		return 'error';
	} else {
		for (i = 0; len=arr.length, i < len; i++) {
			arr[i] = +arr[i];
		}
		
	}
	for (var j = 0; j < len; j++) {
		if (isNaN(arr[j])) {				
				return 'error';
			} else {
			sum+= arr[j];
			}
	}
	if (sum!== 'undefined') {
		return 'yes';
	}
	
}*/
var test = ["1", "John"];
solve(test);