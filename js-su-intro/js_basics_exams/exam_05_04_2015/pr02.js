//number of jumps allowed, 
//the length of the track, 
//'name, jumpDistance' for each flea. 
//1 - would pick the length of the track
//2  - maximum allowed number of jumps
//3 - If no flea has passed the finish  - the furthest. 
//4 - amongst those that have jumped furthest - that has jumped last
//5 - a flea jumps exactly on the finish line or behind it,
// it would be deemed winner and all other fleas denied the chance to 
//jump any more (even if the next flea would have 
//jumped further behind the finish line)
//print the final state of the track 
//the current position of each flea.
//If any flea has jumped behind the finished line 
//and is deemed winner it should be displayed at 
//the last possible position of the track. 
//their starting position is 0 not 1

function solve(args){

	var numJumpsAllowed = parseInt(args[0]), i, m, d, r, k, t, p, q, jumping = 0, jumps = 0, trackLen = +args[1], fleas = [], fleasLen, currentPos = [], winner;
	args.splice(0, 2);
	fleas = args;
	fleasLen = fleas.length;
	function printHasTags(p){
		for(var i = 0; i < 2; i+=1){
			var hashTags = '';
			for(var j = 0; j < p; j+=1){
				hashTags+= '#';
			}
			console.log(hashTags);
		}
	}
	
	if(fleasLen !== 1){

		for(i = 0; i < fleasLen; i+=1){
			fleas[i] = fleas[i].split(',');		
			fleas[i][1] = parseInt(fleas[i][1]);
			currentPos[i] = 0;
		}
//FIND THE MAX JUMPS - the WINNER
var maxJumpLen = fleas[0][1];
var maxJumpLenIndex = 0;


for(m = 0; m < fleasLen; m+= 1){
	if(fleas[m][1]>maxJumpLen){
		maxJumpLen = fleas[m][1];
		maxJumpLenIndex = m;
	}
	
}	

while(jumping <= trackLen){		
	jumps+=1;
	if(jumps <= numJumpsAllowed){
		for(k = 0; k< fleasLen; k+=1){
			currentPos[k] += fleas[k][1];
			if (currentPos[k] >= trackLen) {				
				break;
			}
			
		}
	}	
	jumping+= 1;
}


var winner = currentPos[0];
var winIn = 0;
var newTrack = trackLen-1

for(r = 0; r< fleasLen; r+=1){	
	if(currentPos[r] >= winner && currentPos[r] >= newTrack){
		winner = currentPos[r];
		winIn = r;
		break;
	}
	else if(currentPos[r] > winner && currentPos[r] < newTrack){
		winner = currentPos[r];
		winIn = r;
	}
	else if(currentPos[r] === winner){
		if(r > winIn){
			winIn = r;
		}
	}	
}
for(t=0; t<fleasLen; t+=1){
	if(currentPos[t]>=trackLen){
		if (t === winIn) {
			currentPos[t] = trackLen-1;
		}
		else {
			currentPos[t] = currentPos[t]-fleas[t][1];
		}
	}
}

}
else {
	winIn = 0;
	currentPos[0] = 0;
	fleas[0] = fleas[0].split(',');		
	fleas[0][1] = +fleas[0][1];
	
	while (jumping <= trackLen){
		jumps++;
		if(jumps<= numJumpsAllowed){
			
			currentPos[0] +=fleas[0][1];
			jumping+= fleas[0][1];
		}
		else {
			break;
		}		

	}

	if(currentPos[0]>= trackLen){
		currentPos[0] = trackLen-1;
	}


}

printHasTags(trackLen);

for (p = 0; p < fleasLen; p+= 1){
	var str = '';
	for(q = 0; q < currentPos[p]; q+=1){
		str += '.'; 
	}
	str+=fleas[p][0][0].toUpperCase();
	for(d = currentPos[p]+1; d < trackLen; d+= 1){
		str+='.';
	}
	console.log(str);

}
printHasTags(trackLen);


console.log('Winner: ' + fleas[winIn][0])


}

//test = ['3', '29', 'pesho, 9', 'gosho, 10', 'tosho, 7', 'gundi, 1']
//test = ['3', '28', 'pesho, 9', 'gosho, 10', 'tosho, 7', 'gundi, 1']
//test = ['1', '1', 'pesho, 1', 'gosho, 1']
//test = ['3', '10', 'Suzi, 5']
test = ['10', '100', 'pesho, 0', 'gosho, 0', 'ivan, 0', 'dragan, 0', 'Minka, 0', 'PENKA, 0', 'VILIO, 0', 'BulHar, 0', 'TranVGashTIte, 0', 'ulichnica, 0']
solve(test);