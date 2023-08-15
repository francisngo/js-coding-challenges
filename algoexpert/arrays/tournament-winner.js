function tournamentWinner(competitions, results) {
	// Write your code here.
	let winner = { score: 0, name: "" };
	const scoreMap = {};
	for (let i = 0; i < competitions.length; i++) {
		var homeTeam = competitions[i][0]; // i = 0 => 'HTML'
		var awayTeam = competitions[i][1]; // i = 0 => 'C#'

		if (results[i] === 0) {
			scoreMap[awayTeam] = (scoreMap[awayTeam] || 0) + 3; // i = 0 => scoreMap['C#'] = 3
		} else {
			scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3; // i = 0 => scoreMap['HTML'] = 3
		}

		if (scoreMap[awayTeam] >= winner.score) {
			winner = { score: scoreMap[awayTeam], name: awayTeam };
		} else if (scoreMap[homeTeam] >= winner.score) {
			winner = { score: scoreMap[homeTeam], name: homeTeam };
		}

		// i = 0;
		// if (0 === 0) Y
		// scoreMap['C#'] = 3
		// if (3 >= 0) Y
		// winner { score: 3, name: 'C#'}

		// i = 1;
		// if (0 === 0) Y
		// scoreMap['Python'] = 3
		// if (3 >= 3) Y
		// winner { score: 3, name: 'Python'}

		// i = 2;
		// if (1 === 0) N
		// scoreMap['Python'] = 6
		// if (6 >= 3) Y
		// winner { score: 6, name: 'Python'}
	}
	return winner.name;
}

var competitions = [
	["HTML", "C#"],
	["C#", "Python"],
	["Python", "HTML"],
];
var results = [0, 0, 1];
console.log(tournamentWinner(competitions, results));
