var num;
function reverse(num){
	var s, 
	str;
	s 	= num.toString();
	str = s.split("").reverse().join("");
	console.log(str);
}
//reverse(256.36);
reverse(123.45);
