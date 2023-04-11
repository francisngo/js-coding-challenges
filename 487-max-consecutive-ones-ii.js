/*
Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

Example 1:
Input: nums = [1,0,1,1,0]
Output: 4
Explanation: 
- If we flip the first zero, nums becomes [1,1,1,1,0] and we have 4 consecutive ones.
- If we flip the second zero, nums becomes [1,0,1,1,1] and we have 3 consecutive ones.
The max number of consecutive ones is 4.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 4
Explanation: 
- If we flip the first zero, nums becomes [1,1,1,1,0,1] and we have 4 consecutive ones.
- If we flip the second zero, nums becomes [1,0,1,1,1,1] and we have 4 consecutive ones.
The max number of consecutive ones is 4.
*/

// brute force approach
// we can allow one O within the consecutive run of 1s
// check every possible consecutive sequence
// count how many 0's are in each sequence
// if our sequence has one or fewer O's, check if that's the longest sequence of 1's
// TC: O(n^2)
// SC: O(1) - we are using 4 variables: left, right, numOZeroes, longestSequence. The number of variables are constant and do not change based on the size of input
// var findMaxConsecutiveOnes = function(nums) {
//     let longestSequence = 0;
//     for (let left = 0; left < nums.length; left++) {
//         let numOfZeroes = 0;
//         for (let right = left; right < nums.length; right++) {
//             if (nums[right] === 0) numOfZeroes++;
//             if (numOfZeroes <= 1) {
//                 longestSequence = Math.max(longestSequence, right - left + 1);
//             }
//         }
//     }
//     return longestSequence
// };

// sliding window approach
// TC: O(n) since both pointers only move forward, each of the left and right pointer traverse a maximum of n steps. Therefore, the time complexity is O(n)
// SC: O(1) - we don't store anything other than the variables, thus the space we use is constant becaues it is not correlated to the length of the input array.
var findMaxConsecutiveOnes = function (nums) {
	let longestSequence = 0;
	let left = 0;
	let right = 0;
	let numOfZeroes = 0;
	// while window is within bounds
	while (right < nums.length) {
		// if current is a 0, increment the count of zeroes
		if (nums[right] === 0) numOfZeroes++;
		// if the window is invalid, contract the window
		while (numOfZeroes > 1) {
			if (nums[left] === 0) numOfZeroes--;
			left++;
		}
		// update the longest sequence
		longestSequence = Math.max(longestSequence, right - left + 1);
		// expand window
		right++;
	}
	return longestSequence;
};
