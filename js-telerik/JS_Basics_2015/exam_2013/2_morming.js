function solve(input){
	var rowColsAndJumps = parseNumbers(input[0]),
	startPosition = parseNumbers(input[1]),
	rows = rowColsAndJumps[0],
	cols = rowColsAndJumps[1],
	allJumps = rowColsAndJumps[2],
	currentRow = startPosition[0],
	currentCol = startPosition[1],
	sumOfNubers = 0,
	totalJumps = 0,
	jumpsIndex = 0,
	currentJump,

	field,
	jumps,
	escaped;
return getAnswer();
function getAnswer(){
	field = initField();
	jumps = readJumps();
	escaped = false;
	while(true) {
		if(currentRow<0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
			escaped = true;
			break;
		}
		if(field[currentRow][currentCol] === 'X') {
			escaped = false;
			break;

		}
		sum += field[currentRow][currentCol];
		totalJumps++;
		currentJump = jumps[jumpsIndex++];
		if(jumpsIndex>=jumps.length){
			jumpsIndex = 0;
		}
		currentRow += currentJump.row;
		currentCol += currentJump.col; 

		field[currentRow][currentCol] = 'X';
	}

		return escaped ? 'escaped ' + sumOfNubers: 'caught ' + totalJumps;

	}
	function initField(){
		var field = [],
		counter = 1,
		i, j;
		for(i = 0; i < rows; i++){
			field[i] = [];
			for(j=0; j < cols; j++){
				field[i][j]=counter++;
			}
		}
	}

function readJumps(){
	var jumps = [];
	for( var i = 2; i < 2+allJumps; i++){
		var parsedJump = parseNumbers(input[i]);
		var currentJump = {
			row: parsedJump[0],
			col: parsedJump[1]	 
		};
		jumps.push(currentJump);
	}
	return jumps;
}

	function parseNumbers(input){
		return input.split(' ').map(Number);

	}
}
var test =[ 
	'6 7 3',
	'0 0',
	'2 2',
	'-2 2',
	'3 -1'
	];
	console.log(solve(test));