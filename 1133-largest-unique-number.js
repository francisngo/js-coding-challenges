/*
Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

Example 1:
Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

Example 2:
Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once.
*/

var largestUniqueNumber = function (nums) {
	const map = new Map();
	for (let num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}
	let max = -Infinity;
	for (let num of nums) {
		if (map.get(num) === 1) {
			max = Math.max(max, num);
		}
	}
	return max !== -Infinity ? max : -1;
};
