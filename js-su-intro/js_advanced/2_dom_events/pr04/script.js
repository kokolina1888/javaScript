// HTMLGen.createParagraph('wrapper', 'Soft Uni');
// HTMLGen.createDiv('wrapper', 'section');
// HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');

var htmlGen = {
	'createParagraph': function(arg1, arg2){
		var el 		= document.getElementById(arg1);
		var elP	= document.createElement('p');
		var text 	=  arg2;

		elP.innerHTML = text;
		el.appendChild(elP);
	},
	'createDiv': function(arg1, arg2){
		var elDiv 	= document.createElement('div');
		elDiv.setAttribute('id', arg2);
		var el 		= document.getElementById(arg1);
		el.appendChild(elDiv);
	},
	'createLink': function(arg1, arg2, arg3){
		var el 		= document.getElementById(arg1);
		var text 	=  arg2;
		var elLink = document.createElement('a');
		elLink.setAttribute('href', arg3);
		elLink.innerHTML = arg2;
		
		el.appendChild(elLink);
		//el.innerHTML = elLink;

	}

};

htmlGen.createDiv('wrapper', 'section');
htmlGen.createParagraph('section', 'Soft Uni');
htmlGen.createLink('section', 'C# basics book', 'http://www.introprogramming.info/');