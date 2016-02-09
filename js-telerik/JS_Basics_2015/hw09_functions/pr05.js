
// Write a function that counts how many times given number appears in given array.
 //Write a test function to check if the function is working correctly.
 function countElements(arr){
 	var things = [],
 	flag, mid,
 	len, i, len1,
 	checker, j;

 	len = arr.length;
 	mid = 0;
 	flag = 1;
 	checker = 0;

 	for (i = 1; i < len; i++) {
 		if (arr[i] === arr[i-1]) {
 			flag++;
 			console.log(flag);
 		} else {
 			if (flag > mid) {
 				checker = arr[i-1];
 				mid = flag;
 			}
 			flag = 1;
 		}
 	}

	//if te longest is the last sequense


	/*console.log(things);
	console.log(' '+len);
	console.log(' '+mid);
	console.log(' '+checker);
	console.log(' flag'+flag);
	console.log(' arr'+arr[len-1]);*/

	if(mid < flag) {
		console.log(' flag '+flag);
		console.log(' arr '+arr[len-1]);
	} else {
		console.log(' '+mid);
		console.log(' '+checker);
	}
}
var num = [2, 2, 1, 3, 3, 3, 3, 3, 1, 1, 1];
countElements(num);