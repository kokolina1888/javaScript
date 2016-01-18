//Problem 1. JavaScript literals
//Assign all the possible JavaScript literals to different variables.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

//hoisting

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

console.log(res);

