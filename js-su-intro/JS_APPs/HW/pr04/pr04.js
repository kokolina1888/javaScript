$(document).ready(function(){
	//SET OPTIONS

	var speed = 500, 				//fade speed
		autoswitch = true,			//auto slider option
		autoswitch_speed = 8000; 	//auto slider speed 8 sec

		//ADD INITIAL ACTIVE CLASS

		$('.slide').first().addClass('active');

		//Hide all slides

		$('.slide').hide();

		//Show first slide

		$('.active').show();
//NEXT HANDLER
$('#next').on('click', nextSlide);
$('#prev').on('click', prevSlide);
if (autoswitch===true) {
	setInterval(nextSlide, autoswitch_speed); 
}

//SWITCH TO THE NEXT SLIDE

function nextSlide(){
	$('.active').removeClass('active').addClass('oldActive');
	if($('.oldActive').is(':last-child')){
		$('.slide').first().addClass('active');
	}
	else {
		$('.oldActive').next().addClass('active');
	}
	$('.oldActive').removeClass('oldActive');
	$('.slide').fadeOut(speed);
	$('.active').fadeIn(speed);
}
function prevSlide(){
	$('.active').removeClass('active').addClass('oldActive');
	if($('.oldActive').is(':first-child')){
		$('.slide').last().addClass('active');
	}
	else {
		$('.oldActive').prev().addClass('active');
	}
	$('.oldActive').removeClass('oldActive');
	$('.slide').fadeOut(speed);
	$('.active').fadeIn(speed);

}
});

