function quadFunction() {
var a = document.getElementById('input1').value;
var b = document.getElementById('input2').value;
var c = document.getElementById('input3').value;

var d = b*b - 4*a*c;

if (d < 0) {
	document.getElementById("result").innerHTML = "no real roots";
} 
else if (d === 0) {
	var x = -b/(2*a);
	document.getElementById("result").innerHTML = "x = " + x;

}
else {
	var a2 = 2*a;
	var x1 = (-b + Math.sqrt(d))/(2*a);
	var x2 = (-b - Math.sqrt(d))/(2*a);
	document.getElementById("result").innerHTML = "x1 = " + x1 + " and " + "x2 = " + x2;
}
}