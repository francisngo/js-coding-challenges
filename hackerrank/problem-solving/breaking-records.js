function breakingRecords(scores) {
	let maxCount = 0;
	let minCount = 0;
	let max = scores[0];
	let min = scores[0];
	for (let i = 1; i < scores.length; i++) {
		let score = scores[i];
		if (score < min && score !== min) {
			min = score;
			minCount++;
		} else if (score > max && score !== max) {
			max = score;
			maxCount++;
		}
	}
	return [maxCount, minCount];
}
