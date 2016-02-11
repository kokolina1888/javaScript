//Problem 2. Correct brackets
//Write a JavaScript function to check
// if in a given expression the brackets 
//are put correctly.
//Example of correct expression: 
//((a+b)/5-d). Example of incorrect expression:
//(a+b)).
var str1,
len, i,
count, flag;
str1 = ' ((((a+b)/5-d)';
len = str1.length;
count = 0;
flag = 0;

function checkBrackets(str){
	for (var i = 0; i < len; i++) {
		if(str[i] === '('){
			count++;
		} else if (str[i] === ')') {
			flag++;
		}
	}

	if (count === flag) {
		console.log('correct brackets');
	} else {
		console.log('incorrect backets');
	}
}

checkBrackets(str1);

