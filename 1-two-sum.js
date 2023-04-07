/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/

// brute force
// let twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		let first = nums[i];
// 		for (j = 1; j < nums.length; j++) {
// 			let second = nums[j];
// 			if (first + second === target) {
// 				return [first, second];
// 			}
// 		}
// 	}
// };

// hash approach
let twoSum = function (nums, target) {
	if (!Array.isArray(nums)) {
		return [];
	}
	let hash = {};
	for (let i = 0; i < nums.length; i++) {
		var num = nums[i];
		hash[num] = i;
	}
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		let diff = target - num;
		// if difference exists in hash AND the index of current number isn't the current index
		if (hash.hasOwnProperty(diff) && hash[diff] !== i) {
			return [i, hash[diff]];
		}
	}
};

// // two pointer approach
// let twoSum = function (nums, target) {
// 	let left = 0;
// 	let right = 1;
// 	while (left < nums.length) {
// 		let sum = nums[left] + nums[right];
// 		if (sum === target) {
// 			return [left, right];
// 		} else if (right === nums.length - 1) {
// 			left++;
// 			right = left + 1;
// 		} else {
// 			right++;
// 		}
// 	}
// };
