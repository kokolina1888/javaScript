
//    Write a function that returns the index of the 
//first element in array that is larger than its neighbours or -1,
// if there’s no such element.
//    Use the function from the previous exercise.
function firstLarger(arr){

	var len, k,
	flag;
	flag = 0;

	len = arr.length;

	for (k = 0; k < len; k++) {
		flag = checkNeighbours(arr, k);
		if (flag == 1) {
			console.log(k + '-' +arr[k]);
			break;
		} 
	}
if (flag != 1) {
	console.log(flag);
}
	function checkNeighbours(arr, k){
		if (k < len) {
			if (k !== 0 && k !== (len-1)) {
				if (arr[k] > arr[k-1] && arr[k] > arr[k+1]) {
					return 1;
				} else {
					return -1;
				}
			} else {
				return -1;
			}
		}
	}
}

num = [12, 11, 10, 9, 8, 97, 6];

firstLarger(num);

