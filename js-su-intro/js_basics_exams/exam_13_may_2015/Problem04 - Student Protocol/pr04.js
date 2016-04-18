function solve(args){

	var exams = {},
	input = args, inputLen, student;

	input = input.map(function (inputLine) {
		return inputLine.replace(/\s+/g, ' ');
	});

	input.forEach(function (inputLine) {
		var inputTokens = inputLine.split(/[-:]/),
		name 		= inputTokens[0].trim(),
		result 		= +inputTokens[2].trim();
		if(result >= 0 && result <= 400){
			var	subject		= inputTokens[1].trim(),
			makeUpExams	= 0;

			if(!exams[subject]){
				exams[subject] = [];
			}

			student = {
				'name': name,
				'result': result,
				'makeUpExams': makeUpExams
			};
			var found = false;
			for(var i = 0; i < exams[subject].length; i++) {
				if (exams[subject][i].name == name) {
					found = true;
					exams[subject][i].makeUpExams+=1;				
					if(exams[subject][i].result < result){
						exams[subject][i].result = result;

					}

				}
			}
			if(found === false){
				exams[subject].push(student);
			}		}

		});
	var keys = Object.keys(exams);
	

	keys.forEach(function (key) {

   // console.log(exams[key]);


   exams[key].sort(function(a, b) {
   	if (a.result !== b.result) {
            return b.result - a.result;
        }
     if(a.makeUpExams!==b.makeUpExams){
     	return a.makeUpExams - b.makeUpExams;
     }
   	return a.name.localeCompare(b.name);
   });

});



	console.log(JSON.stringify(exams));



}
// test = [
// 'Peter Jackson - Java : 350',
// 'Jane - JavaScript : 200',
// 'Jane     -    JavaScript :     400',
// 'Simon Cowell - PHP : 100',
// 'Simon Cowell-PHP: 500',
// 'Simon Cowell - PHP : 200',
// ];

test = [
'Mila Kunis - C# : 200',
'Mila Kunis - Java : 100',
'                                  Mila Kunis                          -PHP : 350',
'                   Mila Kunis-HTML & CSS:400',
'Jessica Clement - C# : 200',
'Jessica Clement - Java : 100',
'Jessica Clement - Java : 100',
'Jessica Clement-PHP:300',

];

solve(test);