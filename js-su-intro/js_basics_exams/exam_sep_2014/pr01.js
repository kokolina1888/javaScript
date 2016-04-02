// •	When happy, don Vlado tips for 10% of the bill
// •	When married, don Vlado tips for 0.05% of the bill
// •	When drunk, don Vlado tips for (15% of the bill)n, 
//where n is the first digit of the tip. (e.g. if the bill is 200, 30 is 15% of the bill. 
	//3 is the first digit of 30, so Don Vlado leaves the tip 303 = 30 * 30 * 30 = 27000)
// •	In every other scenario, don Vlado is simply grumpy and tips for only 5% of the bill
// Input
// The input data will be received as an array. 
//It contains two arguments – the first one is don Vlado’s bill. The second one is don Vlado’s mood.
// The input data will always be valid and in the format described. 
//There is no need to check it explicitly.
// Output
// The output consists of only one line – don Vlado’s tip, 
//rounded to 2 places after the decimal point. Use the toFixed() function.
// 
function solve(args){
	var bill = +args[0], mood = args[1], tips = 1, n, i, tip;

	if (mood === 'happy') {
		tips = bill*10/100;
	}
	else if(mood === 'married'){
		tips = bill*0.05/100;
	}
	else if(mood === 'drunk'){
		tip = bill*15/100;
		n = tip.toString()[0];
		for(i = 0; i<n; i+=1){
			tips *= tip;


		}
	}
	else {
		tips = bill*5/100;
	}	

tips = tips.toFixed(2);

return tips;

}

test = [
19841999.99,
'drunk'
];
test1 = [
1230.83,
'drunk'
]
test2 = [
716.00,
'bored'
];
console.log(solve(test));