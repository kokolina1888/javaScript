$(document).one('pageinit', function(){
	//add handler 
	//tap == click on mobile devises

	$('#submitAdd').on('tap', addRun);
/*
* Add a run
*/

function addRun(){
	//Get form values


	var miles = $('#addMiles').val();
	var date = $('#addDate').val();


	//Create 'run' obj

	var run = {
		date: date,
		miles: parseFloat(miles)
	};

	var runs = getRunsObject();

	//add run to runs array
	runs.push(run);

	alert('Run added'); 

	//set stringified object to local sorage

	localStorage.setItem('runs', JSON.stringify(runs));

	//redirect 

	window.location.href='index.html';

	return false;
}

/*
* GET THE RUNS OBJECT
*/

function getRunsObject(){
	// set runs array

	var runs = new Array();

	//get the current runs from local storage

	var currentRuns = localStorage.getItem('runs');

	//check if localStorage

	if(currentRuns!== null){
		//set to runs

		runs = JSON.parse(currentRuns);
	}

	//return run objacts

	return runs.sort(function(a, b){
		return new Date(b.date) - new Date(a.date);
	});


}
});