/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

// we could use regex to replace all non-alphanumeric characters and lowerCase() afterwards to replace capital letters
// let string = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
// a palindrome can be read forward and backwards
// so we can create a left and right pointer where we will compare the letter on left and on right
// if the letters compare, we can move forward, if they dont return false
// at the end of all the letters match, then we have a palindrome we can then return true

let validPalindrome = function (s) {
	let string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
	let left = 0;
	let right = string.length - 1;
	while (left < right) {
		if (string[left] === string[right]) {
			left++;
			right--;
		} else {
			return false;
		}
	}
	return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));
