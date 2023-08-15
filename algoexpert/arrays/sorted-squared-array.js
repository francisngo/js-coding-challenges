function sortedSquaredArray(array) {
	let left = 0;
	let right = array.length - 1;

	let result = [];

	while (left <= right) {
		let first = array[left] ** 2;
		let second = array[right] ** 2;

		if (second > first) {
			result.unshift(second);
			right--;
		} else {
			result.unshift(first);
			left++;
		}
	}

	return result;
}

var array = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray(array));
