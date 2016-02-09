
  	//Write functions for working with shapes in standard
  	// Planar coordinate system.
    //Points are represented by coordinates P(X, Y)
    //Lines are represented by two points, 
    //marking their beginning and ending L(P1(X1,Y1), 
    	//P2(X2,Y2))
    //Calculate the distance between two points.
    //Check if three segment lines can form a triangle.
    var leng = [];
    leng[0] = [[0, 2], [2, 4]];
    leng[1] = [[5, 3], [7, 8]];
    leng[2] = [[1, 2], [0, 5]];

    function ifTriangle(len1) {
    	var distance = [], 
    	i, j, k;

    	for (i = 0; i < 3; i++) {
    		j = Math.pow((len1[i][0][0]-len1[i][0][1]), 2);
    		console.log('j' + j);    		

    		k = Math.pow((len1[i][1][0]-len1[i][1][1]), 2);
    		console.log('k' + k);    		

    		distance[i] = Math.sqrt(j + k);
    		console.log(distance[i]);    		
    	}

    	if ((distance[0] + distance[1]) > distance[2]) {
    		console.log('valid');
    	} else if ((distance[0] + distance[2]) > distance[1]) {
    		console.log('valid');
    	} else if ((distance[1] + distance[2]) > distance[0]) {
    		console.log('valid');
    	} else {
    		console.log('Not a valid');
    	}

    }

    ifTriangle(leng);

