function checkNeighbours(arr, k){
	var len;

	len = arr.length;
if (k < len) {
	if (k !== 0 && k !== (len-1)) {
		if (arr[k] > arr[k-1] && arr[k] > arr[k+1]) {
			console.log('larger');
		} else { 

			console.log('is not larger than both its neighbours');
		}
	} else {
		console.log('no two neighbours to compare with');
	}
} else {
	console.log('there is no element with index ' + k + ' in the array');
}

}

var arr = [],
	k;

	arr = [1, 2, 3, 8, 1, 9, 3, 10, 12];
	k = 8;

	checkNeighbours(arr, k);