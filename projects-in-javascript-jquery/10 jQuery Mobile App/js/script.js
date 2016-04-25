$(document).one('pageinit', function(){
	//display runs

	showRuns();

	//add handler 
	//tap == click on mobile devises

	$('#submitAdd').on('tap', addRun);

	//edit handler 
	//tap == click on mobile devises

	$('#submitEdit').on('tap', editRun);

	//delete handler 
	//tap == click on mobile devises

	$('#stats').on('tap', '#deleteLink', deleteRun);
	

	//set current handler 
	//tap == click on mobile devises

	$('#stats').on('tap', '#editLink', setCurrent);


	//clear handler 
	//tap == click on mobile devises

	$('#clearRuns').on('tap', clearRuns);

/*  
*
* show all runs on homepage
*
*/

function showRuns(){
//get runs object

var runs = getRunsObject();

//check if empty

if(runs!= '' && runs!= null){
	for(var i = 0; i < runs.length; i+=1){
		$('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date:</strong>'+runs[i]['date']+
			'<br><strong>Distance: </strong>'+runs[i]['miles']+'m<div class="controls">'+
			'<a href="#edit" id="editLink" data-miles="'+runs[i]['miles']+'" data-date="'+runs[i]['date']+'">Edit</a> | <a href="" id="deleteLink" data-miles="'+runs[i]['miles']+'" data-date="'+runs[i]['date']+'" onclick="return confirm(\'Are you sure?\')">Delete</a></div></li>');
	}
	$('#home').bind('pageinit', function(){
		$('#stats').listview('refresh');
	});
} else {
	$('#stats').html('<p>you have no logged runs</p>');
	
}
}
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

function editRun(){
//get current date
currentMiles = localStorage.getItem('currentMiles');
currentDate = localStorage.getItem('currentDate');

var runs = getRunsObject();

//loop through runs

for(var i =0; i<runs.length; i+=1){
	if(runs[i].miles == currentMiles && runs[i].date == currentDate){
		runs.splice(i, 1);
	}
	localStorage.setItem('runs', JSON.stringify(runs));
}


//

//Get form values


var miles = $('#editMiles').val();
var date = $('#editDate').val();


	//Create 'run' obj

	var update_run = {
		date: date,
		miles: parseFloat(miles)
	};


	//add run to runs array
	runs.push(update_run);

	alert('Run updated'); 

	//set stringified object to local sorage

	localStorage.setItem('runs', JSON.stringify(runs));

	//redirect 

	window.location.href='index.html';

	return false;

}

function clearRuns(){

	localStorage.removeItem('runs');
	$('#stats').html('<p>you have no logged runs</p>');
}

function deleteRun(){
//set ls items

localStorage.setItem('currentMiles', $(this).data('miles'));
localStorage.setItem('currentDate', $(this).data('date'));

//get current date
currentMiles = localStorage.getItem('currentMiles');
currentDate = localStorage.getItem('currentDate');

var runs = getRunsObject();

//loop through runs

for(var i =0; i<runs.length; i+=1){
	if(runs[i].miles == currentMiles && runs[i].date == currentDate){
		runs.splice(i, 1);
	}
	localStorage.setItem('runs', JSON.stringify(runs));
}


//



alert('Run deleted'); 


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

/*
*
* SET THE CURRENT CLICKED MILES AND DATE
*/
function setCurrent(){
	//set ls items

	localStorage.setItem('currentMiles', $(this).data('miles'));
	localStorage.setItem('currentDate', $(this).data('date'));

	//insert form fields

	$('#editMiles').val(localStorage.getItem('currentMiles'));
	$('#editDate').val(localStorage.getItem('currentDate'));
}
});