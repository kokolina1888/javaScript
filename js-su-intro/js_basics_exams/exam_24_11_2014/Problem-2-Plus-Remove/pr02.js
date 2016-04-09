// You are given a sequence of text lines, holding symbols,
// small and capital Latin letters. Your task is to 
// remove all "plus shapes" in the text. They may consist of small and 
// capital letters at the same time, or of any symbol. 
// All of the X shapes below are valid:
// Every "plus shape" is 3 by 3 symbols crossing each other on 3 
// lines. Single "plus shape" can be part of multiple "plus shapes". 
// If new "plus shapes" are formed after the first removal 
// you don't have to remove them.

function solve(args){
	var matrix = args, helper=[], cIn = [], matrixLen, currentLen, inLen;


	matrixLen = matrix.length;
	for(var i=0; i<matrixLen; i+=1){
		matrix[i] = matrix[i].split('');
	}
	for(var j = 0; j < matrixLen; j+=1){
		helper[j] = matrix[j].slice();		
		currentLen = helper[j].length;
		for(var k = 0; k < currentLen; k+=1){
			helper[j][k] = helper[j][k].toUpperCase();
		}
	}
	
	for (var m = 0; m < matrixLen-2; m+=1){
		currentLen = helper[m].length;
		for(var n = 1; n < currentLen; n+= 1){
			if(helper[m][n] === helper[m+1][n-1]){
				if(helper[m][n] === helper[m+1][n]){
					if(helper[m][n]===helper[m+1][n+1]){
						if(helper[m][n]===helper[m+2][n]){
							cIn.push(m);
							cIn.push(n);
						}
					}
				}
			}
		}

	}

	inLen = cIn.length;

	for(var s = 0; s < inLen; s+= 2){
 	//current Row
 	var cR = cIn[s];
 	//current Col
 	var cC = cIn[s+1];
 	matrix[cR][cC] = '';
 	matrix[cR+1][cC-1] = '';
 	matrix[cR+1][cC] = '';
 	matrix[cR+1][cC+1] = '';
 	matrix[cR+2][cC] = '';
 }
 for(var t = 0; t < matrixLen; t+=1){
 	matrix[t] = matrix[t].filter(Boolean);
 	matrix[t] = matrix[t].join('');
 	console.log(matrix[t]);

 }
}
test = ['@s@a@p@una', 'p@@@@@@@@dna', '@6@t@*@*ego', 'vdig*****ne6', 'li??^*^*'];
solve(test);