function lonelyinteger(a) {
	// Write your code here
	let sorted = a.sort((a, b) => a - b);
	// [1, 1, 2, 2, 3, 3, 4]
	for (let i = 0; i < sorted.length; i++) {
		if (i === 0 && sorted[i] !== sorted[i + 1]) {
			return sorted[i];
		} else if (i === sorted.length - 1 && sorted[i] !== sorted[i - 1]) {
			return sorted[i];
		} else if (sorted[i] !== sorted[i - 1] && sorted[i] !== sorted[i + 1]) {
			return sorted[i];
		}
	}
}
