function divisibleSumPairs(n, k, ar) {
	let output = 0;
	for (let i = 0; i < ar.length; i++) {
		for (let j = i + 1; j < ar.length; j++) {
			if ((ar[i] + ar[j]) % k === 0) {
				output++;
			}
		}
	}
	return output;
}
