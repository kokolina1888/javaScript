var btn = document.getElementById('btn');
btn.onclick = function(){
	var div = document.getElementById('text');
	div.innerHTML = '';

	var input = document.getElementById('info').value;

	var t = document.createTextNode(input);
	div.appendChild(t);
	if(input.match(/@([a-z]+\.([a-z]){2,})/)){
		div.setAttribute('class', 'green');
	}
	else{
		div.setAttribute('class', 'red');

		
	}
	
	
};