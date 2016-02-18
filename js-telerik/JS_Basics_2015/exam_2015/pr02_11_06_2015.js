function solve(args){
	var rooks = ['l', 'r', 'u', 'd'],
	queen = ['l', 'r', 'u', 'd', 'ul', 'ur', 'dl', 'dr'],
	bishop = ['ul', 'ur', 'dl', 'dr'],
	deltas = {
		l:-1,
		r:+1,
		u:1,
		d:-1},
		cols = args[1],
		rows = args[0],
		matrix = args.slice(2),
		matrixChess = [],
		num = rows+2,
		numMoves = args.slice(num),
		temp = [], 
		moves = numMoves[0],
		lenTemp,
		movesMatrix, 
		newMatrix = [],
		i, j, p, q, s, from = [], to = [], f, fRow, 
		t, tRow, dir;

		for(i = 0; i<rows; i++){
			matrixChess[i] = matrix[i].split('');
		}
		newMatrix = numMoves.slice(1).map(function(line){
			return line.split(' ');
		});
		for(p=0; p<moves; p++){
			from[p]=newMatrix[p][0].split('');
			to[p]=newMatrix[p][1].split('');
		}

//converting letter rows to number rows
for(s=0; s<moves; s++){
	//0 = col 1= row
	f = from[s][0];
	fRow = f.charCodeAt(0);
	from[s][0] = fRow-97;
	from[s][1] = (+from[s][1]-rows);
	if(from[s][1]!==0){
		from[s][1]*=-1;
	}

	//0 = col 1= row
	t = to[s][0];
	tRow = t.charCodeAt(0);
	to[s][0] = tRow-97;
	to[s][1] = +to[s][1]-rows;
	if(to[s][1]!==0){
		to[s][1]*=-1;
	}

}

console.log('from');
console.log(from);
console.log('to');
console.log(to);
console.log(matrixChess);

//direction TO DO

//get the value of fro from the moves
for(q=0; q<moves; q++){
	//console.log(matrixChess[from[q][1]][from[q][0]]);
	if(matrixChess[from[q][1]][from[q][0]]==='-'||matrixChess[to[q][1]][to[q][0]]===matrixChess[from[q][1]][from[q][0]]){
		console.log('no');} else {
			console.log(matrixChess[from[q][1]][from[q][0]]);
		}
		
}

}
/*var tests = [
//r - number of rows
3,
//c- num cols
4,
//rooks
'--R-',
//a3b3c3d3
//bishop
'B--B',
//a2b2c2d2
//queen
'Q--Q',
//a1b1c1d1
//t  - num moves to be checked
12,
//move from - to
'd1 b3',
'a1 a3',
'c3 b2',
'a1 c1',
'a1 b2',
'a1 c3',
'a2 b3',
'd2 c1',
'b1 b2',
'c3 b1',
'a2 a3',
'd1 d3'
];*/
var tests = [
5,
5,
'Q---Q',
'-----',
'-B---',
'--R--',
'Q---Q',
'10',
'a1 a1',
'a1 d4',
'e1 b4',
'a5 d2',
'e5 b2',
'b3 d5',
'b3 a2',
'b3 d1',
'b3 a4',
'c2 c5'
];
console.log(solve(tests));