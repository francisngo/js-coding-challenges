function diagonalDifference(arr) {
	let length = arr.length;
	let diagonalOne = 0;
	let diagonalTwo = 0;
	for (let i = 0; i < length; i++) {
		diagonalOne += arr[i][i];
		diagonalTwo += arr[length - 1 - i][i];
	}

	return Math.abs(diagonalOne - diagonalTwo);
}
