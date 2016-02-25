function solve(params){
	var rows = parseInt(params[0]),
	cols = parseInt(params[1]),
	tests = parseInt(params[rows + 2]),
	chessBoard = params.slice(2),
	num = rows+2,
	numMoves = params.slice(num),
	moves = numMoves[0],
	knightMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1],
	[2, -1], [1, -2], [-1, -2], [-2, -1]],
	queenMoves = [[-1, -1], [1, 1], [-1, 1], [1, -1], [0, -1], [0, 1], [1, 0], [-1, 0]],
	newChessBoard = [],
	from= [], to = [],
	fromMove= [], toMove = [],		
	newMatrix=[],
	dir=[], colFrom, rowFrom, resMove = [],
	colTo, rowTo, helperMove = [],
	a, b, c, d, e, f,
	i, move=[], kLen = knightMoves.length, 
	qLen = queenMoves.length, flag, kflag;

	
	//making the chessboard
	//MAKING THE CHESSBOARD
	for(a=0;a<rows; a++){
		newChessBoard[a] = chessBoard[a].split('');

	}
	newMatrix = numMoves.slice(1).map(function(line){
		return line.split(' ');
		});

	//FROM&TO
	for(b=0; b<moves; b++){
		fromMove[b]=[];
		toMove[b] = [];
		from[b] = newMatrix[b][0].split('');
		fromMove[b][0] = Math.abs(+from[b][1]-rows);
		fromMove[b][1] = from[b][0].charCodeAt(0)-97;
		to[b]=newMatrix[b][1].split('');
		toMove[b][0] = Math.abs(+to[b][1]-rows);
		toMove[b][1] = to[b][0].charCodeAt(0)-97;
	}

	//if a valid move
	for(c=0; c<moves; c+=1){		
	//console.log(c + ' ' +newChessBoard[fromMove[c][0]][fromMove[c][1]]);	
		if (newChessBoard[fromMove[c][0]][fromMove[c][1]] ==='-'){
			console.log('empty');
			} else if (newChessBoard[toMove[c][0]][toMove[c][1]] !=='-') {				
				console.log('no empty');
			} else {
				if(newChessBoard[fromMove[c][0]][fromMove[c][1]]==='Q'){
						//queenMoves = [[-1, -1], [1, 1], [-1, 1], [1, -1]],

					var fromDelta = Math.abs(fromMove[c][0]-toMove[c][0]);
					var toDelta = Math.abs(fromMove[c][1]-toMove[c][1]);

					helperMove[0] = fromMove[c][0];
					helperMove[1] = fromMove[c][1];
					
					if(fromDelta === toDelta){
						for(g = 0; g<4; g+=1){
					//		console.log(newChessBoard[fromMove[c][0]][fromMove[c][1]]);
							for(p = 0; p<fromDelta; p+=1){

								resMove[0] = helperMove[0]+queenMoves[g][0];
								resMove[1] = helperMove[1]+queenMoves[g][1];								
								//	console.log(newChessBoard[resMove[0]][resMove[1]]);
								if(resMove[0]===toMove[c][0]&&resMove[1]===toMove[c][1]){						
									flag = 1;
									console.log('yes');
								} 

								helperMove[0] = resMove[0];
								helperMove[1] = resMove[1];
									//CHANGE WHILE CONDITION
										}//end of forDelta
									}//if Delta
								} else {
									console.log('else case');								

								}//end of else delta						
								

								}//end of Q check

								else if(newChessBoard[fromMove[c][0]][fromMove[c][1]] ==='K'){

									for (var j = 0; j < kLen; j++) {
										resMove[0] = fromMove[c][0]+knightMoves[j][0];
										resMove[1] = fromMove[c][1]+knightMoves[j][1];
										if(resMove[0]===toMove[c][0]&&resMove[1]===toMove[c][1]){
											//console.log('yes');
											kflag = 1;
										}
									}

									if (kflag === 1) {
										console.log('yes');
									} else {
										console.log('no');
									}
									kflag = 0;			
								}
							}

						}


								//console.log(fromMove);
								//console.log(toMove);
								//console.log(newChessBoard);
								//console.log(newMatrix);


					}
					var test = [
					3,
					4,
					'--K-',
					'K--K',
					'Q--Q',
					12,
					'd1 b3',
					'a1 a3',
					'c3 b2',
					'a1 c1',
					'a1 b2',
					'a1 c3',
					'a2 c1',
					'd2 b1',
					'b1 b2',
					'c3 a3',
					'a2 a3',
					'd1 d3'];
						/*
						var test = [
						5,
						5,
						'Q---Q',
						'-----',
						'-K---',
						'--K--',
						'Q---Q',
						10,
						'a1 a1',
						'a1 d4',
						'e1 b4',
						'a5 d2',
						'e5 b2',
						'b3 d4',
						'b3 c1',
						'b3 d1',
						'c2 a3',
						'c2 b4',
						];*/
						solve(test);