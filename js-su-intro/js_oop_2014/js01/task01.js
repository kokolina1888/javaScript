/*Create a function with no parameters. Perform the following operations:
•	The function should print the number of its arguments and each of the arguments' type. 
o	Call the function with different number and type of arguments.
•	The function should print the this object. Compare the results when calling the function from:
o	Global scope
o	Function scope
o	Over the object
o	Use call and apply to call the function with parameters and without parameters*/
function info(){
	var len, i;
	len = arguments.length;
	console.log(len);
	for(i = 0; i<len; i+=1){
	console.log(typeof(arguments[i]));

	}
}
info(2, undefined);
	

function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var i = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer

// global variable for demonstration​
	        var avgScore = "global avgScore";
	​
	        //global function​
	        function avg (arrayOfScores) {
	            // Add all the scores and return the total​
	            var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
	                return prev + cur;
	            });
	​
	            // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply​
	            this.avgScore = sumOfScores / arrayOfScores.length;
	        }
	​
	        var gameController = {
	            scores  :[20, 34, 55, 46, 77],
	            avgScore:null​
	        };
	​
	        // If we execute the avg function thus, "this" inside the function is bound to the global window object:​
	        avg (gameController.scores);
	        // Proof that the avgScore was set on the global window object​
	        console.log (window.avgScore); // 46.4​
	        console.log (gameController.avgScore); // null​
	​
	        // reset the global avgScore​
	        avgScore = "global avgScore";
	​
	        // To set the "this" value explicitly, so that "this" is bound to the gameController,​
	        // We use the call () method:​
	        avg.call (gameController, gameController.scores);
	​
	        console.log (window.avgScore); //global avgScore​
	        console.log (gameController.avgScore); // 46.4​
	​
	
