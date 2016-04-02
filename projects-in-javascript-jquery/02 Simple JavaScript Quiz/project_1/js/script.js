function submitAnswers(){
	var total = 5, score = 0, q1, q2, q3, q4, q5, form, answers = [], result;
	// GET USER INPUT
	q1 = document.forms['quizzForm']['q1'].value;
	q2 = document.forms['quizzForm']['q2'].value;
	q3 = document.forms['quizzForm']['q3'].value;
	q4 = document.forms['quizzForm']['q4'].value;
	q5 = document.forms['quizzForm']["q5"].value;
	
	
//VALIDATION

for(var i = 1; i <= total; i+= 1){
	if(eval('q'+ i)=== null || eval('q'+i) === ''){
		alert('you missed question '+ i);
		return false;
	}
}
//SET CORRECT ANSWERS

answers = ['b', 'b', 'b', 'b', 'b'];

//CHECK ANSWERS

for(var j = 1; j <= total; j+=1){
	if(eval('q'+ j)===answers[j-1]){
		score+=1;
	}
}
// console.log(score);
//DISPLAY RESULTS
//alert(score);

document.getElementById('results').innerHTML = '<h3>you scored <span>'+score+'</span> out of <span> '+total+' </span></h3>';
return false;


}