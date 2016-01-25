var output,
sNumber,
len,
number,
third;

number = 9999799;
output = [];
sNumber = number.toString();
len = sNumber.length;

for (var i = 0; i < len; i += 1) {
	output.push(+sNumber.charAt(i));
}
third = len-3;

if (output[third]===7) 
{
	console.log('is 7');
}
else 
{
	console.log('not 7');
}


