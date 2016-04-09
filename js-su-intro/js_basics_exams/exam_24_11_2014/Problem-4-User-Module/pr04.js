function solve(args){
	var crit = args[0].split('^'),
	info = args.splice(0, 1), len = args.length,
	res = {students:[], trainers:[]}, p;
//output 
//{"id":0,"firstname":"Angel","lastname":"Ivanov","averageGrade":"5.89","certificate":false
//{"id":0,"firstname":"Georgi","lastname":"Ivanov","town":"Plovdiv","grades":["5.89"],"level":2,"certificate":false}
//":[{"id":1,"firstname":"Mitko","lastname":"Nakova","courses":["PHP","Unity Basics"],"lecturesPerDay":6}
//{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","courses":["PHP","Unity Basics"],"lecturesPerDay":6}
	for(var i = 0; i < len; i+=1){
		var currObj = JSON.parse(args[i]);


		var currentRole = currObj.role;
		if (currentRole === 'student') {
			delete currObj.role;
			res.students.push(currObj);

		}
		else if(currentRole === 'trainer'){
			delete currObj.role;
			res.trainers.push(currObj);
		}
	}

	var stLen = res.students.length;
	var stKey = [];
	var stCrit = crit[0];
//If the students criteria is to sort them by name, 
//you should sort them by first name and as 
//second condition by last name.
//If the student`s criteria is to sort them by level, 
//you should sort them by level and 
//as second condition by id. 
var keyFirst = [];
var outputArr = {students:[], trainers:[]};
var wh = 0;	
var indexes = [];
var min = keyFirst[0];	


if(stCrit === 'level'){
	for(var p = 0; p < stLen; p+=1){
		keyFirst.push(p);
		keyFirst.push(res.students[p].level);
		keyFirst.push(res.students[p].id);		
	}	
	var tlen = keyFirst.length;

	//var q = 0;
	
	while(tlen > 0) {


		minInd = keyFirst[0];
		minLev = keyFirst[1];
		minId = keyFirst[2];

//checking keyFirst
currLen = keyFirst.length;

for(var s = 3; s < currLen; s+=3){	
	if(minLev===keyFirst[s+1]){		
		if(minId > keyFirst[s+2]){
			minLev = keyFirst[s+1];
			minId = keyFirst[s+2];
			minInd = keyFirst[s];
			wh = s;
		}

	} 
	else if(minLev > keyFirst[s+1]){		
		minLev = keyFirst[s+1];
		minId = keyFirst[s+2];
		minInd = keyFirst[s];
		wh = s;
	}
}

indexes.push(minInd);
delete keyFirst[wh];
delete keyFirst[wh+1];
delete keyFirst[wh+2];

keyFirst = keyFirst.filter(function(n){ return n !== undefined;});

minInd = keyFirst[0];


tlen = keyFirst.length;


}

}
else if(stCrit === 'name'){
	for(var pp = 0; pp < stLen; pp+=1){
		keyFirst.push(pp);
		keyFirst.push(res.students[pp].firstname);
		keyFirst.push(res.students[pp].lastname);		
	}	
	var ttlen = keyFirst.length;
	//var q = 0;
	
	while(ttlen > 0) {
		var wT = 0;
		minInd 		= keyFirst[0];
		minFName 	= keyFirst[1];
		minLName 	= keyFirst[2];
		
		
		for(var ss = 3; ss < ttlen; ss+=3){	
			var n = keyFirst[ss+1].localeCompare(minFName);
			//console.log(n);
			if(n===0){		
				var nn = keyFirst[ss+2].localeCompare(minLName);
				if(nn === -1){					
					minFName = keyFirst[ss+1];
					minLName = keyFirst[ss+2];
					minInd = keyFirst[ss];
					w = ss;
				}//nn
			} else if(n===-1){		
				minFName = keyFirst[ss+1];
				minLName = keyFirst[ss+2];
				minInd = keyFirst[ss];	
				w = ss;		
			} else if(n===1){
				console.log('yes');
			}
		}

		indexes.push(minInd);
		delete keyFirst[w];
		delete keyFirst[w+1];
		delete keyFirst[w+2];
		keyFirst = keyFirst.filter(function(n){ return n !== undefined;});
		ttlen = keyFirst.length;

	}//while
}//if



//The trainers - quantity - courses
// and - lectures per day.
//courses":["PHP","Unity Basics"],"lecturesPerDay":6

var keyTrainers = [];
var trainIndexes = [];
var trainMin = keyTrainers[0];	
var trainerLen = res.trainers.length;


for(var ppp = 0; ppp < trainerLen; ppp+=1){
	keyTrainers.push(ppp);
	var numCourses = res.trainers[ppp].courses.length;
	keyTrainers.push(numCourses);
	keyTrainers.push(res.trainers[ppp].lecturesPerDay);		
}	
var trLen = keyTrainers.length;

while(trLen > 0) {
	var wT = 0;
	trainMin	= keyTrainers[0];
	minCourses 	= keyTrainers[1];
	minLect 	= keyTrainers[2];

	for(var sss = 3; sss < trLen; sss+=3){	
		if(minCourses===keyTrainers[sss+1]){		
			if(minLect > keyTrainers[sss+2]){
				minCourses 	= keyTrainers[sss+1];
				minLect 	= keyTrainers[sss+2];
				trainMin	= keyTrainers[sss];
				wT 			= sss;
			}

		} 
		else if(minCourses > keyTrainers[sss+1]){		
			minCourses 	= keyTrainers[sss+1];
			minLect 	= keyTrainers[sss+2];
			trainMin	= keyTrainers[sss];
			wT 			= sss;
		}
	}

	trainIndexes.push(trainMin);
	delete keyTrainers[wT];
	delete keyTrainers[wT+1];
	delete keyTrainers[wT+2];

	keyTrainers = keyTrainers.filter(function(n){ return n !== undefined;});

	trLen = keyTrainers.length;
}

for(var ii=0; ii<stLen; ii+=1){
	delete res.students[indexes[ii]].town;
	delete res.students[indexes[ii]].level;
	outputArr.students.push(res.students[indexes[ii]]);
}

for(var iii=0; iii<trainerLen; iii+=1){
	delete res.trainers[trainIndexes[iii]].town;
	outputArr.trainers.push(res.trainers[trainIndexes[iii]]);
}

		 console.log(JSON.stringify(outputArr));




}
test = [
'level^courses',
'{"id":0,"firstname":"Georgi","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
'{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
'{"id":2,"firstname":"Angel","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
'{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
'{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}',
];
solve(test);