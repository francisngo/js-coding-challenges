function twoNumberSum(array, targetSum) {
	// two pointer approach
	let left = 0;
	let right = array.length - 1;
	array.sort((a, b) => a - b);
	while (left < right) {
		let sum = array[left] + array[right];
		if (sum === targetSum) {
			return [array[left], array[right]];
		} else if (sum < targetSum) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}

var array = [3, 5, -4, 8, 11, 1, -1, 6];
var targetSum = 10;

console.log(twoNumberSum(array, targetSum));
