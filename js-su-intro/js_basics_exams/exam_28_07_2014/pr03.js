function solve(args){
	var input = args, matchArray = [], 
	helper = [], table = [],
	iLen,
	flag = 1,
	minPrice = [], minInd = 0, 
	prices = [], i = 0, s = 0,
	pattern, len;
	len = input.length;	
for(var q = 2; q < len; q+=1){
	table[s] = input[q];
	s+=1;
}

	pattern = /<td>([0-9]+(\.[0-9]+)?)<\/td>/;

	for(var j = 0; j < len-3; j+=1){
		matchArray[j] = pattern.exec(table[j]);
		//console.log(matchArray[j]);
		prices[j] = [];
		if(matchArray[j]!== null){
			prices[j][0] = +matchArray[j][1];
			prices[j][1] = j;
		}
	}
	
	// iLen = prices.length;
	// delete prices[0];


	// delete prices[1];
	// 		prices = prices.filter(Boolean);
	// iLen = prices.length;
	// delete prices[2];
	// 		prices = prices.filter(Boolean);
	// iLen = prices.length;

	// 	console.log(iLen);

	// 		console.log(prices);
	
	iLen = prices.length;
	
while(i < iLen){
		for(var m = 0; m < iLen; m+=1){
			if(prices[i][0] > prices[m][0]){
				flag = 0;

			}
		}
		if(flag === 1){
			minPrice[minInd] = prices[i][1];
			minInd+=1;
			delete prices[i];
			prices = prices.filter(Boolean);

		}
		else{
			i+=1;
			flag = 1;
		}		
		iLen = prices.length;
		if(i === iLen){
			i = 0;
		}
}
//console.log(minPrice);
var minLen = minPrice.length;

console.log(input[0]);
console.log(input[1]);
for(var z = 0; z < minLen; z+=1){
console.log(table[minPrice[z]]);

}
console.log(input[len-1]);

}
test = [
'<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'<tr><td>Kamenitza Lemon 1 l</td><td>1.65</td><td>+7</td></tr>',
'<tr><td>Vodka Absolute 1 l</td><td>22.00</td><td>+2</td></tr>',
'<tr><td>Laptop Dell Inspiron 3537</td><td>1199.0</td><td>+3</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>-10</td></tr>',
'<tr><td>Ariana Radler 1.5 l</td><td>2.79</td><td>+33</td></tr>',
'<tr><td>Coffee Lavazza 250 gr.</td><td>8.73</td><td>+10</td></tr>',
'<tr><td>Coffee Cup 0.250</td><td>0.02</td><td>0</td></tr>',
'<tr><td>Car BMW i8</td><td>203500</td><td>+7</td></tr>',
'<tr><td>Vitamin B5, 350 mg</td><td>16.50</td><td>+3</td></tr>',
'<tr><td>Book "Eloquent JavaScript" by M. Haverbeke</td><td>0</td><td>+653</td></tr>',
'<tr><td>Apple iPad mini 16GB MD528HC/A</td><td>529.90</td><td>+5</td></tr>',
'<tr><td>HP ElitePad 1000 G2</td><td>2369.00</td><td>0</td></tr>',
'</table>'

];
solve(test);