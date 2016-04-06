// •	From the global scope
// •	Inside another function
// •	As an object (for example, using new testContext())

function testContext(){
	console.log(this);
}

// testContext();

// function test(){
// 	testContext();
// 	function testContext(){
// 	console.log(this);
// }
// }
// test();

var func = new testContext();

console.log(func);