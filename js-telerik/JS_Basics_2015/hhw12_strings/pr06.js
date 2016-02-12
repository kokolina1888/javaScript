var text;
text = '<html> <head> <title>Sample site</title> </head> <body> <div>text <div>more text</div> and more...</div> in body</body></html>';
function extractText(text){
var n, arr;
arr = text.split('>');

var len = arr.length;
for(var i = 0; i<len; i++){
	if(arr[i] !== "<") {
n = arr[i].indexOf('<');
arr[i] = arr[i].substr(0, n);
	}
}
text = arr.join("");
return text;
}

console.log(extractText(text));
