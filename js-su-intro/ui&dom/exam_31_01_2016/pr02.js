function solve(args){
	var matrix = args, arrLen = [], 
	jMattrix = [], flag = 1,
	newMattrix = [],
	mLen, num, jLen, aLen;
	mLen = matrix.length;
	num = +matrix.splice(mLen-1);
	mLen = mLen-1;
	

	for(var i = 0; i < mLen; i+=1){
		matrix[i] = matrix[i].split(' ');
		arrLen[i] = matrix[i].length;
				
	}
	for(var e = 0; e < mLen; e+=1){		
		arrLen[e]= matrix[e].length;		
		
	}
aLen = arrLen.length;
	jMattrix = matrix.join(',');
	jMattrix = jMattrix.split(',');

	jLen = jMattrix.length;

	for(var j = 0; j < jLen;){
		var currentEl = jMattrix[j];
			for(var n = 0; n < num; n+=1){	
			 	if(currentEl !== jMattrix[j+n]){
				flag = 0;
		 		}
		 	}

		 if(flag === 1){
			for(var m = 0; m < num; m+=1){
		 		jMattrix[j+m] = '';
		 		
		 	}
		 	j+= num; 
		 }
		 else if(flag === 0){
		 	flag = 1;
		 	j+=1;
		 }
	}
	
	var start = 0;

	for (var f = 0; f < aLen; f+=1){
	newMattrix[f] = jMattrix.splice(0, arrLen[f]);
	newMattrix[f]=newMattrix[f].filter(Boolean);
	newMattrix[f] = newMattrix[f].join(' ');
	if(newMattrix[f].length === 0){
		console.log('(empty)');
	}
	else {
		console.log(newMattrix[f]);
	}
	
	}	
}
test = [
'3 3 3 2 5 9 9 9 9 1 2',
'1 1 1 1 1 2 5 8 1 1 7',
'7 7 1 2 3 5 7 4 4 1 2',
'2'
];
solve(test);