function solve(args){
	var input = args, len, tLen, 
	pattern, table = [], s=0, matchArray = [], matchCopy = [],
	flag = 1, sum = [], currentLen, maxSum, maxInd, str, strLen;
	len = input.length;

	for(var i = 2; i < len-1; i+=1){
		table[s] = input[i];
		s+=1;
	}
	tLen = table.length;

	for(var i = 0; i < tLen; i+=1){
		matchArray[i] = table[i].split('</td><td>');
		matchArray[i][0] = '';
		currentLen = matchArray[i].length;
		matchArray[i][currentLen-1] = matchArray[i][currentLen-1].replace('</td></tr>', ''); 
		matchArray[i] = matchArray[i].filter(Boolean);
		
	}
	for(var i = 0; i < tLen; i+=1){
		matchCopy[i] = table[i].split('</td><td>');
		matchCopy[i][0] = '';
		currentLen = matchCopy[i].length;
		matchCopy[i][currentLen-1] = matchCopy[i][currentLen-1].replace('</td></tr>', ''); 
		matchCopy[i] = matchCopy[i].filter(Boolean);		
	}

	for(var j = 0; j < tLen; j+=1){
		currentLen = matchArray[j].length;

		sum[j] = 0;

		for(var m = 0; m < currentLen; m+=1){


			if(matchArray[j][m]!== '-'){

				matchArray[j][m] = parseFloat(matchArray[j][m]);
				

				sum[j] += matchArray[j][m];
		
				flag = 0;
			}
			
		}
	}


	if (flag === 1) {
		console.log('no data');
	}
	else{
		maxSum = sum[0];
		maxInd = 0;
		for(var n = 1; n < tLen; n+=1){
			if(sum[n] > maxSum){
				maxSum = sum[n];
				maxInd = n;
			}
		}
		strLen = matchArray[maxInd].length;
		str = '';
		
		for(var p = 0; p < strLen; p+=1){
		if(matchCopy[maxInd][p]!== '-'){	
			if(str !== ''){
				str += ' + ';
			 }	
			str +=  matchCopy[maxInd][p];
			}

	}
		console.log(maxSum + ' = ' + str);
	}

}
test = [
'<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Varna</td><td>211.2</td><td>18.02</td><td>36.11</td></tr>',
'<tr><td>Pleven</td><td>1</td><td>1</td><td>1</td></tr>',
'<tr><td>Vidin</td><td>12850</td><td>-560</td><td>20833</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>49999.999999</td><td>-</td></tr>',
'<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
'<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
'<tr><td>Sofia</td><td>1</td><td>1</td><td>1</td></tr>',
'</table>'

]
solve(test);