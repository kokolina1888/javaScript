//args[0] contains the numbers N, M and J. (J is number of jumps)
//args[1] contains the star position, R and C
//args[2] to args[2+J] contains the jumps. 
//(R, C) with jump (-2, 3), Joro will go to position (R-2, C+3).
function solve(args){
	var rowColJumps = args[0].split(' ').map(Number),
	n = rowColJumps[0], 
	m = rowColJumps[1],
	j = rowColJumps[2], 
	coordinates = args[1].split(' ').map(Number),
	row = coordinates[0], 
	col = coordinates[1], 
	sum = 0, 
	jumpsNumber = 0,
	deltas = args.slice(2),
	matrix = [],
	len = deltas.length,
	num = 1,
	ch = 0,
	i, p, q;
	
	for(i = 0; i<len; i++){
		deltas[i] = deltas[i].split(' ').map(Number);
	}

	
	for(p = 0; p<n; p+=1) {
		matrix[p] = [];
		for(q=0; q<m; q+=1){
			matrix[p][q]= num;
			num++;
		}
	}
	
	while (1) {

		if(!matrix[row]||!matrix[row][col]) {
			return 'escaped ' + sum; 
		}
		if(matrix[row][col] === 'visited'){
			return 'caught ' + jumpsNumber;
		}		
		sum += matrix[row][col];
		jumpsNumber+= 1;
		matrix[row][col] = 'visited';
		row+=deltas[ch][0];
		col+= deltas[ch][1];
		ch++;
		if(ch >= j){
				ch=0;		
		} 
	}
}
var test =[ 
'5 5 10',
'0 0',
'1 0',
'1 0',
'1 0',
'1 0',
'0 1',
'-1 0',
'-1 0',
'-1 0',
'-1 0',
'0 1'
];
console.log(solve(test));
// 186878489