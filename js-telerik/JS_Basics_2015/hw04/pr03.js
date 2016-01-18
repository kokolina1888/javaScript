//Try typeof on all variables you created.

var coffees,
	x,
	y,
	z,
	m,
	re,
	str,
	res;
//array
coffees = ["French Roast", "Colombian", "Kona"];
//Boolean
x = false;

//Integers

y = 100;

//Floating-point literals

z = 1.25;

//Object literals

m = {};

//RegExp literals

re = /ab+c/;

//String literals

str = "string";

res = coffees +'/'+ x +'/'+ y + '/' + z +'/' + m +'/' + re +'/' + str;
console.log(typeof str);
console.log(typeof re);
console.log(typeof m);
console.log(typeof z);
console.log(typeof coffees);



