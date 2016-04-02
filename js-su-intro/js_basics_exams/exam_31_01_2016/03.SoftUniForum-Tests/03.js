function solve(args){
	var pattern1, pattern2, banned, input, lenI, len2, code = [], codeLen, 
	inputCopy, lenC, lenC1, match, bannedLen, flagBanned = 0, replace = '',
	start, end, lenU, arrPic = [], cLen;

	input = args;
	lenI = input.length;
	banned = input.splice(lenI-1, 1);
	banned = banned[0].split(' ');
	bannedLen = banned.length;
	inputCopy = input.slice();
	
	

	lenI = input.length
	for(var q = 0; q < lenI; q+=1){
		input[q] = input[q].split(' ');
		cLen = input[q].length;
		arrPic.push(q);
		arrPic.push(cLen);
		input[q] = input[q].join(' ');
	}
	input = input.join(' ');
	input = input.split(' ');
	lenI = input.length

//console.log(input);


//FIND USERNAMES
pattern2 = /#([a-zA-Z][a-zA-Z0-9_\-]{2,})(?!_)/;
var cFlag = 0;
for(var n = 0; n < lenI; n += 1){
	//input[n] = input[n].split(' ');
	// cLen = input[n].length;
	// for(var t= 0; t<cLen; t+=1){

		if(input[n]==='<code>'){			
			for(var ii = n; ii < lenI; ii+=1){
				if(input[ii]==='</code>'){
					cFlag = 1;
			//		console.log(cFlag);
					break;	 			
				}
			}	 		
		}
		else if (input[n]==='</code>'){
			cFlag = 0;
			
		}
		
		if(cFlag === 0){
			match = pattern2.exec(input[n]);
			//sconsole.log(match);
			//console.log(input[n][t]);

			if(match !== null){
			//console.log(match[1]);

			for(var p = 0; p < bannedLen; p+=1){
				if(match[1] === banned[p]){
					flagBanned = 1;
				}
			}
			if(flagBanned === 1){
				lenU = match[1].length;
				for(var u = 0; u < lenU; u+=1){
					replace += '*';
				}	
				input[n] = input[n].replace(match[0], replace); 

			}
			else {
				var currentLen = match[1].length;
				if(match[1][currentLen-1] !== '_'){
					replace = '<a href="/users/profile/show/'+ match[1] + '">'+ match[1] + '</a>';
					input[n] = input[n].replace(match[0], replace); 
				}
			}
			inputCopy[n] = input[n];
			flagBanned = 0;
			replace = '';
		}
	}


//input[n] = input[n].join(' ');
//console.log(input[n]);

}
//restore input
var newInput = [];
var inputIndex = 0;
var arrLen = arrPic.length;
for(var a=0; a <arrLen; a+=2){
	var index = arrPic[a];
	newInput[index] = '';
	checker=1;
	while(checker <= arrPic[a+1]){
		newInput[index]+= input[inputIndex];
		if(checker!==(arrPic[a+1])){
		newInput[index]+= ' ';
		}
		inputIndex+=1;
		checker+=1;
	}
	console.log(newInput[index]);

}		
		
		



}

test = [
'<code>',
'#lele',
'#pochna se </code>',
'<code> #mani_begai #gosho <code>',
'gosho',
]
solve(test);