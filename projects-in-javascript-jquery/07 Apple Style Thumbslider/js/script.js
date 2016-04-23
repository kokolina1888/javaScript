$(document).ready(function(){

	//declare variables
	var totalWidth = 0;
	var positions = new Array();

	$('#slides .slide').each(function(i){
	//get slider width
	positions[i] = totalWidth;
	totalWidth += $(this).width();


//check widths
if(!$(this).width()){
	alert('Please set width to your images!');
	return false;
}
//set width
$('#slides').width(totalWidth);
});

//menu item click handler
$('#menu ul li a').click(function(e, keepScroll){
	//remove active class and add inactive
	$('li.product').removeClass('active').addClass('inactive');
	
	//add active class to parent, (this) is the current link

	$(this).parent().addClass('active');

	var pos = $(this).parent().prevAll('.product').length;
	$('#slides').stop().animate({marginLeft: -positions[pos]+'px'}, 450);

	//prevent default
	e.preventDefault();

//stopping the autoscroll
if(!autoScroll) clearInterval(itvl);
});
//make first image active

$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

//autoscroll

var current = 1;
function autoScroll(){
	if(current == -1) return false;

	$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
	current+=1;

}
//duration for autoscroll
//duration is in seconds
var duration = 4;
//duration should be in milisec
var itvl = setInterval(function(){autoScroll();}, duration*1000);
});
// function scrollFooterMostPopularPosts() {
//         var $el =jQuery('ul.footer-popular-posts').find('li').first();
//         jQuery($el).animate({
//             marginTop: '-120'
//         }, 500, function () {
//             if($el.not(':first-child'))
//                 $el.prev().before($el);
//             //move element to end
//             jQuery($el).css({'margin-top': '0px'});
//             jQuery($el).parent().append($el);
//         });