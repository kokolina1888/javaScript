var arr,
len,
i,
j,
k,
l,
mid,
checker,
newArr;

arr = [64, 25, 12, 7, 33,22, 11, 1000, 101, 77];
len = arr.length;
checker = arr[0];
newArr = new Array();

mid = 0;

do {
	leng = arr.length;
	checker = arr[0];
	for (i = 1; i < leng; i++) {
		if (arr[i] < checker) {
			checker = arr[i];
			//console.log(checker+'checker');			
		} 	
	}
	for (j = 0; j < len; j++) {
		if (checker == arr[j]) {
			delete arr[j];
		}
	}
	arr = arr.filter( Boolean );
	newArr[mid] = checker;
	console.log(newArr[mid]);			

	mid++;

} while (mid < len);


