function areaFunction() {
	 var radius = document.getElementById('input1').value;
	 var preArea = Math.pow(radius, 2);
	 var area = Math.PI*preArea;

	 document.getElementById("result").innerHTML = "area : " + area;

}