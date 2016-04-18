$(document).ready(function(){
	$('#change').on('click', function(){
		var cl = $('#cl').val();
		var color = $('#color').val();

		$('.'+cl).css('background-color', color);

		return false;
	});

	
});