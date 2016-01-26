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

arr = [3, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1];
lent = arr.length;
checker = 0;
mid = 0;
newArr = new Array();
controlArr = new Array();

for (i = 1; i < lent; i++) {
	newArr[i-1] = arr[i-1];
	if (arr[i] === arr[i-1]) {
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



