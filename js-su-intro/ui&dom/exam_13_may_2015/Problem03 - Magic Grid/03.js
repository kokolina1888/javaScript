function solve(args){
	var encStr = args[0], magicKey = +args[1], matrix = args, 
	newMatrix = [], mLen, numbers = [], code = [], letters = [], result;
	mLen = matrix.length;

	for(var i = 2; i < mLen; i+=1){
		newMatrix[i] = matrix[i].split(' ');
	}
	newMatrix = newMatrix.filter(Boolean);
	var nmLen = newMatrix.length;
	var currentLen = newMatrix[0].length;
	for(var j = 0; j < nmLen; j+=1){
		for(var k = 0; k < currentLen; k+= 1){
			newMatrix[j][k] = +newMatrix[j][k];
			var l = 0;			
			while(l < nmLen){
				var m = 0;
				while(m < currentLen){
					currentNumber = +newMatrix[l][m];				
//console.log(newMatrix[j][k]+currentNumber)
					if(((newMatrix[j][k]+currentNumber) === magicKey && l!==j) || ((newMatrix[j][k]+currentNumber) === magicKey && m!==k) ){
						numbers.push(l);
						numbers.push(m);
					}
					m+=1;
				}
				l+=1;
			}
		}
	}
	
	
	var numLen = numbers.length;
	var sum = 0;
	for(var n = 0; n < numLen; n+=1){
		sum+=numbers[n];

	}


	var strLen = encStr.length;
	for(var p = 0; p < strLen; p+=1){
		if(p%2===0){
		code[p] = encStr.charCodeAt(p) + sum;
		}
		else {
		code[p] = encStr.charCodeAt(p) - sum;
		}
		letters[p] = String.fromCharCode(code[p]);
		

	}
	result = letters.join('');

	console.log(result);

}
test = [
'Vi`ujr!sihtudts',
'0',
'0 0 120 300',
'100 9 300 100',
'1 290 370 100',
'10 11 100 550'];
solve(test);