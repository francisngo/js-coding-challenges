/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

var moveZeroes = function (nums) {
	let right = 0;
	for (let left = 0; left < nums.length; left++) {
		if (nums[left] !== 0) {
			let temp = nums[left];
			nums[left] = nums[right];
			nums[right] = temp;
			right++;
		}
	}
	return nums;
};

// proper two pointer approach
let moveZeroes = function (nums) {
	let left = 0;
	let right = 0;
	while (right < nums.length) {
		if (nums[right] !== 0) {
			let temp = nums[right];
			nums[right] = nums[left];
			nums[left] = temp;
			left++;
		}
		right++;
	}
};

// moveZeroes([0,1,0,3,12]);
// [1,3,12,0,0]

/*

    [0,1,0,3,12] nums[right] is 0, does not meet condition, right++;
     lr

    [0,1,0,3,12] num[right] is 1, meets condition, swap, left++, right++; [1,0,0,3,12]
     l r

    [1,0,0,3,12] num[right] is 0, does not meets condition, right++; [1,0,0,3,12]
       l r

    [1,0,0,3,12] num[right] is 3, meets condition, swap, left++, right++; [1,3,0,0,12]
       l   r

    [1,3,0,0,12] nums[right] is 12, meets condition, swap, left++, right++ [1,3,12,0,0]
         l   r

    [1,3,12,0,0] right is at length of array, exit while loop
            l r
*/
