function solve(args){
	var bag = args, bagLen, gold = 0, silver = 0, bronze = 0, flag = 1;

	bagLen = bag.length;

	for(var i = 0; i < bagLen; i+=1){
		bag[i] = bag[i].split(' ');
	}

	for (var j = 0; j < bagLen; j+=1){
		flag = 1;
		if(bag[j][0].toUpperCase() === 'COIN'){
			if(bag[j][1].indexOf('.')>-1){
				var currentLen = bag[j][1].length;
				var currentIndex = bag[j][1].indexOf('.');

				for(var k = currentIndex+1; k < currentLen; k+=1){
					if(bag[j][1][k]!=='0'){
						flag = 0;
						break;
					}
				}
				
				if(flag === 1){
					
					bag[j][1] = parseInt(bag[j][1]);
					if(isNaN(bag[j][1])){

					}
					else if (bag[j][1] > -1){
						
						var sameGold = (bag[j][1] - bag[j][1]%100)/100;
						gold+=sameGold;

						var currentSameSilver = bag[j][1]%100;
						var sameSilver = (currentSameSilver - currentSameSilver%10)/10;
						silver+=sameSilver;

						var currentSameBronze = currentSameSilver%10;
						bronze+= currentSameBronze;

						
					}
				}

			}
			else {
				bag[j][1] = parseInt(bag[j][1]);
				if(isNaN(bag[j][1])){		
				}
				else if (bag[j][1] > -1) {
					var newGold = (bag[j][1] - bag[j][1]%100)/100;
					gold+=newGold;
					var currentSilver = bag[j][1]%100;
					var newSilver = (currentSilver - currentSilver%10)/10;
					silver+=newSilver;
					var currentBronze = currentSilver%10;
					bronze+= currentBronze;					
				}
			}

		}
		
	}
	var tempSilver = bronze - bronze%10;
	bronze = bronze%10;
	silver+=tempSilver/10;
	var tempGold = silver-silver%10;
	silver = silver%10;
	gold+=tempGold/10;

	console.log('gold : ' + gold);
	console.log('silver : ' + silver);
	console.log('bronze : ' + bronze);
	
}
test = ['cOin 1', 'Coin 2', 'coiN 45', 'coin 100', 'coIn 29', 'coin 545', 'coin hundred', 'cigars 1'];
solve(test);