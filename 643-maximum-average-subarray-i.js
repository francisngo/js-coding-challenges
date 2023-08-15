/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:
Input: nums = [5], k = 1
Output: 5.00000

*/

let findMaxAverage = function (nums, k) {
	let currentSum = 0;
	for (let i = 0; i < k; i++) {
		currentSum += nums[i];
	}
	let maxSum = currentSum;
	for (let i = k; i < nums.length; i++) {
		// take the current sum, add the new current value and subtract the first value from the previous window
		// [1, 12, -5, -6] has a sum of 2
		// [12, -5, -6, 50] in this window, 1 is removed and 50 is added
		// hence why currentSum (which is 2) += 50 - 1 = 51
		currentSum += nums[i] - nums[i - k];
		maxSum = Math.max(maxSum, currentSum);
	}
	return maxSum / k;
};
