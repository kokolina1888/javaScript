//array of n elements. 
//string in the format 
//"[car model] [fuel type] [route number] [luggage weight]". 
//"BMW diesel 1 54.5" 
function solve(args){
	var elements = args,
	num = elements.length,
	lugageFuel,
	baseFuel = [],
	snowyFuel, fuel, luggage;

	for(var i = 0; i < num; i+= 1){
		elements[i] = elements[i].split(' ');
	}

	for(var j = 0; j < num; j+= 1){
		luggage = parseFloat(elements[j][3]);
//100 km
lugageFuel = luggage*0.01;
fuel = 10 + lugageFuel;

fuel = lugageFuel + 10;
snowyFuel = 0.3*fuel;

if(elements[j][2] === '1'){

	baseFuel[j] = 110*fuel/100;
	

	snowyFuel = snowyFuel*10/100;
	baseFuel[j] += snowyFuel;


}
else if(elements[j][2] === '2'){

	baseFuel[j] = 95*fuel/100;
	
	snowyFuel = snowyFuel*30/100;
	baseFuel[j] += snowyFuel;



}

if(elements[j][1]==='gas'){
	baseFuel[j] = baseFuel[j]*1.2;
}
else if(elements[j][1] === 'diesel'){
	baseFuel[j] = baseFuel[j]*0.8;
}


baseFuel[j] = Math.round(baseFuel[j]);
console.log(elements[j][0] + ' ' + elements[j][1] + ' '+elements[j][2] + ' '+baseFuel[j])

}

	
}
test = ['BMW petrol 1 320', 'Golf petrol 2 150', 'Lada petrol 1 202', 'Mercedes petrol 2 312'];

solve(test);
