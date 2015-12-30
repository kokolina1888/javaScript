function volumeFunction() {
	var r = document.getElementById('input1').value;
	var h = document.getElementById('input2').value;
	var volume = Math.PI*Math.pow(r, 2)*h;
var volumeRounded = Math.round(volume*1000)/1000;
	document.getElementById("result").innerHTML = volumeRounded;
}