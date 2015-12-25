	var time = new Date();
	var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][time.getDay()];
	var monthDay = time.getDate();
	var month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][time.getMonth()];
	var year = time.getFullYear();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();

	document.getElementById("date").innerHTML = day + ", " + monthDay + " " + month + " " + year + " " + hour + " : " + min + " : " + sec + " GMT";
