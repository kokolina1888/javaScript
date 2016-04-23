$(document).ready(function(){
$('#slides').width(3600+'px');
function scrollFooterMostPopularPosts() {
	// $('#menu ul li a').click(function(e, keepScroll){
		var $el =$('ul#slides').find('li').first();
		jQuery($el).finish().animate({
			marginLeft: '-900px'
		}, 800, function () {
			if($el.not(':first-child'))
				$el.prev().before($el);
            //move element to end
            jQuery($el).css({'marginLeft': '0px'});
            jQuery($el).parent().append($el);
        });
	}
       setInterval(scrollFooterMostPopularPosts, 5000);

// 		if(!autoScroll) clearInterval(itvl);
// 		var current = 1;
// 		function autoScroll(){
// 			if(current == -1) return false;

// 			$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
// 			current+=1;

// 		}
// 		var duration = 4;
// //duration should be in milisec
// var itvl = setInterval(function(){autoScroll();}, duration*1000);



});