function solve(args){
	var matrix = args,
	len, strLen = [], i, newHelper = [], helper = [], j, k = 0, m = 0, helperLen, n, cRow, cCol;
	len = matrix.length;

	for(i = 0; i < len; i+= 1){
		strLen[i] = matrix[i].length;
	}
	for(j = 1; j < len; j+=1){
		while(k < strLen[j]-1){
			if(matrix[j][k]===matrix[j][k+1] && matrix[j][k+1]===matrix[j][k+2]){
				if(matrix[j-1][k+1] === matrix[j][k]){
					helper[m] = (j-1);
					//helper[m+1]=j;
					helper[m+1]=k;
					// helper[m+3]=k+1;
					// helper[m+4]=k+2;
					m+=2;
				}

			}
			k+=1;
		}
		k=0;
	}
	helperLen = helper.length;
	for(n = 0; n < len; n+=1){
		newHelper[n] = matrix[n].split('');
	}
	for(var q = 0; q < helperLen; q+=2){
		//firstRow
		cRow = helper[q];
		//firstColumn
		cCol = helper[q+1];
		newHelper[cRow][cCol+1] = '*';
		newHelper[cRow+1][cCol] = '*';
		newHelper[cRow+1][cCol+1]='*';
		newHelper[cRow+1][cCol+2]='*';
	}
	for(var s = 0; s < len; s+=1){
		newHelper[s] = newHelper[s].join('');
		console.log(newHelper[s]);

	}
}
test = [
'dffdsgyefg',
'ffffeyeee',
'jbfffays',
'dagfffdsss',
'dfdfa',
'dadaaadddf',
'sdaaaaa',
'daaaaaaasf',
];
solve(test);