//Problem 4. Average age of females
//    Write a function that calculates the average age of all females, extracted from an array of persons
//    Use Array#filter
//    Use only array methods and no regular loops (for, while)

var arr = [ { names: 'ivan', age: 115, gender: 1 },
{ names: 'liv', age: 12, gender: 0 },
{ names: 'amy', age: 21, gender: 0 },
{ names: 'pepper', age: 11, gender: 0 }];

function printUnderaged(arr, func) {        	
	var newArr = arr.filter(func);
	return newArr;        	
}
function is18(gender, index) {
	var gen = arr[index].gender;
	console.log(gen);
	console.log(index);
	if( gen === 0){
		return gender;
	}
}

var newAr = printUnderaged(arr, is18);
var result = newAr.filter(function(obj) {
  return obj.age;
});

console.log(result);