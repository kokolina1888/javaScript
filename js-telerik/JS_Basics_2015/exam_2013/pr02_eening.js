/*From (R, C) go l => (R, C-1)
From (R, C) go r => (R, C+1)
From (R, C) go u => (R-1, C)
From (R, C) go d => (R+1, C)
start(r, c)
 (N-1)*M to N*M.
*/
function solve(args){
	var rowsCols = args[0].split(' ').map(Number),
	//cols
	m = rowsCols[0],
//rows
	n = rowsCols[1],
	start = args[1].split(' ').map(Number),
	r = start[0],
	c = start[1],
	inputMatrix = args.slice(2),
	matrix = [],
	sum = 0,
	jumps = 0,
	num = 1,
	len = inputMatrix.length,
	p, l, dir;

	
for(l = 0; l<len; l++){
	inputMatrix[l] = inputMatrix[l].split('');
}

	
	for(p = 0; p<m; p+=1) {
		matrix[p] = [];
		for(q=0; q<n; q+=1){
			matrix[p][q]= num;
			num++;
		}
	}
	
while (1) {
		if(!matrix[r]||!matrix[r][c]) {
			return 'out ' + sum; 
		}
		if(matrix[r][c] === 'visited'){
			return 'lost ' + jumps;
		}	
	
		sum += matrix[r][c];

		matrix[r][c] = 'visited';
		jumps+= 1;
		dir = inputMatrix[r][c];
		if (dir == 'l') {
			c+= -1;
		} else if(dir == 'r'){
			c+= 1;
		} else if(dir == 'u'){
			r+=-1;
		} else if (dir == 'd'){
			r+=1;
		}
	}		

}
/*var test =
[
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"];*/
/*var test = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"
];*/

var test = [
"5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "lurlddud",
 "urrrldud",
 "ulllllll"
 ];
console.log(solve(test));
