/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2
*/

let findMaxConsecutiveOnes = function (nums) {
	let count = 0;
	let maxCount = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			// increment the counts of 1
			count++;
			// find the maximum up to now
			maxCount = Math.max(maxCount, count);
		} else {
			// reset count of 1
			count = 0;
		}
	}
	return maxCount;
};
