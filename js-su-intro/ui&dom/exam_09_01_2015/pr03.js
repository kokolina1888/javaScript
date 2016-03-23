function solve(args){
var input = args[0], matchArray, match, 
newCharCode, currentCharCode, output='';
var regex = /<p>(.+?)<\/p>/g;

while(matchArray = regex.exec(input)){
match = matchArray[1];
match = match.replace(/[^a-z0-9]+/g, ' ');

for (var c in match){
	
currentCharCode = match.charCodeAt(c);
//coding
	if(currentCharCode >= 97 && currentCharCode <= 109){
		newCharCode = currentCharCode + 13;
	}

	else if(currentCharCode >= 110 && currentCharCode <= 122){
		newCharCode = currentCharCode - 13;
	}
	else {
		newCharCode = currentCharCode;
	}
	output += String.fromCharCode(newCharCode);
}
}
console.log(output);
}
test = ['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>'];

solve(test);