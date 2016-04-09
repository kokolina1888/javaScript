function solve(args){
	var input = args, colors={}, len, currName, currAge;
	len = input.length;

	for(var i = 0; i < len; i+=1){
		input[i] = input[i].split('|');
		color = input[i][0];
		if(input[i][1] === 'name'){
			currName = input[i][2];
		} else if (input[i][1] === 'age'){
			currAge = input[i][2];
		} 
		

		if(!colors[color]){
			colors[color]= {
				'age': '',
				'name': '',
				'opponents': [],
				'rank': '',
				'win': 0,
				'loss': 0
			};
		// } else {
		// 	if(currName!== undefined){
		// 		colors[color].name = currName;
		// 	} else if(currAge){
		// 		colors[color].age = currAge;
		// 	// } else if(input[i][1] === 'win'){
		// 	// 	colors[color].win+=1;
		// 	// 	colors[color].opponents.push(input[i][2]);
		// 	// } else if(input[i][1] === 'loss'){
		// 	// 	colors[color].loss+=1;
		// 	// 	colors[color].opponents.push(input[i][2]);
		// 	// }
		// }
	}
}
console.log(JSON.stringify(colors));


}
test = [
'purple|age|99',
'red|age|44',
'blue|win|pesho',
'blue|win|mariya',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Yana',
'purple|loss|Yana',
'purple|loss|Manov',
'purple|loss|Manov',
'red|name|gosho',
'blue|win|Vladko',
'purple|loss|Yana',
'purple|name|VladoKaramfilov',
'blue|age|21',
'blue|loss|Pesho',

];
solve(test);