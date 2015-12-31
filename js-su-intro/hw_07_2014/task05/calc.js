function calcExpression() {
	var expr = document.getElementById('expr').value;
	var result = eval(expr);
	document.getElementById('result').innerHTML = result;

} //end of function