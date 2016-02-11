var people = [
  { firstname : 'Gosho1', lastname: 'Petrov', age: 32 }, 

  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Gosho1', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Bay1', lastname: 'Ivan', age: 81},
  { firstname : 'Gosho1', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Bay1', lastname: 'Ivan', age: 32},
  { firstname : 'Gosho1', lastname: 'Petrov', age: 32 }, 
   ];

  function group(arr, prop) {
  	var arrNew = [],
  	checker = [],
  	index = 0,
  	flag = 0,
  	len, j, i;
               
  while (len !== 0) {
  		checker[0] = arr[0];
  		for (i = 0; i < arr.length; i++) {
  			if (checker[0][prop] == arr[i][prop]) {
  				arrNew[index] = arr[i];
  				arr.splice(i, 1);
  				flag = 1;
  				index++;
  			}
  		
  	}
  	len = arr.length;
  }
  	if (flag === 0) {
  		console.log('no grouping');
  	} else {
  		return arrNew;
  	}
  }
console.log(group(people, 'age'));