function solve(args){
var prices = [],  trend = 'fixed', j, len, i, l;
prices = args;
len = prices.length;
for(i = 0; i < len; i += 1){
	prices[i] = +prices[i];
	prices[i] = prices[i].toFixed(2);	
}


console.log('<table>');
console.log('<tr><th>Price</th><th>Trend</th></tr>');
console.log('<tr><td>'+prices[0]+'</td><td><img src="fixed.png"/></td></td>')
for(l = 0; l < len; l += 1){
	prices[l] = parseFloat(prices[l]);	
}
for(j = 1; j < len; j+=1){	
	if(prices[j]>prices[j-1]){
		trend = 'up';
	}
	else if(prices[j]<prices[j-1]){
		trend = 'down';
	}
	prices[j] = prices[j].toFixed(2);	
	console.log('<tr><td>'+prices[j]+'</td><td><img src="'+trend+'.png"/></td></td>');
	trend = 'fixed';
}

console.log('</table>');
}
test = [
'1.33',
'1.35',
'2.25',
'13.00',
'0.5',
'0.51',
'0.5',
'0.5',
'0.33',
'1.05',
'1.346',
'20','900',
'1500.1',
'1500.10',
'2000'
]
solve(test);