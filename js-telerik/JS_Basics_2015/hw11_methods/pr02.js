//Problem 2. People of age
//Write a function that checks if 
//an array of person contains only people of 
//age (with age 18 or greater)
//Use only array methods and no regular 
//loops (for, while)

var arr = [ { names: 'ivan', age: 115, gender: true },
			{ names: 'petur', age: 32, gender: false },
			{ names: 'george', age: 115, gender: false } ];

function printIsEvery(arr, func) {
	console.log(arr.every(func));
}

function isGreaterThan18(age, index) {
	num = arr[index].age;

	return num > 18;
}

printIsEvery(arr, isGreaterThan18);
