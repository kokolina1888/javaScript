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

//printArgsInfo(2, 3, 2.5, -110.5564, false);
//printArgsInfo(null, undefined, "", 0, [0, 1], {});
//printArgsInfo([1, 2], ["string", "array"], ["single value"]);
//printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20})
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);