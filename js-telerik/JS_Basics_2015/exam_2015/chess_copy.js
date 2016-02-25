function solve(args){
	var rows = +args[0],
	cols = +args[1],
	chessBoard = args.slice(2),
	newChessBoard = [],
	num = rows+2,
	numMoves = args.slice(num),
	moves = numMoves[0],
	from= [], to = [],
	fromMove= [], toMove = [],		
	newMatrix=[],
	dir=[], colFrom, rowFrom,
	colTo, rowTo, flag = 1,
	a, b, c, d, e, f;

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
	//DIRECTIONS
	for(d = 0; d < moves; d++){
	//l
	if(fromMove[d][0]===toMove[d][0]&&fromMove[d][1]<toMove[d][1]){
		dir[d] = 'r';
		//r
	}else if(fromMove[d][0] < toMove[d][0] && fromMove[d][1]==toMove[d][1]){
		
		dir[d] = 'l';
		//u
	}else if(fromMove[d][0]>toMove[d][0] && fromMove[d][1]===toMove[d][1]){		
		dir[d] = 'u';
		//d
	}else if(fromMove[d][0]<toMove[d][0] && fromMove[d][1]===toMove[d][1]){		
		dir[d] = 'd';
		//ul
	}else if(fromMove[d][0]>toMove[d][0] && fromMove[d][1]>toMove[d][1]){		
		dir[d] = 'ul';
		//ur
	}else if(fromMove[d][0]>toMove[d][0] && fromMove[d][1]<toMove[d][1]){		
		dir[d] = 'ur';
		//dl
	}else if(fromMove[d][0]<toMove[d][0] && fromMove[d][1]>toMove[d][1]){		
		dir[d] = 'dl';
		//dr
	}else if(fromMove[d][0]<toMove[d][0] && fromMove[d][1]<toMove[d][1]){		
		dir[d] = 'dr';
	}
	//console.log('move '+d + ' dir '+dir[d]);
	//console.log(fromMove[d][0] +' '+toMove[d][0]+' '+fromMove[d][1]+' '+toMove[d][1]);

}//end of directions
//test the moves
function check_cross_moves(direction, aa, bb, cc, dd){
	function check_flag(){
		if (flag===0) {
			console.log('no');
		} else {
			console.log('yes');
		}
		flag = 1;
	}
//FOR BETTER READING USE THIS VARIABLES
rowFrom = aa;
		//fromMove[e][0];
		rowTo = bb;
		//toMove[e][0];
		colFrom = cc;
		//fromMove[e][1];
		colTo = dd;
		//toMove[e][1];
		if(direction ==='u'){
			for(f = rowFrom-1; f >= rowTo; f--){
				if(chessBoard[f][colFrom] !== '-'){
					flag=0;
					break;
				} 					
			}
			check_flag();
			}//end of R 'u'
			if(direction ==='d'){
				for(f = rowFrom+1; f <= rowTo; f++){
					if(chessBoard[f][colFrom] !== '-'){
						flag=0;
						break;
					}						
				}
				check_flag();
			}//end of R 'd'
			if(direction ==='l'){
				for(f = colFrom-1; f >= colTo; f--){
					if(chessBoard[rowFrom][f] !== '-'){
						flag=0;
						break;
					} 						
				}
				check_flag();
			}//end of R 'l'
			if(direction ==='r'){
				for(f = colFrom+1; f <= colTo; f++){					
					if(chessBoard[rowFrom][f] !== '-'){
						flag = 0;
						break;
					} 						
				}		
						
				check_flag();
			}//end of R 'r'
		}//verifying allowed dir for R

		function check_diagonal_moves(direction, aa, bb, cc, dd){
			function check_flag(){
				if (flag===0) {
					console.log('no');
				} else {
					console.log('yes');
				}
				flag = 1;
			}
//FOR BETTER READING USE THIS VARIABLES
		rowFrom = aa;
		//fromMove[e][0];
		rowTo = bb;
		//toMove[e][0];
		colFrom = cc;
		//fromMove[e][1];
		colTo = dd;
		//toMove[e][1];
		if(direction ==='ul'){
			rowFrom--;
			colFrom--;
			while(rowFrom>=rowTo && colFrom>=colTo){				
				if(chessBoard[rowFrom][colFrom] !== '-'){
					flag = 0;
					break;
				}
				rowFrom--;
				colFrom--;
			}
			check_flag();
					}//end of B 'ul'
			if(direction ==='dl'){
				rowFrom++;
				colFrom--;
				while(rowFrom<=rowTo && colFrom>=colTo){
					//console.log(chessBoard[rowFrom][colFrom]);
					if(chessBoard[rowFrom][colFrom] !== '-'){
						flag = 0;
						break;
					} 
					rowFrom++;
					colFrom--;
				}
				check_flag();
			}//end of B 'dl'
			if(direction ==='ur'){
				rowFrom--;
				colFrom++;
				while(rowFrom>=rowTo && colFrom<=colTo){					
					if(chessBoard[rowFrom][colFrom] !== '-'){
						flag = 0;
						break;
					} 
					rowFrom--;
					colFrom++;
				}
				check_flag();
			}//end of B 'ur'
			if(direction ==='dr'){
				
				rowFrom++;
				colFrom++;
				while(rowFrom<=rowTo && colFrom<=colTo){	
							
					if(chessBoard[rowFrom][colFrom] !== '-'){
						flag = 0;
						break;
					} 
					rowFrom++;
					colFrom++;
				}
				check_flag();
			}//end of B 'dr'
		}

		for(e = 0; e<moves; e+=1){

			if(chessBoard[fromMove[e][0]][fromMove[e][1]] ==='-'){
				console.log('no');
			} else {
		//R
		if(chessBoard[fromMove[e][0]][fromMove[e][1]]==='R'){
			if(dir[e]==='u' || dir[e]==='d' || dir[e]==='l' || dir[e]==='r'){
				check_cross_moves(dir[e], fromMove[e][0], toMove[e][0], fromMove[e][1], toMove[e][1] );
		}//verifying allowed dir for R
		else {
			console.log('no');
		}
	}//end of R check

		//CHECK FOR Q 
		if(chessBoard[fromMove[e][0]][fromMove[e][1]]==='Q'){
			if(dir[e]==='ul' || dir[e]==='dl' || dir[e]==='ur' || dir[e]==='dr' || dir[e]==='u' || dir[e]==='d' || dir[e]==='l' || dir[e]==='r'){
				
				check_cross_moves(dir[e], fromMove[e][0], toMove[e][0], fromMove[e][1], toMove[e][1] );
				check_diagonal_moves(dir[e], fromMove[e][0], toMove[e][0], fromMove[e][1], toMove[e][1] );

			} else {
				console.log('no');
				}//end of dir check
			}//end of Q check
		//CHECK FOR B - TO DO
		if(chessBoard[fromMove[e][0]][fromMove[e][1]]==='B'){
			if(dir[e]==='ul' || dir[e]==='dl' || dir[e]==='ur' || dir[e]==='dr'){
				check_diagonal_moves(dir[e], fromMove[e][0], toMove[e][0], fromMove[e][1], toMove[e][1]);
			} else {
				console.log('no');
			}
	}//end of B check
	}//end of first else
}//end of first for



}

var tests = [
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
];
/*var tests = [
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
]*/
solve(tests);