//Problem 1. Make person
//Write a function for creating persons.
//Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders

function createPerson(arr1, arr2, arr3) {
	var persons = [],
		len,
		i;
		len = arr1.length;

		for (i = 0; i < len; i++) {
			console.log('arr1 ' + arr1[i]);
			console.log('arr2 ' + arr2[i]);
			console.log('arr3 ' + arr3[i]);

			persons[i] = {names:arr1[i], age:arr2[i], gender:arr3[i]};

		}

		return persons;
}

names 	= ['ivan', 'petur', 'george'];
age 	= [22, 32, 36];
gender 	= [true, false, false];

console.log(createPerson(names, age, gender));