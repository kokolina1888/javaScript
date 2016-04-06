// Call the function printArgsInfo() using call() and apply() as follows:
// •	Using call() without arguments
// •	Using call() with arguments
// •	Using apply() without arguments
// •	Using apply() with arguments

function printArgsInfo(){
	var count = arguments.length, info;
	for(var i = 0 ; i < count; i+= 1){
		switch(toString.call(arguments[i])) {
			case '[object Array]':
			info = '(array)';
			break;
			case '[object Null]':
			info = '(object)';
			break;
			case '[object Undefined]':
			info = '(undefined)';
			break;
			case '[object String]':
			info = '(string)';
			break;
			case '[object Number]':
			info = '(number)';
			break;
			case '[object Boolean]':
			info = '(boolean)';
			break;
			case '[object Object]':
			info = '(object)';
			break;

		} 
		console.log(arguments[i] +' '+ info);


	}
}

printArgsInfo.call(arguments, "some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo.apply(arguments, ["some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20}]);

