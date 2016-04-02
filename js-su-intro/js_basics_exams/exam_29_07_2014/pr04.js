function solve(input){
	var courses = {};

	for(var i = 0; i < input.length; i++){
		var data = input[i].split('|');
		var name = data[0].trim();
		var course = data[1].trim();
		var grade = Number(data[2].trim());
		var  visits = Number(data[3].trim());

		if(!courses[course])
			courses[course] = {
				'avgGrade': 0,
				'avgVisits': 0,
				'students': [],
				'countingInputs':0

			};



			courses[course].avgGrade += grade;
			courses[course].avgVisits += visits;
			if(courses[course].students.indexOf(name) == -1)
				courses[course].students.push(name);
			courses[course].countingInputs ++;
		}


var courseKeys = Object.keys(courses).sort();

var outputArray = {};

for(var j = 0; j < courseKeys.length; j+=1){
	var currCourse = courseKeys[j];
	outputArray[currCourse] = courses[currCourse];
	outputArray[currCourse].students.sort();

	outputArray[currCourse].avgGrade = Number((outputArray[currCourse].avgGrade /= outputArray[currCourse].countingInputs).toFixed(2));
	outputArray[currCourse].avgVisits = Number((outputArray[currCourse].avgVisits /= outputArray[currCourse].countingInputs).toFixed(2));

	delete outputArray[currCourse].countingInputs;
	
}
		 console.log(JSON.stringify(outputArray));

	}
	test = [
'Milen Georgiev|PHP|2.02|2',
'Ivan Petrov|C# Basics|3.20|22',
'Peter Nikolov|C#|5.522|18',
'Maria Kirova|C# Basics|2.20|4',
'Stanislav Peev|C#|4.12|15',
'Ivan Petrov|PHP|5.120|6',
'Ivan Goranov|SQL|5.926|12',
'Todor Kirov|PHP|5.50|0',
'Maria Ivanova|Java|5.83|37',
'Maria Ivanova|C#|1.823|4',
'Stanislav Peev|C#|4.122|15',
'Ivan Petrov|PHP|5.11|6',
'Ivan Petrov|SQL|5.926|12',
'Peter Nikolov|Java|5.9996|9',
'Stefan Nikolov|Java|4.00|9',


	];

	solve(test);