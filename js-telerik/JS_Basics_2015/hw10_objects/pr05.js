 //Write a function that finds the 
 //youngest person in a given array of people and 
 //prints his/hers full name
//Each person has properties firstname, lastname and age.

var people = [
{ firstname : 'Gosho', lastname: 'Petrov', age: 3132 }, 
{ firstname : 'Bay', lastname: 'Ivanov', age: 2181},
{ firstname : 'Bay', lastname: 'Ivan', age: 1181}];


function youngest(arr) {
	var min = 0,
	index = 0,
	len, i;
	len = arr.length;

	for (i = 0; i < len; i++) {
		if (arr[i].age > min) {
			index = i;	
			min = arr[i].age;	
			
		} 
	}
	console.log('index '+ index);	
	console.log('min '+ min);	

	console.log(arr[index]['firstname'] + ' ' + arr[index]['lastname']);
}
youngest(people, 'age');