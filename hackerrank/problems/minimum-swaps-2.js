function minimumSwaps(arr) {
	/*
	 *  input = [7, 1, 3, 2, 4, 5, 6]
	 *
	 *  indices  0  1  2  3  4  5  6
	 *  i = 0 : [6, 1, 3, 2, 4, 5, 7]
	 *  i = 1 : [5, 1, 3, 2, 4, 6, 7]
	 *  i = 2 : [4, 1, 3, 2, 5, 6, 7]
	 *  i = 3 : [2, 1, 3, 4, 5, 6, 7]
	 *  i = 4 : [1, 2, 3, 4, 5, 6, 7]
	 */

	let swap = 0;
	let index = 0;
	let temp;

	while (index < arr.length) {
		// if current number is not in it's 0-index location
		if (arr[index] != index + 1) {
			temp = arr[index];
			arr[index] = arr[arr[index] - 1];
			arr[temp - 1] = temp;
			swap++;
		} else {
			index++;
		}
	}
	return swap;
}
