function solve(args){
	var matrix = args, len, q, helper = [], 
	flagI = 0, flagL = 0, 
	flagJ = 0, flagO = 0,
	flagZ = 0, flagS = 0,
	flagT = 0,
	checker = 0,
	helperLen, 
	i, l, j, o, z, s, t,
	ii, ll, jj, oo, zz, ss, tt;

	len = matrix.length;
	helperLen = matrix[0].length;
	
	for(q = 0; q < len; q+=1){
		helper[q] = matrix[q].split('');
	}

//CHECKING FOR I ***********
//**************************

if(len >= 4){
	for(i = 0; i < helperLen; i+=1){		
		for(ii = 0; ii< len-3; ii+=1){			
			if(helper[ii][i] === 'o' && helper[ii+1][i] === 'o' && helper[ii+2][i] === 'o' && helper[ii+3][i] === 'o'){
				flagI += 1 ;
			}
		}
	}
}


//CHECKING FOR L ********
//***********************
if(len >= 3 && helperLen >=2){
	for(l = 0; l < helperLen-1; l+=1){		
		for(ll = 0; ll< len-2; ll+=1){			
			if(helper[ll][l] === 'o' && helper[ll+1][l] === 'o' && helper[ll+2][l] === 'o' && helper[ll+2][l+1] === 'o'){
				flagL += 1 ;

			}
		}
	}
}


//CHECKING FOR J ********
//***********************
if(len >= 3 && helperLen >=2){
	for(j = 0; j < helperLen-1; j+=1){		
		for(jj = 2; jj< len; jj+=1){			
			if(helper[jj][j] === 'o' && helper[jj][j+1] === 'o' && helper[jj-1][j+1] === 'o' && helper[jj-2][j+1] === 'o'){
				flagJ += 1 ;

			}
		}
	}
}
//CHECKING FOR O ********
//***********************
if(len >= 2 && helperLen >=2){
	for(o = 0; o < helperLen-1; o+=1){		
		for(oo = 0; oo< len-1; oo+=1){			
			if(helper[oo][o] === 'o' && helper[oo][o+1] === 'o' && helper[oo+1][o] === 'o' && helper[oo+1][o+1] === 'o'){
				flagO += 1 ;

			}
		}
	}
}
//CHECKING FOR Z ********
//***********************
if(len >= 2 && helperLen >=3){
	for(z = 0; z < helperLen-2; z+=1){		
		for(zz = 0; zz< len-1; zz+=1){			
			if(helper[zz][z] === 'o' && helper[zz][z+1] === 'o' && helper[zz+1][z+1] === 'o' && helper[zz+1][z+2] === 'o'){
				flagZ += 1 ;

			}
		}
	}
}

//CHECKING FOR S ********
//***********************
if(len >= 2 && helperLen >=3){
	for(s = 0; s < helperLen-2; s+=1){		
		for(ss = 1; ss< len; ss+=1){			
			if(helper[ss][s] === 'o' && helper[ss][s+1] === 'o' && helper[ss-1][s+1] === 'o' && helper[ss-1][s+2] === 'o'){
				flagS += 1 ;

			}
		}
	}
}

//CHECKING FOR T ********
//***********************
if(len >= 2 && helperLen >=3){
	for(t = 0; t < helperLen-2; t+=1){		
		for(tt = 0; tt< len-1; tt+=1){			
			if(helper[tt][t] === 'o' && helper[tt][t+1] === 'o' && helper[tt][t+2] === 'o' && helper[tt+1][t+1] === 'o'){
				flagT += 1 ;

			}
		}
	}
}
 var result = {
        "I": flagI,
        "L": flagL,
        "J": flagJ,
        "O": flagO,
        "Z": flagZ,
        "S": flagS,
        "T": flagT,
    };

    console.log(JSON.stringify(result));
}
var test = [
'-oo',
'ooo',
'ooo'
]
solve(test);