var text,
word;
function wordOccur(text, word) {
	var arr = [],
	count = 0,
	len,
	i,
	resCheck,
	resArr;
	

	arr = text.split(" ");
	len = arr.length;

	for (i = 0; i < len; i++) {
		resCheck 	= word.toLowerCase();
		resArr 		= arr[i].toLowerCase();
		if (resCheck == resArr) {
			count++;
		}

	}
	console.log(count);
}

a = "The toLowerCase() method converts a string to lowercase letters. Note: The toLowerCase() method does not change the original string.Tip: Use the toUpperCase() method to convert a string to uppercase letters.";
b = 'Method';
wordOccur(a, b);