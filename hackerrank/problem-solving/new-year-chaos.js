function minimumBribes(q) {
	let bribes = 0;
	for (let current = 0; current < q.length; current++) {
		// O(n)
		// current person's old position
		let original = q[current] - 1;
		// how many moves
		let moves = original - current;
		if (moves > 2) {
			console.log("Too chaotic");
			return;
		}
		if (moves <= 0) {
			// check each person starting from one person ahead of old position up until their current position
			for (let i = Math.max(0, original - 1); i < current; i++) {
				// O(logn)
				let start = q[i] - 1;
				if (start > original) {
					bribes++;
				}
			}
		}
	}
	console.log(bribes); // TC: O(nlogn)
}
