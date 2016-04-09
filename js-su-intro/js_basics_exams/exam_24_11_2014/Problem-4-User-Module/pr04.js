function solve(args){
	var crit = args[0].split('^'),
	info = args.splice(0, 1), len = args.length,
	res = {students:[], trainers:[]}, ws, wt;
	function avg(arr) {
		var sum = 0;
		arr.forEach(function (el) {
			sum += parseFloat(el);
		});

		return sum / arr.length;
	}
	
	for(var i = 0; i < len; i+=1){
		var currObj = JSON.parse(args[i]);	
		var currentRole = currObj.role;
		if (currentRole === 'student') {
			delete currObj.role;
			var el = currObj.grades;
			var theObj = {
				'id': currObj.id,
				'firstname': currObj.firstname,
				'lastname': currObj.lastname,
				'averageGrade': avg(el).toFixed(2),
				'certificate': currObj.certificate,
				'level': currObj.level
			};					
			res.students.push(theObj);
		}
		else if(currentRole === 'trainer'){
			delete currObj.role;
			res.trainers.push(currObj);
		}
	}

	var outputArr = {students:[], trainers:[]};
	//STUDENTS SORT
	var stLen = res.students.length;
	var stCrit = crit[0];
	var keyFirst = [];
	
	var indexes = [];

	//TRAINERS SORT
	var keyTrainers = [];
	var trainIndexes = [];
	var trainerLen = res.trainers.length;
	
	if(stCrit === 'level'){
		for(var p = 0; p < stLen; p+=1){
			keyFirst.push(p);
			keyFirst.push(res.students[p].level);
			keyFirst.push(res.students[p].id);	
			delete res.students[p].level;
		}	
		
		var tlen = keyFirst.length;


		while(tlen > 0) {
			minInd = keyFirst[0];
			minLev = keyFirst[1];
			minId = keyFirst[2];
			ws = 0;	

			for(var s = 3; s < tlen; s+=3){	
				if(minLev===keyFirst[s+1]){		
					if(minId > keyFirst[s+2]){
						minLev = keyFirst[s+1];
						minId = keyFirst[s+2];
						minInd = keyFirst[s];
						ws = s;
					}
				} 
				else if(minLev > keyFirst[s+1]){	
					
					minLev = keyFirst[s+1];
					minId = keyFirst[s+2];
					minInd = keyFirst[s];
					ws = s;
				}
			}
			indexes.push(minInd);

			delete keyFirst[ws];
			delete keyFirst[ws+1];
			delete keyFirst[ws+2];

			keyFirst = keyFirst.filter(function(n){ return n !== undefined;});
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
		while(ttlen > 0) {
			minInd 		= keyFirst[0];
			minFName 	= keyFirst[1];
			minLName 	= keyFirst[2];
			ws 			= 0;
			for(var ss = 3; ss < ttlen; ss+=3){	
				var n = keyFirst[ss+1].localeCompare(minFName);
				if(n===0){		
					var nn = keyFirst[ss+2].localeCompare(minLName);

					if(nn === -1){					
						minFName = keyFirst[ss+1];
						minLName = keyFirst[ss+2];
						minInd = keyFirst[ss];
						ws = ss;
					}//nn
				} else if(n===-1){		
					minFName = keyFirst[ss+1];
					minLName = keyFirst[ss+2];
					minInd = keyFirst[ss];	
					ws = ss;		
				} 
			}
			indexes.push(minInd);
			delete keyFirst[ws];
			delete keyFirst[ws+1];
			delete keyFirst[ws+2];
			keyFirst = keyFirst.filter(function(n){ return n !== undefined;});
			ttlen = keyFirst.length;

	}//while
}//if

for(var ppp = 0; ppp < trainerLen; ppp+=1){
	keyTrainers.push(ppp);
	var numCourses = res.trainers[ppp].courses.length;
	keyTrainers.push(numCourses);
	keyTrainers.push(res.trainers[ppp].lecturesPerDay);		
}	
var trLen = keyTrainers.length;
while(trLen > 0) {
	
	trainMin	= keyTrainers[0];
	minCourses 	= keyTrainers[1];
	minLect 	= keyTrainers[2];
	wt 			= 0;
	for(var sss = 3; sss < trLen; sss+=3){	
		if(minCourses===keyTrainers[sss+1]){		
			if(minLect > keyTrainers[sss+2]){
				minCourses 	= keyTrainers[sss+1];
				minLect 	= keyTrainers[sss+2];
				trainMin	= keyTrainers[sss];
				wt		= sss;
			} 
		} 
		else if(minCourses > keyTrainers[sss+1]){		
			minCourses 	= keyTrainers[sss+1];
			minLect 	= keyTrainers[sss+2];
			trainMin	= keyTrainers[sss];
			wt			= sss;
		}
	}
	trainIndexes.push(trainMin);
	delete keyTrainers[wt];
	delete keyTrainers[wt+1];
	delete keyTrainers[wt+2];
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
'{"id":0,"firstname":"Alex","lastname":"Daskalov","town":"Burgas","role":"student","grades":["2.00","4.65","5.09","3.95"],"level":2,"certificate":true}',
'{"id":1,"firstname":"Rosen","lastname":"Georgieva","town":"Sofia","role":"student","grades":["3.76","4.81","4.73"],"level":3,"certificate":true}',
'{"id":2,"firstname":"Zornica","lastname":"Dimitrova","town":"Varna","role":"student","grades":["3.46","4.72","5.21"],"level":2,"certificate":true}',
'{"id":3,"firstname":"Svetlin","lastname":"Nakova","town":"Pernik","role":"student","grades":["3.44","3.27","4.20","4.34","4.29"],"level":3,"certificate":true}',
'{"id":4,"firstname":"Julieta","lastname":"Petrova","town":"Varna","role":"trainer","courses":["Database","OOP","ASP.NET"],"lecturesPerDay":3}',
'{"id":5,"firstname":"Yuliq","lastname":"Petrov","town":"Pernik","role":"student","grades":["2.84","5.15","2.22"],"level":5,"certificate":false}',
'{"id":6,"firstname":"Zornica","lastname":"Daskalov","town":"Petrich","role":"student","grades":["5.16","3.24"],"level":4,"certificate":false}',
'{"id":7,"firstname":"Niki","lastname":"Dimitrova","town":"Ruse","role":"trainer","courses":["Java","PHP","iOS","C#","JS Apps"],"lecturesPerDay":5}',
'{"id":8,"firstname":"Angel","lastname":"Dimitrova","town":"Veliko Tyrnowo","role":"student","grades":["4.25","2.13"],"level":1,"certificate":false}',
'{"id":9,"firstname":"Ivailo","lastname":"Georgiev","town":"Veliko Tyrnowo","role":"trainer","courses":["Database","OOP"],"lecturesPerDay":4}',
'{"id":10,"firstname":"Hristiqn","lastname":"Petrova","town":"Varna","role":"trainer","courses":["JS Apps","SDA","iOS","OOP"],"lecturesPerDay":8}',
'{"id":11,"firstname":"Svetlin","lastname":"Nakova","town":"Burgas","role":"student","grades":["3.58","5.90","3.85"],"level":1,"certificate":false}',
'{"id":12,"firstname":"Kosio","lastname":"Georgieva","town":"Sliven","role":"student","grades":["4.34","2.53","3.20","4.20"],"level":3,"certificate":false}',
'{"id":13,"firstname":"Ivailo","lastname":"Nakova","town":"Sevlievo","role":"trainer","courses":["iOS","Database","HTML/CSS","C#","JS Apps"],"lecturesPerDay":6}',
'{"id":14,"firstname":"Ivailo","lastname":"Petrov","town":"Svishtov","role":"trainer","courses":["Unity Basics","OOP","C#","HTML/CSS"],"lecturesPerDay":6}',
'{"id":15,"firstname":"Bobi","lastname":"Georgiev","town":"Ruse","role":"student","grades":["3.28","4.95","4.07"],"level":3,"certificate":false}',
'{"id":16,"firstname":"Zornica","lastname":"Daskalov","town":"Burgas","role":"student","grades":["5.58"],"level":4,"certificate":false}',
'{"id":17,"firstname":"Deyan","lastname":"Dimitrova","town":"Svishtov","role":"trainer","courses":["iOS","JS Apps","JS OOP","PHP","OOP"],"lecturesPerDay":6}',
'{"id":18,"firstname":"Petq","lastname":"Daskalov","town":"Dimitrovgrad","role":"trainer","courses":["C#","JS","OOP"],"lecturesPerDay":2}',
'{"id":19,"firstname":"Gergana","lastname":"Nakov","town":"Vidin","role":"trainer","courses":["ASP.NET","HTML/CSS"],"lecturesPerDay":3}',
'{"id":20,"firstname":"Gergana","lastname":"Georgieva","town":"Dimitrovgrad","role":"student","grades":["3.38"],"level":4,"certificate":false}',
'{"id":21,"firstname":"Nasko","lastname":"Petrova","town":"Stara Zagora","role":"student","grades":["3.11","5.94","3.28","2.42"],"level":4,"certificate":true}',
'{"id":22,"firstname":"Vlado","lastname":"Dimitrov","town":"Svishtov","role":"student","grades":["2.23","5.74","2.01"],"level":3,"certificate":true}',
'{"id":23,"firstname":"Pesho","lastname":"Georgieva","town":"Petrich","role":"student","grades":["4.50","4.77","4.00","4.73"],"level":5,"certificate":false}',
'{"id":24,"firstname":"Vlado","lastname":"Nakov","town":"Petrich","role":"trainer","courses":["ASP.NET","JS","Database"],"lecturesPerDay":10}',
'{"id":25,"firstname":"Bobi","lastname":"Nakov","town":"Sofia","role":"trainer","courses":["JS Apps","OOP"],"lecturesPerDay":8}',
'{"id":26,"firstname":"Hristo","lastname":"Ivanov","town":"Gabrovo","role":"trainer","courses":["ASP.NET","Database","JS"],"lecturesPerDay":1}',
'{"id":27,"firstname":"Julieta","lastname":"Dimitrova","town":"Plovdiv","role":"trainer","courses":["JS OOP","Unity Basics"],"lecturesPerDay":1}',
'{"id":28,"firstname":"Qvor","lastname":"Petrov","town":"Sofia","role":"student","grades":["4.46","3.81","5.60","5.04"],"level":2,"certificate":true}',
'{"id":29,"firstname":"Hristiqn","lastname":"Dimitrova","town":"Plovdiv","role":"student","grades":["2.99","4.76","3.00","3.07"],"level":3,"certificate":true}',
'{"id":30,"firstname":"Vlado","lastname":"Dimitrova","town":"Veliko Tyrnowo","role":"student","grades":["3.09","2.72","4.55","4.90"],"level":4,"certificate":false}',
'{"id":31,"firstname":"Hristiqn","lastname":"Daskalov","town":"Ruse","role":"trainer","courses":["SDA","Database","JS Apps","C#","Java","JS OOP"],"lecturesPerDay":1}',
'{"id":32,"firstname":"Julieta","lastname":"Georgiev","town":"Vidin","role":"trainer","courses":["HTML/CSS","OOP","Java","Database","JS Apps","JS OOP"],"lecturesPerDay":6}',
'{"id":33,"firstname":"Alex","lastname":"Nakov","town":"Sevlievo","role":"trainer","courses":["Database","C#","JS Apps","SDA"],"lecturesPerDay":2}',
'{"id":34,"firstname":"Mariq","lastname":"Dimitrov","town":"Burgas","role":"student","grades":["2.38","3.80"],"level":2,"certificate":true}'];
solve(test);