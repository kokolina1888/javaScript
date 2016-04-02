//carrots – {!}, cabbage – {*}, lettuce – {&}, turnip – {#}
//he hits the wall and remains at the same position if C < 0 newC = C
//if newR < 0; newR=R
//countHitWall
//all the vegetables there and leaves @ at their places
//If Goshko stays at the same position because he hits 
//a wall he doesn’t eat from the same cell again.
function solve(args){
	var dir = args[0].split(', '),
	matrix = args.splice(1), mLen, rowLength,
	dLen, startR = 0, startC = 0, newR, newC, flag = 0, sample, veg, noVeg = 0, car = 0, cellStr = '',
	cab = 0, letu = 0, tur = 0, cells = [], coord = [], coordFlag = 0,
	pattern, wallHits = 0;
	mLen = matrix.length;

	pattern = /(\{!\})|(\{\*\})|(\{&\})|(\{#\})/;


	for(i = 0; i < mLen; i+=1){
		matrix[i] = matrix[i].split(', ');
	}

	//MOVING - up, right, left, down
	dLen = dir.length;
	newR = startR;
	newC = startC;
	rowLength = matrix[0].length;
	for(var j = 0; j < dLen; j+=1){
		switch(dir[j]) {
			case 'up':
			newR = startR-1;
			break;
			case 'right':
			newC = startC + 1;
			break;
			case 'left':
			newC = startC - 1;
			break;
			case 'down':
			newR = startR+1;					
			break;			
		} //switch
		if(newR < 0 || newR > rowLength-1){ newR = startR; wallHits+=1; flag = 1;}
		if(newC < 0 || newC > mLen-1){ newC = startC; wallHits+=1; flag = 1;}
		startR = newR;
		startC = newC;		
			match = matrix[startR][startC];
		if (flag === 0) {
			sample = pattern.exec(match); 
			if(sample !== null){
			veg = sample[0]; 
			switch(veg) {
				case '{!}':
				car+=1;
				noVeg = 1;
				break;
				case '{*}':
				cab+=1;
				noVeg = 1;
				break;
				case '{&}':
				letu+=1;
				noVeg = 1;
				break;
				case '{#}':
				tur+=1;
				noVeg = 1;
				break;					
			}
			var coordLen = coord.length;

for (var s = 0; s < coordLen; s+=1){
	var newCoord = startR+'-'+startC;
	if(newCoord === coord[s]){
		coordFlag = 1;
	}
}
if (coordFlag === 0) {
	coord.push(newCoord);
	cells.push(match);
}
		}			
		
		//console.log(flag);
		flag = 0;

		//matrix[startR][startC]

		// var celLen = cells.length;
		// cellFlag = 0;
		// for(var c = 0; c< celLen; c+=1){
		// 	if(match === cells[c]){
		// 		cellFlag = 1;
		// 	}
		// }
		// if (cellFlag === 0) {			
		// 	cells.push(match);
		// }

	}
}
// 	var str = "Visit Microsoft!";
// var res = str.replace("Microsoft", "W3Schools"); 

str = '{"&": ' + letu+',"*": '+cab+',"#": '+tur+',"!": '+car+',"wall hits": '+wallHits+'}';
console.log(str);
celLen = cells.length;
if(celLen > 0){	
	for(var b = 0; b < celLen; b+=1){
		cells[b] = cells[b].replace(pattern, '@');
		cellStr += cells[b];
		if(b < celLen-1){
			cellStr += '|';
		}
	}
	console.log(cellStr);
}
else if (celLen === 0){
	cellStr = 'no';
	console.log(cellStr);
}

}
test = [
'right, right, down, left, left, down',
'qwe{!}kjs, a{*}s{&}da, mxz',
'q{#}w{!}ekjs, asda, xnc{*}a',
'qwe{#}kjs, as{#}da, xnca',
'qwekjs, as{#}{#}da, xnca',
]
solve(test);