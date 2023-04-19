/*
Write a function that reverses a string. The input string is given as an array of characters `s`. 

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// two pointer approach
let reverseString = function (array) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		let temp = array[left];
		array[left] = array[right];
		array[right] = temp;
		left++;
		right--;
	}
	return array;
};

// ["h","e","l","l","o"]
//   l               r   do the swap and increment left, decrement right

// ['o', 'e', 'l', 'l', 'h']
//        l         r    do the swap and increment left, decrement right

// ['o', 'e', 'l', 'l', 'h']
//             lr        left === right so hop out of while loop and return array

// TC: O(n)
// SC: O(1)
