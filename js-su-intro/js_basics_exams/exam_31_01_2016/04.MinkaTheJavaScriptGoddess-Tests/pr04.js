function solve(args){

	//Name & Type & Task Number & Score & Lines of code

	//{"Task 1":{"tasks":[{"name":"Fit box in box","type":"conditionals"},
	//{"name":"Torrent Pirate","type":"calculations"}],
	//"average":100,"lines":115}
	var tasks = {}, task, input = args;

	input.forEach(function (inputLine) {
		var inputTokens = inputLine.split('&'),
		name 		= inputTokens[0].trim(),
		type 		= inputTokens[1].trim(),
		taskNumber 	= 'Task '+inputTokens[2].trim(),
		score 		= +inputTokens[3],
		linesCode	= +inputTokens[4],
		currTask 	= {
			'name':name,
			'type': type
		};



		if(!tasks[taskNumber]){
			tasks[taskNumber] = {
				'tasks'			:[],
				'average'		:0,
				'lines'			:0,
				'numberOfTasks'	:0

			};
		}
		tasks[taskNumber].tasks.push(currTask);
		tasks[taskNumber].lines+=linesCode;
		tasks[taskNumber].average+=score;

		tasks[taskNumber].numberOfTasks+=1;


	});
	var taskKeys = Object.keys(tasks);

	taskKeys.forEach(function(key){
		tasks[key].average = parseFloat(tasks[key].average/tasks[key].numberOfTasks);
		tasks[key].average = Math.round(tasks[key].average*100)/100;

		delete tasks[key].numberOfTasks;
		tasks[key].tasks.sort(function (a, b) {
			return a.name.localeCompare(b.name);
		});
	});
//SORT OBJECT OF OBJECTS!!!
	//sort by average score, in descending order
	//sort by sort by total number of lines asc

	var keysSorted = Object.keys(tasks).sort(function (a, b) {
		if (tasks[a].average == tasks[b].average) {
			return tasks[a].lines - tasks[b].lines;
		}

		return tasks[b].average - tasks[a].average;
	});


	var sortedObject = {};
	keysSorted.forEach(function (el) {
		sortedObject[el] = tasks[el];
	});


	console.log(JSON.stringify(sortedObject));

}

test = [
'Array Matcher & strings & 4 & 100 & 38',
'Magic Wand & draw & 3 & 100 & 15',
'Dream Item & loops & 2 & 88 & 80',
'Knight Path & bits & 5 & 100 & 65',
'Basket Battle & conditionals & 2 & 100 & 120',
'Torrent Pirate & calculations & 1 & 100 & 20',
'Encrypted Matrix & nested loops & 4 & 90 & 52',
'Game of bits & bits & 5 &  100 & 18',
'Fit box in box & conditionals & 1 & 100 & 95',
'Disk & draw & 3 & 90 & 15',
'Poker Straight & nested loops & 4 & 40 & 57',
'Friend Bits & bits & 5 & 100 & 81',

];

solve(test);