//You are given an HTML file holding a table of elements 
//and a button titled "Hide Odd Rows". 
//Write JavaScript code hideOddRows.js 
//that attaches to the button click event and 
//hides the odd rows of the table when clicked.
function hideOddRows(){
	var tr, trLen, i;
	tr = document.getElementsByTagName('tr');
	trLen = tr.length;

	for(i=0; i<trLen; i+=1){
		if ((i+1)%2!==0) {
		tr[i].style.display = "none";
		}
	}
	console.log(tr);
}