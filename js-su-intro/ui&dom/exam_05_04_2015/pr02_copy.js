function solve(args){
	var numJumpsAllowed = +args[0], 
	trackLen = +args[1], 
	fleas = [], 
	fleasLen, currentPos = [], 
	winner, winIn
	flagLen = 0;

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

	for(var i = 0; i < fleasLen; i+=1){
		fleas[i] = fleas[i].split(',');		
		fleas[i][1] = +fleas[i][1];
		currentPos[i] = 0;
	}


//FIND IF THE JUMP IS EQUAL OR GREATER THAN THE TRACK LENGTH

for(var b = 0; b < fleasLen; b+= 1){
	if(fleas[b][1]<trackLen){
		flagLen = 1;
		break;
	}
}
//IF YES - THE FIRST FLEA IS THE WINNER
if(flagLen === 0){
	for(var c = 0; c < fleasLen; c+=1){
		currentPos[c] = fleas[c][1]*numJumpsAllowed;
		if (currentPos[c]>=trackLen) {
			currentPos[c] = currentPos[c]-1;
		}
	}
	winIn = 0;
}
else {
	//IF NOT -
//FIND THE LONGEST JUMP
var maxJump = fleas[0][1];
var maxJumpIndex = 0;
for(var d = 0; d < fleasLen; d+=1){	
	if(fleas[d][1] > maxJump){
		maxJump = fleas[d][1];
		maxJumpIndex = d;
	}
}
//FIND IF LONGEST JUMP*NUMBER OF JUMPS IS MORE THAN THE TRACK LENGTH

if((maxJump*numJumpsAllowed)>trackLen){
		//IF YES -
		//CHECK IF THERE ARE JUMPS EQUAL IN LENGTH WITH THE MAX LENGTH
		var equal = [];
		for(var e = 0; e < fleasLen; e+=1){
			if(fleas[e][1] === maxJump){
				equal.push(e);
			}
		}
		var jumps = Math.round(trackLen/maxJump);
		
		if (equal.length > 0) {
			winIn = equal[0];
			for(var f = 0; f < fleasLen; f+=1){
				
				if (f!==winIn) {
					currentPos[f] = fleas[f][1]*(jumps-1);
					}

				}			
			currentPos[winIn] = trackLen-1;			
		}
		else {
			//IF NOT FIND THE POSITION OF EACH FLEA WHILE THE FASTEST FLEA REACHES THE END OR FLIES OVER IT
			winIn = maxJumpIndex;
			for(var f = 0; f < fleasLen; f+=1){
				
				if (f!==maxJumpIndex) {
					currentPos[f] = fleas[f][1]*(jumps-1);
				}

				}
			
			currentPos[winIn] = trackLen-1;
		}
		
	}

else{
	//IF NOT var maxJump = fleas[0][1];

		//CHECK IF THERE ARE JUMPS EQUAL IN LENGTH WITH THE MAX LENGTH
		var equal = [];
		for(var e = 0; e < fleasLen; e+=1){
			if(fleas[e][1] === maxJump){
				equal.push(e);
			}
		}
		
		if (equal.length > 0) {
			for(var f = 0; f < fleasLen; f+=1){
				currentPos[f] = fleas[f][1]*numJumpsAllowed;

				if(currentPos[f]>=trackLen){
					currentPos[f] = trackLen-1;
				}
			}
			
			winIn = equal.length-1;
		}
		else {

			//IF NOT FIND THE POSITION OF EACH FLEA 
			//fleajump*numberofjumps
		
			for(var f = 0; f < fleasLen; f+=1){
				currentPos[f] = fleas[f][1]*numJumpsAllowed;
				if(currentPos[f]>=trackLen){
					currentPos[f] = trackLen-1;
				}
			}
			winIn = maxJumpIndex;
		
		}


			//IF YES FIND THE POSITION OF EACH AND FLEA WITH THE LONGEST JUMP WITH THEGREATEST INDEX
			//fleajump*numberofjumps
			//MAX JUMP MAX JUMP INDEX=FLEA INDEX


	}
}


				printHasTags(trackLen);
			for (var p = 0; p < fleasLen; p+= 1){
				var str = '';
				for(var q = 0; q < currentPos[p]; q+=1){
					str += '.'; 
				}
				str+=fleas[p][0][0].toUpperCase();
				for(var d = currentPos[p]+1; d < trackLen; d+= 1){
					str+='.';
				}
				console.log(str);

			}
			printHasTags(trackLen);

			console.log('Winner: ' + fleas[winIn][0])
		}
//test = ['3', '29', 'pesho, 9', 'gosho, 10', 'tosho, 7', 'gundi, 1']
//test = ['1', '1', 'pesho, 1', 'gosho, 1']
//test = ['3', '5', 'cura, 1', 'Pepi, 1', 'UlTraFlea, 1', 'BOIKO, 1'];
test = ['10', '19', 'angel, 9', 'Boris, 10', 'Georgi, 3', 'Dimitar, 7']
solve(test);
