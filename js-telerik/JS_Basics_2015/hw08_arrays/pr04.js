var arr,
checker,
mid,
len,
newArr,
i,
j,
k,
m,
controlArr;
arr = [3, 2, 3, 4, 2, 2, 4];
lent = arr.length;
newArr = new Array();
controlArr = new Array();
mid = 0;
for (i=1; i < lent; i++) {
	newArr[i-1] = arr[i-1];
	if (arr[i] > arr[i-1]) {
		newArr[i] = arr[i];
	} else {
		newArr = newArr.filter( Boolean );
		len = newArr.length;
		if (len>mid) {
			mid = len;
			controlArr = controlArr.filter( Boolean );
			for (j = 0; j <len ; j++) {
				controlArr[j] = newArr[j];
			} 	
			for (j = 0; j <len ; j++) {
				newArr.pop();
			} 
		} else {

			for (j = 0; j <len ; j++) {
				newArr.pop();
			} 
		}
		}
}

lenti = controlArr.length;
for (m = 0; m < lenti; m++) {
	console.log(controlArr[m]);
}
	console.log(lenti);
	
