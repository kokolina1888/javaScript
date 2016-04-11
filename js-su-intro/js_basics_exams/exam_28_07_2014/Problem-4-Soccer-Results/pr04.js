function solve(args){
	var input = args,
	len = input.length, team = {};
	for(var i = 0; i < len; i+=1){
		input[i] = input[i].split(/[\/:\-]/);
		homeTeam = input[i][0].trim();
		awayTeam = input[i][1].trim();
		homeGoals = +input[i][2].trim();
		awayGoals = +input[i][3].trim();
		if(!team[homeTeam]){
			team[homeTeam] = {
				'goalsScored': 0,
				'goalsConceded': 0,
				'matchesPlayedWith': []
			};
		}
		if(!team[awayTeam]){
			team[awayTeam] = {
				'goalsScored': 0,
				'goalsConceded': 0,
				'matchesPlayedWith': []
			};

		}

		team[homeTeam].goalsScored += homeGoals;
		team[homeTeam].goalsConceded += awayGoals;
		if(team[homeTeam].matchesPlayedWith.indexOf(awayTeam) == -1)
			team[homeTeam].matchesPlayedWith.push(awayTeam);
		
		team[awayTeam].goalsScored += awayGoals;
		team[awayTeam].goalsConceded += homeGoals;
		if(team[awayTeam].matchesPlayedWith.indexOf(homeTeam) == -1)
			team[awayTeam].matchesPlayedWith.push(homeTeam);
	}	
	
var teamKeys = Object.keys(team).sort();

var outputArray = {};

for(var j = 0; j < teamKeys.length; j+=1){
	var currTeam = teamKeys[j];
	outputArray[currTeam] = team[currTeam];
	outputArray[currTeam].matchesPlayedWith.sort();

	
	
}


	console.log(JSON.stringify(outputArray));

}

test = [
'Germany / Argentina: 1-0',
'Brazil / Netherlands: 0-3',
'Netherlands / Argentina: 0-0',
'Brazil / Germany: 1-7',
'Argentina / Belgium: 1-0',
'Netherlands / Costa Rica: 0-0',
'France / Germany: 0-1',
'Brazil / Colombia: 2-1',

];
solve(test);