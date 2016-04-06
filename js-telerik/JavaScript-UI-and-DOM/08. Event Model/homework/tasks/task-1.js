/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
	return function (selector) {
		var sel = selector, element, btn, content, btnLen,
		i, contentLen, flagVis = true, j, l, m;
		element = document.getElementById(selector);
		btn = element.getElementsByClassName("button");
		content = element.getElementsByClassName('content');
		btnLen = btn.length;
		contentLen = content.length;
		var children = element.children;
		var childrenLen = children.length;
		
		if (typeof(sel)!== 'string') {
			throw new Error();
		}
		else if (element === null){
			throw new Error();   	
		}
		else {

			for(i = 0; i<btnLen; i+=1){
				btn[i].innerHTML = 'hide';
			}

			element.addEventListener("click", function (e) {
				if (!e) e = window.event;
				var target = e.target;
    //  console.log(target);
    //target.previousSibling;
    l = 0;

    while( (target = target.previousElementSibling) !== null ) {
    	if(target.className === 'button')
    	{
    		l++;
    	}
    }
    target = e.target;


    m = 0;
    if(l > 0){
    	target = target.previousElementSibling;
    	while( (target = target.previousElementSibling) !== null ) {
    		if(target.className === 'content')
    		{
    			m++;
    		}
    	}
    	target = e.target;
    }
    


    if (m > 0) {

    	if(flagVis === true){
    		content[0].style.display = 'none';
    		target.innerHTML = 'show';
    		flagVis = false;

    	}
    	else {
    		content[0].style.display = 'block';
    		target.innerHTML = 'hide';
    		flagVis = true;
    	}
    }


      //console.log(target.previousElementSibling.className);


  }, false);


		};
	}
}

module.exports = solve;