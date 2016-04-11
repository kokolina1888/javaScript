function solve(args){
	var input = args, colors={}, len, currName, currAge;
	len = input.length;

	for(var d= 0; d < len; d+=1){
		input[d] = input[d].split('|');
	}

	for(var i = 0; i < len; i+=1){		
		color = input[i][0];
		//IF GETS AN AGE SEARCHES FOR NAME
		if(input[i][1]==='age'){
			currAge = input[i][2];
			for(var ii = 0; ii < len; ii+=1){		

				if(input[ii][0] === color){

					if(input[ii][1]==='name'){
						
						currName = input[ii][2];
						if(!colors[color]){
							colors[color] = {
								age: currAge,
								name: currName,
								//delete on exit
								opponents: [],
								//	opponentsColor: [],
								win: 0,
								loss:0
								};//obj
							} 
						}
					}
				}
			}
		}
		// for(var l = 0; l < len; l+=1){
		// 	if(input[l][1] === 'name'){
		// 		currName = input[l][2];
		// 		for(var iii = 0; iii < len; iii+=1){
		// 			if(input[iii][0] === color){
		// 				if(input[iii][1]==='age'){
		// 					currAge = input[iii][2];
		// 						if(!colors[color]){
		// 							colors[color] = {
		// 								age: currAge,
		// 								name: currName,
		// 								//delete on exit
		// 								opponents: [],
		// 								//	opponentsColor: [],
		// 								win: 0,
		// 								loss:0
		// 							};//obj
		// 						} 
		// 					} 
		// 				}
		// 			}
		// 		}
		// 	}
		
				
for(var j = 0; j < len; j+=1){
		color = input[j][0];

	if(input[j][1] === 'win'){
		if(colors[color]){
			colors[color].win += 1;
			colors[color].opponents.push(input[j][2]);
		}	
	} else if(input[j][1] === 'loss'){
		if(colors[color]){
			colors[color].loss += 1;
			colors[color].opponents.push(input[j][2]);
		}	
	}
}


var colorKeys = Object.keys(colors);
var colLen = colorKeys.length;

for(var m = 0; m < colLen; m+=1){
	var rank = ((colors[colorKeys[m]].win+1) / (colors[colorKeys[m]].loss+1)).toFixed(2);
	colors[colorKeys[m]].rank = rank;
	colors[colorKeys[m]].opponents.sort();
	delete colors[colorKeys[m]].win;
	delete colors[colorKeys[m]].loss;
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
'blue|loss|Pesho'];
solve(test);