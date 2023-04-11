/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

let longestOnes = function (nums, k) {
	let output = 0;
	for (let left = 0, right = 0; right < nums.length; right++) {
		// k is given how many zeroes we can have
		// if we come across one, we decrement it
		if (nums[right] === 0) k--;

		// if k is less than 0 that means we have used up all our 0's, therefore if the left pointer's current value is 0, we shall increment our k and move the left pointer and keep doing so until k is no longer less than 0
		while (k < 0) {
			if (nums[left] === 0) k++;
			left++;
		}
		// right - left because that is how many consecutive 1's there are between right and left pointer
		output = Math.max(output, right - left + 1);
	}

	return output;
};
