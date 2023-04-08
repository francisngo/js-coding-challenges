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

// linear approach
// let sortedSquares = function(nums) {
// 	let results = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		results.push(nums[i] * nums[i]);
// 	}
// 	return results.sort((a, b) => a - b);
// };

/*
explanation
Time complexity: O(nlogn), where n is the length of the array
Space complexity: O(n) or O(log n)
- space complexity of the sorting depends on the program language
- Python uses Timsort algorithm - O(n)
- Java uses quick sort - O(log n)

*/

// two pointer approach
let sortedSquares = function (nums) {
	// negative numbers are in decreasing order [-3, -2, -1] = [9, 4, 1]
	// positive numbers are in increasing order [4, 5, 6] = [16, 25, 36]
	// therefore we can iterate over the negative part in reverse and the positive part in the forward direciton

	// use two pointers
	let results = [];
	let left = 0;
	let right = nums.length - 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		let square;
		if (Math.abs(nums[left]) < Math.abs(nums[right])) {
			square = nums[right];
			right--;
		} else {
			square = nums[left];
			left++;
		}
		results[i] = square * square;
	}
	return results;
};

/*
explanation
Time complexity: O(n) where n is the length of the array
Space complexity: O(n) if you take output into account, O(1) otherwise

[-7, -3, 2, 3, 11]
 l              r
 
left = 0
right = 4
square = 11;
right-- (right = 3)
results[4] = 11 * 11 = 121 
results[_, _, _, _, 121]

[-7, -3, 2, 3, 11]
 l          r

left = 0;
right = 3
square = 3
left++ (left = 1)
results[3] = 7 * 7 = 49
results[_, _, _, 49, 121]

[-7, -3, 2, 3, 11]
      l     r

left = 1
right = 3
square = 3
left++ (left = 2)
results[2] = -3 * -3 = 9 
results[_, _, 9, 49, 121]

[-7, -3, 2, 3, 11]
         l  r

left = 2
right = 3
square = 3
right-- (right = 2)
results[1] = 3 * 3 = 9
results[_, 9, 9, 49, 121]

[-7, -3, 2, 3, 11]
         l
         r

left = 2
right = 2
square = 2
left++ (left = 3)
results[0] = 2 * 2 = 4
results[4, 9, 9, 49, 121]

*/
