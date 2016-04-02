function solve(args){
var matrix = args, rowLen = [], i, j, k, l, jj, kk, m, len, mem = [], helper = [], memLen;

len = matrix.length;

for(i = 0; i < len; i+= 1){
	helper[i] = matrix[i].toUpperCase().split('');
	matrix[i] = matrix[i].split('');
	rowLen[i] = matrix[i].length;
}

for(j = 0; j < len-2; j += 1){
	for(k = 0; k < rowLen[j]-2; k+=1){
		if(helper[j][k] === helper[j][k+2]){
			if(helper[j][k]===helper[j+1][k+1]){
				if(helper[j][k]===helper[j+2][k]){
					if(helper[j][k]===helper[j+2][k+2]){
						//enters the start coordinates of x
						mem.push(j);
						mem.push(k);
					}
				}
			}
		}
	}
}
memLen = mem.length;
for(l = 0; l < memLen; l+=2){
	jj = mem[l];
	kk = mem[l+1];
	matrix[jj][kk] = '';
	matrix[jj][kk+2] = '';
	matrix[jj+1][kk+1] = '';
	matrix[jj+2][kk] = '';
	matrix[jj+2][kk+2] = '';
}
for(m=0; m < len; m+=1){
	matrix[m] = matrix[m].join('');
	console.log(matrix[m]);
 }
}
var test = [
'puoUdai',
'miU',
'ausupirina',
'8n8i8',
'm8o8a',
'8l8o860',
'M8i8',
'8e8!8?!'

];
solve(test);