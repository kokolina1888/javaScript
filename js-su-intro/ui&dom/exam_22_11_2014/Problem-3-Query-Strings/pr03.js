// •	SPACE is encoded as '+' or "%20 Letters 
//(A–Z and a–z), numbers (0–9), the characters '*','-','.' and '_'  and other not-special symbols are left as-is
// •	Allowed working time: 0.2 seconds. 
//Allowed memory: 16 MB.

function solve(args){
	var input = args, res=[], iLen,
	iLen = input.length, key= [], value = [], pattern, keyValues = [],
	rLen, keyValue = [], newArr=[], nLen, matchArray = [], flag = 0,
	currentKey = [], currentValue = [],
	ind = 1,
	resKey = [[]], currentLen;

	for(var i = 0; i < iLen; i+=1){
		res[i] = input[i].split('&');
	}
	pattern = /([a-zA-Z\+\/0-9\-_@%]+)=([@a-zA-Z0-9%\+*\.\-_:\/#\^\(]+)/;
	nLen = res.length;
	
	for(var j = 0; j < nLen; j+=1){
		currentLen = res[j].length;
		var currentArr = res[j];

		keyValues[j] = [];
		for(var m = 0; m < currentLen; m+=1){
			matchArray[m] = pattern.exec(currentArr[m]);
			if(matchArray[m] !== null){
			matchArray[m][2] = matchArray[m][2].replace(/\+|(%20)+/g, " "); 		
			matchArray[m][1] = matchArray[m][1].replace(/\+|(%20)+/g, " "); 		
			matchArray[m][2] = matchArray[m][2].split(' ');
			matchArray[m][2] = matchArray[m][2].filter(Boolean);
			matchArray[m][2] = matchArray[m][2].join(' ');
			matchArray[m][1] = matchArray[m][1].split(' ');
			matchArray[m][1] = matchArray[m][1].filter(Boolean);
			matchArray[m][1] = matchArray[m][1].join(' ');		
			//key/value....
			keyValues[j].push(matchArray[m][1]);
			keyValues[j].push(matchArray[m][2]);
		}
		}	
	}
	//console.log(matchArray);

	var kLen = keyValues.length;
	

	for(var n = 0; n < kLen; n+=1){
		var currentArr = keyValues[n];
		currentKey[0] = currentArr[0];
		var cuLen = currentArr.length;
		for(var t = 2; t < cuLen; t+=2){	
			var keyLen = currentKey.length;
			for(var z = 0; z < keyLen; z+=1){
				if(currentArr[t] === currentKey[z]){
					flag = 1;
				}
			}
			if(flag === 0){
				currentKey.push(currentArr[t]);
						
			}
			else{
				flag = 0;
			}
		}
		//adding values
		for(var e = 0; e < cuLen; e += 2){
			for(var c = 0; c < currentKey.length; c+=1){
				if(currentArr[e] === currentKey[c]){
					if(currentValue[c]===undefined){
						currentValue[c] = [];
						currentValue[c].push(currentArr[e+1]);
					}
					else{
						currentValue[c].push(currentArr[e+1]);

					}
					
				}
			}
		}	
		str = '';
		for(var f = 0; f < currentKey.length; f+=1){
			str+= currentKey[f]+'=[';
			for(var g = 0; g < currentValue[f].length; g+=1){
				str+= currentValue[f][g];
				if(g !== (currentValue[f].length-1)){
					str+=', ';
				}
			}
			str+= ']';
		}
		console.log(str);
		str = '';
		currentKey = [];
		currentValue = [];
	}
}
// 20everything=[42]
// answer of everything=[42]
// symbols=[#%*^(^(]

test = [
'http://lotr.wikia.com/wiki/Elves?find=elf&elves=amarie%20%20%20%20nimrodel&elves=gil-galad+galadriel&mortal=harry%20potter&elven=legolas&mortal=he-who-must-not-be-named+&mortal=boromir&immortal=spirit&mortal=bilbo+beggins&evil=sauron&answer%20of%20everything++++=42',
'https://www.google.bg/search?q=whitespace&oq=whitespace&aqs=chrome.0.0l6.1165j0j7&sourceid=chrome&es_sm=93&ie=UTF-8',
'numbers=20&symbols=#%*^(^(',
];
solve(test);