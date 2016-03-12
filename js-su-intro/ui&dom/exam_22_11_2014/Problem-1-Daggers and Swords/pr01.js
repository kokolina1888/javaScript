function solve(args){
	var bladeLength = args, len,
		bladeType, appType;

	len = bladeLength.length;

	console.log('<table border="1">');
	console.log('<thead>');
	console.log('<tr><th colspan="3">Blades</th></tr>');
	console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
	console.log('</thead>');
	console.log('<tbody>');
	for(var i =0; i < len; i+=1){
		bladeLength[i] = +bladeLength[i];
		bladeLength[i] = Math.floor(bladeLength[i]);
		if(bladeLength[i] > 40){
			appType = 'sword';
		}
		else if (bladeLength[i]<= 40 && bladeLength[i]>10){
			appType = 'dagger';
		}
		else if (bladeLength[i]<= 10){
			appType = 'no';
		}
		if((bladeLength[i]-1)%5 === 0){
			bladeType = 'blade';
		}
		else if((bladeLength[i]-2)%5 === 0){
			bladeType = 'quite a blade';
		}
		else if((bladeLength[i]-3)%5 === 0){
			bladeType = 'pants-scraper';
		}
		else if((bladeLength[i]-4)%5 === 0){
			bladeType = 'frog-butcher';
		}
		else if((bladeLength[i]-5)%5 === 0){
			bladeType = '*rap-poker';
		}
		if(appType !== 'no'){
			console.log('<tr><td>'+bladeLength[i]+ '</td><td>' +appType + '</td><td>' + bladeType+'</td></tr>');
			
		}
	}

//(n*5 + 1) 'blade'
//(n*5 + 2) 'quite a blade'
//(n*5 + 3) 'pants-scraper'
//(n*5 + 4)'frog-butcher'
//(n*5 + 5) *rap-poker'.
// longer than 40cm sword
//dagger.
console.log('</tbody>');
console.log('</table>');

}
test = [
'17.8',
'19.4',
'13',
'55.8',
'126.96541651',
'3'
]
solve(test);