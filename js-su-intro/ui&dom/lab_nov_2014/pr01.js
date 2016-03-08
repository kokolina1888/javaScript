function solve(args){
	var pattern = args[0].split(' '),
	words = args,
	wordLen, 
	patternLen, len, i,
	currentWord, currentPatern, result=[], j, flag = 1,
	helper, resLen, resInnerLen = [];	
	words.shift();

	len = words.length;
	patternLen = pattern.length;


//CHECKER

for(i = 0; i < len; i+=1){
	wordLen = words[i].length;
	currentWord = words[i].toUpperCase();
	//TAKE THE PATTERN
	for(var l = 0; l < patternLen; l+=1){
		currentPattern = pattern[l].toUpperCase();
		//TAKE THE WORD letters
		for(var w = 0; w < wordLen; w+=1){
			
			if(currentWord[w] !== currentPattern[w]){
				flag = 0;
			}
		}
		if(flag === 1){
			result.push(pattern[l]);
		}
		
		flag = 1;
	}
	resLen = result.length;
	if(resLen===0){
		console.log('-');
	}
	else {
		for(var q = 0; q < resLen; q+=1){
			resInnerLen[q]= result[q].length;
		}
//check for shortest word
var minLen = resInnerLen[0];
var minIndex = 0;
for(var p = 1; p<resLen; p+=1){
	if(resInnerLen[p] < minLen){
		minLen = resInnerLen[p];
		minIndex = p;
	}
}

//check for equal shortest words
for(var r = 0; r < resLen; r+=1){
	if(resInnerLen[r] === minLen && r!==minIndex){
		
		for(var y = 0; y < minLen; y+=1){
			if(result[minIndex][y]>result[r][y]){
			minIndex = r;
			break;
			}
			else if(result[minIndex][y]<result[r][y]){
minIndex = minIndex;
			break;
			}
		
		}
	}

}

// console.log(resInnerLen);

// console.log(minLen+ ' ' + minIndex);
console.log(result[minIndex]);
}

result = [];

}
}
test = ['firefox mozilla gecko webKit lord battery skype',
'firf',
'fire',
'momo',
'skyp',
'lord',
'webk'
];
solve(test);