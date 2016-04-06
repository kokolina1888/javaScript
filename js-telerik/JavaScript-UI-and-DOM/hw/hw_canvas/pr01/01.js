window.onload = function () {
	var theCanvas = document.getElementById("the-canvas");
	var canvasCtx = theCanvas.getContext("2d");

	canvasCtx.lineWidth = "2";
	//canvasCtx.fillStyle = "#521F61";
	canvasCtx.strokeStyle = "#254678";
	canvasCtx.arc(160, 200, 60, 0, 2 * Math.PI);
	canvasCtx.stroke();
	canvasCtx.fillStyle = "#A0C0F5";
	canvasCtx.fill();
	canvasCtx.moveTo(160, 120);
	canvasCtx.strokeStyle = "#254678";
	canvasCtx.arc(160, 120, 80,  0, Math.PI);
	canvasCtx.stroke();
	


	canvasCtx.fillRect(10, 10, 100, 75);
	canvasCtx.strokeRect(10, 10, 100, 75);

	
	canvasCtx.strokeStyle = "#000";
	canvasCtx.beginPath();
	canvasCtx.arc(60, 47, 30, 0, 2 * Math.PI);
	
	
	*/
};