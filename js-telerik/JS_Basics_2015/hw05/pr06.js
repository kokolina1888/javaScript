//(x - center_x)^2 + (y - center_y)^2 < radius^2
//K({0,0}, 5)

var x,
	y,
	equation;

	x = 0;
	y = 5;

	equation = (x*x)+(y*y);


	if (equation < 25)
	{
		console.log('the point is in the circle');
	}
	else if (equation == 25){
		console.log('the point is on the circle');
	}
	else {
		console.log('the point is outside the circle');
	}