//Problem 3. Sub-string in text
//    Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//Example:
//The target sub-string is in
//The text is as follows: We are 
//living in an yellow submarine. 
//We don't have anything else. inside the submarine is very tight. So we are drinking all the day. /
//We will move out of it in 5 days
//The result is: 9

var substr,
	text, i,
	len, arr,
	res;
substr 	= 'a';
text 	= ' We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
arr = text.split(substr);
len = arr.length;
res = len-1;
console.log(arr);
console.log(res);