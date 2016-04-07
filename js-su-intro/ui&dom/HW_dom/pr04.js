//Create a JavaScript object named HTMLGenerator. 
//The object has a couple of functions attached to it:
//•	createParagraph(id, text) -> creates a <p></p> HTML element 
//that is attached to the id of the element, 
//passed as an argument. 
//The paragraph’s text is passed as an argument of the function as well.
//•	createDiv(id, class)  -> creates a <div></div> 
//HTML element that is attached to the id of the element, passed as an argument. The div’s class is passed as an argument of the function as well.
//•	createLink(id, text, url) -> creates a <a></a> HTML element 
//that is attached to the id of the element, passed as an argument. 
//The link’s text and url are passed as arguments of the function as well.
/*function HTMLGenerator(id, text) {

	this.createParagraph = function (id, text) {        
		var p = document.createElement('p');
		p.innerHTML = text;
		var el = document.getElementById(id);
		el.appendChild(p);
	};
	this.createDiv = function (id, cl) {        
		var div = document.createElement('div');
		div.className = cl;
		var el = document.getElementById(id);
		el.appendChild(div);
	};
    //•	createLink(id, text, url) -> creates a <a></a> HTML element that is 
    //attached to the id of the element, passed as an argument. 
    //The link’s text and url are passed as arguments of the function as well.
    this.createLink = function (id, text, url) {        
    	var a = document.createElement('a');
    	a.href = url;
    	a.innerHTML = text;
    	var el = document.getElementById(id);
    	el.appendChild(a);
    };
}
var html = new HTMLGenerator('wrapper', 'Soft Uni');
html.createParagraph('wrapper', 'Soft Uni');
html.createDiv('wrapper', 'section');
html.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');*/
var HTMLGenerator = {};
HTMLGenerator.createParagraph = function (id, text) {        
		var p = document.createElement('p');
		p.innerHTML = text;
		var el = document.getElementById(id);
		el.appendChild(p);
	};
HTMLGenerator.createParagraph('wrapper', 'Soft Uni');
HTMLGenerator.createDiv = function (id, cl) {        
		var div = document.createElement('div');
		div.className = cl;
		var el = document.getElementById(id);
		el.appendChild(div);
	};
HTMLGenerator.createDiv('wrapper', 'section');
HTMLGenerator.createLink = function (id, text, url) {        
    	var a = document.createElement('a');
    	a.href = url;
    	a.innerHTML = text;
    	var el = document.getElementById(id);
    	el.appendChild(a);
    };
HTMLGenerator.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');