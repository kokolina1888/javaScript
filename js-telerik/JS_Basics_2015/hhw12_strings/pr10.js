//Problem 10. Find palindromes
//Write a program that extracts from 
//a given text all palindromes, e.g. 
//"ABBA", "lamal", "exe".

var newArr = [],
pallindrome = [],
text, i, j,
resArr, len, 
check,
lenHelp,
flag;

text = 'ABBA exe aa a ab iko lamal';
resArr = [];
resArr = text.split(' ');
len = resArr.length;
check = 0;
flag = 0;

for(i = 0; i < len; i++) {
	newArr = resArr[i].split('');

	lenHelp = newArr.length;
	if(lenHelp > 1){
	var h = Math.round(lenHelp/2);
	
	for(j = 0; j < h; j++) {	

		if(newArr[j] === newArr[lenHelp-1-j]){
			check = 1;

		} else {
			check = 0;
			break;
		}

	}
	if (check === 1) {
		pallindrome[flag] = resArr[i];
		flag++;
	}
}
}
console.log(pallindrome);