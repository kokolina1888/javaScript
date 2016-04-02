// We convert them to hex: 5, 1E9D, 2, 22; 
//add leading zeros where needed: 0005, 1E9D, 0002, 0022, 
//place 0x before each one and concatenate 
//them with dashes: 0x0005-0x1E9D-0x0002-0x0022. 
// (Note: hex values MUST be uppercase)


function solve(args){
	var str = args[0], strArr=[], len, i, index = 0, 
	flag, newArr = [], arrLen, j, k, hexLen, n, l, result, newHex = [];

	len = str.length;
strArr = str.split('');



for(i=0; i<len; i+=1){
	if (strArr[i]===' ') {
		strArr[i] = ' ';
	}
	else {
	strArr[i] = +strArr[i];
	if(isNaN(strArr[i])){
		strArr[i] = ' ';
	}
	else if (strArr[i]==='number') {
		strArr[i] = strArr[i].toString();
	}
	}
}


flag = strArr.join('');
newArr = flag.split(' ');
newArr = newArr.filter(Boolean);
arrLen = newArr.length;

//(+d).toString(16).toUpperCase();
for(j=0; j<arrLen; j+=1){
	newArr[j] = +newArr[j];
	newArr[j] = newArr[j].toString(16).toUpperCase();
}
for(k = 0; k<arrLen; k+=1){
	hexLen = newArr[k].length;
	newHex[k]='0x';
	if(hexLen < 4) {
		n = 4 - hexLen;
		
		for(l = 0; l < n; l+=1){
			newHex[k]+= '0';
		}
		newHex[k]+=newArr[k];
	}
	else {
		newHex[k]+=newArr[k];
	}

}
result = newHex.join('-');


	return result;
}
test = ['765v 8 92 911 irgk /9987sdae22JKmnv---65535'];
console.log(solve(test));