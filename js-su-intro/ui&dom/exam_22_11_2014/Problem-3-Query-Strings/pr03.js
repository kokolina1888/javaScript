// •	SPACE is encoded as '+' or "%20 Letters 
//(A–Z and a–z), numbers (0–9), the characters '*','-','.' and '_'  and other not-special symbols are left as-is
// •	Allowed working time: 0.2 seconds. 
//Allowed memory: 16 MB.

function solve(args){
	var input = args, res=[], iLen,
	iLen = input.length, key= [], value = [], pattern,
	rLen, keyValue = [], newArr=[], nLen, matchArray = [];

	for(var i = 0; i < iLen; i+=1){
	res[i] = input[i].split('&');
	rLen = res[i].length;
	for(var j = 0; j < rLen; j+=1){
		newArr.push(res[i][j]);
	}

	}
	pattern = /([a-zA-Z\+\/0-9]+)=([a-zA-Z0-9%\+*\.\-_:\/]+)/;
	nLen = newArr.length;
	for(var m = 0; m < nLen; m+=1){
		matchArray[m] = pattern.exec(newArr[m]);
		console.log(matchArray[m][1]+' '+matchArray[m][2]);
		
	}
	

}
test = [
'foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php',

];
solve(test);