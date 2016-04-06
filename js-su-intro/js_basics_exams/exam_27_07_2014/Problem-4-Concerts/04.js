function solve(args){
	var input = args, len, towns = {}, band, date, venue;
	len = input.length;

	for(var i = 0; i < len; i+=1){
		var currentVenue = input[i];
		currentVenue = currentVenue.split('|');
		band = currentVenue[0].trim();
		town = currentVenue[1].trim();

		venue = currentVenue[3].trim();
		//console.log(venue);

		if(!towns[town]){
			towns[town]= {};
			

		}
		



		if(!towns[town].hasOwnProperty(venue)){
			towns[town][venue] = [];   
		}
		if (towns[town][venue].indexOf(band)===-1) {
			towns[town][venue].push(band);
		}
	}
// function sortObject(o) {
//     var sorted = {},
//     key, a = [];

//     for (key in o) {
//         if (o.hasOwnProperty(key)) {
//             a.push(key);
//         }
//     }

//     a.sort();

//     for (key = 0; key < a.length; key++) {
//         sorted[a[key]] = o[a[key]];
//     }
//     return sorted;
// }

var townsKeys = Object.keys(towns).sort();
var outputArray = {};

for(var j = 0; j < townsKeys.length; j+=1){
	var currTown = townsKeys[j];
	outputArray[currTown] = towns[currTown];	

	var venuesKeys = Object.keys(towns[currTown]).sort();
	var sorted = {};
	var result = {};
	for (var key = 0; key < venuesKeys.length; key++) {
		sorted[venuesKeys[key]] = towns[currTown][venuesKeys[key]].sort();
	}
	outputArray[currTown] = sorted;
	
}

console.log(JSON.stringify(outputArray));

}
test = [
'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
'Helloween | London | 28-Jul-2014 | Wembley Stadium',
'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
'Metallica | London | 03-Oct-2014 | Olympic Stadium',
'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium',

];

solve(test);