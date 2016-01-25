
//    Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
  //  As a result print the values a and b, separated by a space.

  function onFindBigger() {
  	 var numberOne = document.getElementById('tb-first').value;
  	 var numberTwo = document.getElementById('tb-second').value;
  	 if (numberOne > numberTwo) {
  	 	document.getElementById("console").innerHTML = numberTwo + ' ' + numberOne;
  	 } else if (numberOne < numberTwo) {
  	 	document.getElementById("console").innerHTML = numberOne + ' ' + numberTwo;
  	 } else {
  	 	document.getElementById("console").innerHTML = numberOne + ' is equal to ' + numberTwo;
  	 }
  }
