function createParagraph(arg1, arg2){
	var el 		= document.getElementById(arg1);
	var elNew	= document.createElement('p');
	var text 	=  arg2;

	elNew.innerHTML = text;
	el.appendChild(elNew);
}
createParagraph('wrapper', 'wrapper');
createParagraph('wrap', 'wrap');