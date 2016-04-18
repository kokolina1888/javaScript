$(document).ready(function(){
	$("li:first-child").on('click', function(){
		$( "li:first-child" ).after( "<li>JQuery Insert</li>");
	});
	$('li:last-child').on('click', function(){
		$( "li:last-child" ).before( "<li>JQuery Insert</li>" );
	});
});