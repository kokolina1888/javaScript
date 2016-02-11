//Write a JavaScript function that reverses a string and returns it.
var str;
str1 = 'string';
function strReverse(str){
	var strRev = [],
	len, i,
	myVar;

len = str.length;
for (var i=(len-1); i >=0 ; i--) {
	strRev[len-1-i] = str[i];
}
myVar = strRev.join('');
console.log(myVar);
}
str1 = 'property';

strReverse(str1);