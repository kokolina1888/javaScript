//"mine {mineName} - {оre} : {quantity}". 
//{mineName} - optional
//"mine - {оre} : {quantity}". 

//output *Gold: 12
function solve(args){
var mines = args, minesLen = args.length, helper = [], gLen, sLen, dLen, 
helperLen, g, s, d, gold=0, silver=0, diamonds=0, strLen;

for(var i = 0; i < minesLen; i+=1){
		if(mines[i].indexOf('mine ')>-1){
			if(mines[i].indexOf(':')>-1){
				if(mines[i].indexOf('gold')>-1 || mines[i].indexOf('silver')>-1 || mines[i].indexOf('diamonds')>-1 ){
				mines[i] = mines[i].split(':');
				var mlen = mines[i].length;	
									
				//mines[i] = mines[i].filter(Boolean);				
				helper.push(i);
			}					
			}
		}		
	}
	
	helperLen = helper.length;
	

	if(helperLen > 0 ){
	for (var j = 0; j < helperLen; j+=1){
		strLen = mines[helper[j]].length;
		if(mines[helper[j]][strLen-2].indexOf('gold')>-1 ){
			g = mines[helper[j]][strLen-1];
			gLen = g.length;
			for(var b=0; b<gLen; b+=1){
				if(isNaN(+g[b])){
					g = g.replace(g[b],'');
				}
			}	
				gold += +g;
		} 
		else if(mines[helper[j]][strLen-2].indexOf('silver')>-1 ){
			s = mines[helper[j]][strLen-1];
			sLen = s.length;
			for(var c=0; c<sLen; c+=1){
				if(isNaN(+s[c])){
					s = s.replace(s[c],'');
				}
			}		
			silver+=+s;
		}
		else if(mines[helper[j]][strLen-2].indexOf('diamonds') >-1){
			d = mines[helper[j]][strLen-1];
			dLen = d.length;
			for(var f=0; f<dLen; f+=1){
				if(isNaN(+d[f])){
					d = d.replace(d[f],'');
				}
			}		
			diamonds+=+d;
		}

	}
}

			console.log('*Silver: '+ silver);
			console.log('*Gold: '+gold);
			console.log('*Diamonds: '+ diamonds);


	
}
 test = ['	mine mina - golD : 5', 'mine mina: gold: 5'];
// test = ['mine bobovDol - gold: 10"', 'mine medenRudnik - diamonds: 22"', 
// 'mine chernoMore - shrimps : 24"', 'gold: 50'];
solve(test);

// *Silver: 28
// *Gold: 10
// *Diamonds: 5
