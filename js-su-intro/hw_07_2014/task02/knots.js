function knotsFunction() {
	var km = document.getElementById('input1').value;
	var knots = km/1.852;
var knotsRounded = Math.round(knots*100)/100;
	document.getElementById("result").innerHTML = knotsRounded;
}