//searchbar handler
$(function(){
	var searchField = $('#query'),
	icon = $('#search-btn');


//focus event handler
$(searchField).on('focus', function(){
	$(this).animate({
		width:'100%'
	}, 400);
	$(icon).animate({
		right:'10px'
	}, 400);
});

//blur event handler
$(searchField).on('blur', function(){
	if(searchField.val()===''){
		$(searchField).animate({
			width: '45%'
		}, 400, function(){});
		$(icon).animate({
			right: '360px'
		}, 400, function(){});
	}
});
$('#search-form').submit(function(e){
 //prevent the form from submitting
 e.preventDefault();
});
});

function search(){
//clear rsults
$('#results').html('');
$('#buttons').html('');

//gget form input

q = $('#query').val();

//run get request on API
$.get(
	'https://www.googleapis.com/youtube/v3/search', {
		part: 'snippet, id',
		q: q,
		type: 'video',
		key: 'AIzaSyCjmbdDU7Ezi7xVmr5VRC4paDLH9vSA2LI'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
//log data
console.log(data);
$.each(data.items, function(i, item){
	var output = getOutput(item);

				//display results
				$('#results').append(output);
			});

var buttons = getButtons(prevPageToken, nextPageToken);

//display the buttons

$('#buttons').append(buttons);



}

);

}
//build output

function getOutput(item){
	var videoId =  item.id.videoId;
	var title = item.snippet.title;
	var thumb = item.snippet.thumbnails.high.url;
	var description = item.snippet.description;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;


//build output stream

var output = '<li>'+
'<div class="list-left">' +
'<img src="'+thumb+'">'+
'</div>'+
'<div class="list-right">'+
'<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>'+
'<small>By <span class="cTitle">'+channelTitle+'</span> on'+videoDate+'</small>'+
'<p>'+description+'</p>'+
'</div>'+
'</li>'+
'<div class="clearfix"></div>'+
'';
return output;



} 

//Next Page func

function nextPage(){
	var token = $('#next-button').data('token');
	var q = $('#next-button').data('query');


//clear rsults
$('#results').html('');
$('#buttons').html('');

//gget form input

q = $('#query').val();

//run get request on API
$.get(
	'https://www.googleapis.com/youtube/v3/search', {
		part: 'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyCjmbdDU7Ezi7xVmr5VRC4paDLH9vSA2LI'
	},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
//log data
console.log(data);
$.each(data.items, function(i, item){
	var output = getOutput(item);

				//display results
				$('#results').append(output);
			});

var buttons = getButtons(prevPageToken, nextPageToken);

//display the buttons

$('#buttons').append(buttons);
}

);



}


 
function prevPage(){
	var token = $('#prev-button').data('token');
	var q = $('#prev-button').data('query');


//clear rsults
$('#results').html('');
$('#buttons').html('');

//gget form input

q = $('#query').val();

//run get request on API
$.get(
	'https://www.googleapis.com/youtube/v3/search', {
		part: 'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyCjmbdDU7Ezi7xVmr5VRC4paDLH9vSA2LI'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
//log data
console.log(data);
$.each(data.items, function(i, item){
	var output = getOutput(item);

				//display results
				$('#results').append(output);
			});

var buttons = getButtons(prevPageToken, nextPageToken);

//display the buttons

$('#buttons').append(buttons);
}

);}
// build buttons
var btnoutput = '';
function getButtons(prevPageToken, nextPageToken){
	if(!prevPageToken){
		btnoutput = '<div class="button-container"><button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'" onclick="nextPage();">Next Page</button></div>';
	}
	else {
		btnoutput = '<div class="button-container"><button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'" onclick="prevPage()">'+
		'Previous Page</button><button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'" onclick="nextPage();">'+
		'Next Page</button></div>';
	}
	return btnoutput;
}