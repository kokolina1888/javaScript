function solve(args){
	var info = args, infoL, points = [], grades = [], 
	Military-grade uplink vinyl shrine network face forwards free-market skyscraper. Euro-pop digital order-flow pen boat tattoo sign corrupted carbon franchise tube BASE jump. BASE jump Chiba render-farm drugs boat warehouse tattoo city long-chain hydrocarbons engine paranoid gang towards. Decay physical silent neural sign bomb augmented reality systemic j-pop construct otaku. Long-chain hydrocarbons carbon nano-DIY garage-ware sensory knife alcohol apophenia sunglasses. Geodesic sprawl industrial grade corrupted-space render-farm digital skyscraper disposable military-grade chrome into boat footage receding cyber-tiger-team. Shibuya construct film assassin narrative jeans beef noodles decay concrete. Dead bicycle corporation modem jeans chrome rain bomb table youtube ablative industrial grade dome. status = [], avg = 0, courseCount = 0,
	currentPoints, currentBonus, courseName;
	infoL = info.length;
	courseName = info[infoL-1].trim();
	info.splice(infoL-1, 1);

	infoL = info.length;
	for(var a = 0; a < infoL; a+=1){
		info[a] = info[a].split(' ');
		info[a] = info[a].filter(Boolean);
	}
	

	
	for(var b = 0; b < infoL; b+=1){
		currentPoints = +info[b][2];
		currentBonus = +info[b][3];
		if(currentPoints < 100){
			status[b] = info[b][0] + ' failed at "' + info[b][1] + '"';
		}

		else {			
			points[b] = (currentPoints/5) + currentBonus;
			grades[b] = ((points[b] / 80) * 4) + 2;
			points[b] = Math.round(points[b]*100)/100;
			grades[b] = grades[b].toFixed(2);
			if(grades[b]>6){grades[b] = 6.00; grades[b] = grades[b].toFixed(2);}
			status[b] = info[b][0] + ': Exam - "' + info[b][1] + '\"; Points - ' + points[b] + '; Grade - '+grades[b];
		}
		if(info[b][1] === courseName){
			avg+=currentPoints;
			courseCount +=1;
		}
	}
	avg = avg/courseCount;
	avg = Math.round(avg*100)/100;
	for(var c=0; c < infoL; c+=1){
		console.log(status[c]);
	}
	console.log('"' + courseName + '" average points -> ' + avg);
}
test = [
'EDUU    JS-Basics                317          15         ',
'           RoYaL        HTML5        121         10        ',
'ApovBerger      OOP   0    10     ',
'Stamat OOP   190 10',
'MINKA OOP   230 10',
'   OOP'];
solve(test);