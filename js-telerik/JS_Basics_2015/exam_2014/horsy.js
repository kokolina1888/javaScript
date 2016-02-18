function solve(args){
	//number of rows and cols 
var rowsCols = args[0].split(' '),
	bounds = {
		rows: +rowsCols[0],
		cols: +rowsCols[1]
	},
	matrix = args.slice(1).map(function(line){
		return line.split('');

	}),
	len = matrix.length,
	row = bounds.rows - 1,
	col = bounds.cols - 1,
	sum = 0,
	jumps = 0,
	deltas = [],
	matrixGen = [],	
	dir, i, j, k;
	for (i=0; i  < len; i+=1 ) {
		matrix[i] = matrix[i].map(Number);
	}

	//rows
	deltas[0] = [0, -2, -1, 1, 2, 2, 1, -1, -2];
	//cols
	deltas[1] = [0, 1, 2, 2, 1, -1, -2, -2, -1];

	for(j = 0; j <= row; j++){
		matrixGen[j]=[];
		matrixGen[j][0] = Math.pow(2, j);			
		for(k = 1; k <= col; k++) {
			matrixGen[j][k] = matrixGen[j][k-1] - 1; 
		}
	}

		

	while (1) {
		//console.log(col + ' col ' + row + ' row');
		if(!matrix[row]||!matrix[row][col]) {
			return 'Go go Horsy! Collected ' + sum + ' weeds'; 
		}
		if(matrix[row][col] === 'visited'){
			return 'Sadly the horse is doomed in ' + jumps + ' jumps';
		}

		sum += matrixGen[row][col];

		jumps+= 1;
		dir = matrix[row][col];
		matrix[row][col] = 'visited';
		//uodate row col
		row += deltas[0][dir];
		col += deltas[1][dir];	

	}

	}
var tests =[
[  '3 5',
  '54561',
  '43328',
  '52388' 
],
[
'3 5',
  '54361',
  '43326',
  '52188']
];
tests.forEach(function(test){
	console.log(solve(test));
});