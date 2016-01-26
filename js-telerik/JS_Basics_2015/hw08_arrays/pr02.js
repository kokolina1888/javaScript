var arrFirst,
	arrScnd,
	i;

	arrFirst = ['a', 'b', 'p', 'd', 'e', 'o'];
	arrScnd = ['l', 'o', 'w', 's', 'p', 'm'];

	for (i = 0; i <= 6; i++) {
		if (arrFirst[i] > arrScnd[i]) {
			console.log('arrFirst[' + i + ']' + '=' + arrFirst[i] );
		} else {
			console.log('arrScnd[' + i + ']' + '=' + arrScnd[i] );
		}
	}