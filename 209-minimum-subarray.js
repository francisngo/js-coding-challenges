/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

let minSubArray = function (nums, target) {
	let left = 0;
	let right = 0;
	let min = Infinity;
	let total = 0;
	while (left < nums.length) {
		if (total < target && right < nums.length) {
			total += nums[right++];
		} else if (total >= target) {
			min = Math.min(min, right - left);
			total -= nums[left];
			left++;
		} else {
			break;
		}
	}
	return min === Infinity ? 0 : min;
};

console.log(minSubArray([2, 3, 1, 2, 4, 3], 7));
