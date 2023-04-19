/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

// negative numbers do not matter because if you square a negative, it becomes positive (- * - = +).
// the naive approach is to loop through the array and squaring each element, pushing it into a new array and sorting it.
// time complexity  is O(nlogn) and space complexity of O(logn) or O(n) depending on language for sorting
// while this would give us a time complexity of O(nlogn) (JS uses a variation of merge sort and insertion sort - Timsort on the Chrome browser) and a space complexity of O(logn), we could go for a different approach where we square and sort into the new array without having to sort the new array after words which could give us a time complexity of O(nlogn) - O(n) for the for loop and then O(logn) for sorting
// because we have negative numbers on the left and positive numbers on the right (sorted), we could do this by setting up two pointers, one at the beginning of array and one at the end of the array. then loop through the array starting at the end. we could check to see if the value is less than or greater, if its greater store the right value, decrement the right pointer and then square the value and place it in the current position (which is last place)
// we then compare the left (which is the same from previous) against the next current to see which value is greater, and repeat the steps

// [-7,-3,2,3,11]
// [49, 9, 4, 9, 121]

let sortedSquares = function (nums) {
	let result = [];
	let left = 0;
	let right = nums.length - 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		let square;
		if (nums[left] < nums[right]) {
			square = nums[right];
			right--;
		} else {
			square = nums[left];
			left++;
		}
		result[i] = square * square;
	}
	return result;
};

// i = nums.length - 1 (4);
// [-7,-3,2,3,11]
//  l          r
// is Math.abs(7) less than Math.abs(11)?
// square = nums[right] <== yes, so do this
// right--;
// --------------
// if not than
// square = nums[left]
// left++;
// result[i] = square * square
// return result
// [_, _, _, _, 121]

// i = 3;
// [-7,-3,2,3,11]
//  l       r
// is Math.abs(7) less than Math.abs(3)?
// square = nums[right]
// right--;
// --------------
// if not than
// square = nums[left] <== no, so do this
// left++;
// result[i] = square * square
// return result
// [_, _, _, 49, 121]

// i = 2;
// [-7,-3,2,3,11]
//      l   r
// is Math.abs(3) less than Math.abs(3)?
// square = nums[right]
// right--;
// --------------
// if not than
// square = nums[left] <== no, so do this
// left++;
// result[i] = square * square
// return result
// [_, _, 9, 49, 121]

// i = 1;
// [-7,-3,2,3,11]
//        l r
// is Math.abs(2) less than Math.abs(3)?
// square = nums[right] <== yes, so do this
// right--;
// --------------
// if not than
// square = nums[left]
// left++;
// result[i] = square * square
// return result
// [_, 9, 9, 49, 121]

// i = 0;
// [-7,-3,2,3,11]
//        lr
// is Math.abs(2) less than Math.abs(2)?
// square = nums[right] <== yes, so do this
// right--;
// --------------
// if not than
// square = nums[left] <== no, so do this
// left++;
// result[i] = square * square
// return result
// [2, 9, 9, 49, 121]
