// The jumper can be anywhere in the array and is denoted by the "o" symbol. 
// You need to determine the movement of the jumper in iterations. 
// On each iteration the jumper moves one line down, pulled by gravity. Additionally, the jumper moves sideways by the wind on the current line.
// •	The ">" symbol means the wind is moving the jumper one position to the right. 
// •	The "<" symbol means the wind is moving the jumper one position to the left.
// The total direction of the wind on a single line may stack (e.g. ">>>" moves the jumper 3 positions to the right; "><<" moves the jumper 1 position to the left).
// See examples to better understand the motion of the jumper. 
// The jumper can move only through air (the "-" symbol). When the jumper hits the ground, water or a cliff, the jump is finished and you need to print the outcome of the jump.
// Input
// The input will be passed to the first JavaScript function found in your code as array of strings, each containing a symbol. The symbols are not separated by anything. The input data will always be valid and in the format described. 
// Output
// The output consists of two lines. The first line holds a string: "[landing place] ". There are 3 possible outcome messages:
// •	If you have landed on the ground ("_" symbol), you are well and alive: "Landed on the ground like a boss!"
// •	If you have landed in the water ("~" symbol), you have drowned: "Drowned in the water like a cat!"
// •	If you have landed on a cliff ("/", "\" or "|" symbol), you have died: "Got smacked on the rock like a dog!
// The second line holds the position (the row and col) of your landing.

function solve(args){
	var route = args,
		numRows = route.length, rowLength, startRow, startCol, currentRow, currentCol;
		


		//GET START POSITION

		for(var i = 0; i < numRows; i+= 1){
			rowLength = route[i].length;
			
			for(var j = 0; j < rowLength; j+=1){
				if(route[i][j] === 'o'){
					startRow = i;
					startCol = j;
					break;
				}
			}
		}
		
		//ITERATING THE LINESDOWN


currentCol = startCol;
		for(var k = startRow+1; k < numRows; k+= 1){
			rowLength = route[k].length;
			currentRow = k;			
			for(var m = 0; m < rowLength; m+= 1){
				if(route[k][m] === '>'){
					currentCol +=1;
				}
				else if(route[k][m] === '<')
					currentCol -=1;
			}
			//CHECK CURRENT POSITION
			if(route[k][currentCol] === '_'){
				
				console.log("Landed on the ground like a boss!");
				console.log(currentRow + ' '+ currentCol);				
				break;
			}
			else if(route[k][currentCol] === '~'){
				
				console.log("Drowned in the water like a cat!");
				console.log(currentRow + ' '+ currentCol);
				break;
			}
			else if(route[k][currentCol] === '/' || route[k][currentCol] === '\\' || route[k][currentCol] === '|'){
				
				console.log("Got smacked on the rock like a dog!");
				console.log(currentRow + ' '+ currentCol);				
				break;

			}
		}


		

}

test = [
'o----------/-------------', '-------->>/-->>-->><<----', '----------\\--->>>>-------', '-----------\\_________>---', '---------------------\\>--', '>>>>>>----------------\-<', '------>>>>------------/--', '---------------------/---', '--------------------/----', '-------------------/-----'];

solve(test);
