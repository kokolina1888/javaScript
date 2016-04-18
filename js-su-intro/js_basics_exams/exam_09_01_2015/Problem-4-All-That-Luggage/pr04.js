function solve(args){
	var input = args, 
	tourists = {}, 
	len, crit, type;

	len = input.length;

	crit = input.splice(len-1);

	len = input.length;


	for(var i = 0; i < len; i+=1){
		input[i] = input[i].split(/\.{0,}\*\.{0,}/);

	}

	for(var j = 0; j < len; j+=1){
		current_tourist = input[j];
		var tourist = current_tourist[0];
		var luggageName = current_tourist[1];
		var fragile = (current_tourist[4] === 'true');
		if(current_tourist[2] === 'true'){
			type = 'food';
		}
		else if(current_tourist[3] === 'true'){
			type = 'drink';
		}
		else {
			type = 'other';
		}
		var weight = current_tourist[5];
		var transferredWith = current_tourist[6];
		var luggage = {		
			"kg": +weight,
			"fragile":fragile,
			"type":type,
			"transferredWith": transferredWith
		};
		if(!tourists[tourist]){
			tourists[tourist] = {};
			tourists[tourist][luggageName] = luggage;
		}
		else {
			tourists[tourist][luggageName] = luggage;
		}
	}
	var size = Object.keys(tourists).length;
	var keys = Object.keys(tourists);
	var outObj = {};
	for(var d = 0; d < size; d+=1){
		var currObj = tourists[keys[d]];		
		var currSize = Object.keys(currObj).length;
		var currKeys = Object.keys(currObj);
		var outputObj = {};		
		if (currSize > 1) {
			var theLen = currKeys.length;
			if(crit == 'luggage name' ){
				currKeys.sort();
			for(var m = 0; m < theLen; m+= 1){
				outputObj[[currKeys[m]]] = currObj[currKeys[m]];
			}
		}
		else if (crit == 'weight'){			
			var kg = [];
			for(var mm = 0; mm < theLen; mm+=1){
				kg[mm] = currObj[currKeys[mm]].kg;
			}
			kg.sort();			
			var g = 0;
			var checkLen = currKeys.length;
			while(g < theLen){
				for(var mmm = 0; mmm < checkLen; mmm+= 1){
					if(kg[g] == currObj[currKeys[mmm]].kg){
						outputObj[[currKeys[mmm]]] = currObj[currKeys[mmm]];
						delete currObj[currKeys[mmm]];
						g++;
						currKeys = Object.keys(currObj);
						checkLen = currKeys.length;	
						break;
					}					
				}
			}
		} else if(crit == 'strict'){
			outputObj = currObj;
		}
	} else {
		outputObj = currObj;
	}
	outObj[keys[d]] = outputObj;
}
console.log(JSON.stringify(outObj));

}
test = [
'Yana Slavcheva.....*....clothes.........*........false.....*..........false...*..false.*.2.2.*.backpack',
'Kiko....*....socks.*.....false.....*.false.*......false......*.0.2.*....backpack',
'Kiko.*...banana.*.true.*.....false......*.false.*.3.2.*.backpack',
'Kiko.*..sticks.*.false......*.false.*.false....*.1.6.*.ATV',
'Kiko.*.....glasses.....*..false......*.false.*...true.....*.3.....*....ATV',
'Manov..*.socks.*.false.*...false.*.false.*.0.3.*.ATV',
'Manov.*...condoms..*.false....*.false.*.false.*.8.3.*.ATV',
'Manov...*.....nuts.....*.true....*.false.*.false.*.2.2.*.backpack',
'Manov.*....salami.*....true.*...false..*.false.*.....6.4.....*.....ATV',
'Manov....*.steak....*.true.*....false...*.false.....*.5.8.*...ATV',
'Manov...*.laptop...*....false....*....false.....*.true.*.....2.5.*.backpack',
'Manov.*...rakiya....*..false...*.true.*.false.*.5.8.*.backpack',
'weight',
];
solve(test);