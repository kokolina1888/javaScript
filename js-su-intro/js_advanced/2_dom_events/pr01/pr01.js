var inv = document.getElementById("inv");
var attr = ['org', 'mol', 'address'];


inv.onchange = function onChangeInv() {
var form = document.getElementById('web');

	if(inv.checked){
		var dFrag = document.createDocumentFragment();
		
		for(var i=0; i<3; i+=1){
			var el = document.createElement('input');
			el.setAttribute("type", "text");
			el.setAttribute("name", attr[i]);
			dFrag.appendChild(el);
		}	

		var div = document.createElement('div');
		div.setAttribute('id', 'invoice');
		div.appendChild(dFrag);

		form.insertBefore(div,  form.childNodes[2]);
	}
	else {
		var elRem = document.getElementById("invoice");
		
		form.removeChild(elRem);

	}

};
