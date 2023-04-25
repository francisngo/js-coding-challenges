function flippingMatrix(matrix) {
	// Write your code here

	// 2n x 2n matrix will always have 4 corners
	// for the upper left quadrant, we want to find the max of each of the four corresponding corners (e.g. 112, 119, 108, 62 are four corresponding corners, 42, 83, 98, 114, are another four corresponding corners)
	// loop through the matrix to get the location of each corners of the matrix
	// For each element in the corner, we want to get the max
	// at the end, we can add up all the numbers in the quadrant and that should give us the maximum sum

	let correspondingNumbers = [];
	// because we are storing the sums in the upper-left quadrant, we only need to iterate half of the array
	let halfLength = matrix.length / 2;
	let fullLength = matrix.length - 1;
	for (let i = 0; i < halfLength; i++) {
		for (let j = 0; j < halfLength; j++) {
			// on each iteration, collect all the corresponding numbers
			let firstCorner = matrix[i][j];
			let secondCorner = matrix[fullLength - i][j];
			let thirdCorner = matrix[i][fullLength - j];
			let fourthCorner = matrix[fullLength - i][fullLength - j];
			correspondingNumbers.push([
				firstCorner,
				secondCorner,
				thirdCorner,
				fourthCorner,
			]);
		}
	}

	// for each corresponding quadrant, return the max quadrant
	let maxQuadrant = correspondingNumbers.map((numbers) => {
		return Math.max(...numbers);
	});

	// find the max sum of the quadrant
	return maxQuadrant.reduce((acc, val) => {
		acc += val;
		return acc;
	}, 0);
}
