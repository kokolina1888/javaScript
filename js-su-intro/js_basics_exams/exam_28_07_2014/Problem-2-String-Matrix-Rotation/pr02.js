function solve(args){
var degree = args[0].split('(')[1],
	matrix = args.splice(1), rotate,
	len, i, helper = [], maxLen, helperLen, newHelper = [];
	//len = matrix.length;

	degree = +degree.split(')')[0];
	len = matrix.length;
	rotate = degree%360;

//LOOKING FOR THE LONGEST WORD IN THE MATRIX

	maxLen = matrix[0].length;
		for(i = 1; i < len; i+=1){
			helperLen = matrix[i].length;
			if(helperLen > maxLen){
				maxLen = helperLen;
			}
		}

	if(rotate === 0){
		for(i=0; i<len; i+=1){
			console.log(matrix[i]);
		}
	}
	else if(rotate===270){
		for(var k = 0; k < len; k+=1){
			helperLen = matrix[k].length;
			if( helperLen < maxLen){
				var num = maxLen - helperLen;
				var f = '';
				for(var m = 0; m < num; m+=1){
					f+= ' ';
				}
				matrix[k] = matrix[k]+f;
			}
				matrix[k] = matrix[k].split('').reverse().join('');

		}
			for(var j = 0; j < maxLen; j+=1){
		 	helper[j] = '';
		 	for(var k = 0; k < len; k+=1){
				
		 			helper[j] += matrix[k][j];				
				
		 	}	

		 	console.log(helper[j]);
		 }

	}
	else if(rotate===180){
		//first becomes last value
		var j = 0;
		for(i = len-1; i >= 0; i-=1){				
				helper[j] = matrix[i].split('').reverse().join('');				
				j+=1;
		}
		for(var k = 0; k < len; k+=1){
			helperLen = helper[k].length;
			if( helperLen < maxLen){
				var num = maxLen - helperLen;
				var f = '';
				for(var m = 0; m < num; m+=1){
					f+= ' ';
				}
				helper[k] = f+helper[k];
			}
			console.log(helper[k]);
		}
	}
	else if(rotate===90){		
		for(var j = 0; j < maxLen; j+=1){
			helper[j] = '';
			for(var k = 0; k < len; k+=1){
				if(matrix[k][j])
				{
					helper[j] += matrix[k][j];
				}
				else{
					helper[j] +=' ';
				}
			}	
			helper[j] = helper[j].split('').reverse().join('');
			console.log(helper[j]);
		}//end of creating 90 rotated values
		
	}
	
}
test = [
'Rotate(360)',
'js',
'exam',

]
solve(test);