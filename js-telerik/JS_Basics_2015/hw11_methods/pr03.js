/*Problem 3. Underage people

    Write a function that prints all underaged persons of an array of person
        Use Array#filter and Array#forEach
        Use only array methods and no regular 
        loops (for, while)*/
        var arr = [ { names: 'ivan', age: 115, gender: true },
      { names: 'petur', age: 12, gender: false },
        { names: 'george', age: 11, gender: false },
        { names: 'george', age: 115, gender: false }];
       
        function printUnderaged(arr, func) {
        	console.log(arr.filter(func));
        }
        function is18(age, index) {
        	var num = arr[index].age;
        	console.log(num);
        	console.log(index);
        	if( num < 18){
        		return age;
        	}
        }
        printUnderaged(arr, is18);

