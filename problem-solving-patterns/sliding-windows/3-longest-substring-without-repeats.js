/*
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// brute force approach
// let lengthOfLongestSubstring = function (s) {
// 	let output = 0;

// 	function checkRepetition(s, start, end) {
// 		let chars = new Set();
// 		for (let i = start; i <= end; i++) {
// 			if (chars.has(s[i])) {
// 				return false;
// 			}
// 			chars.add(s[i]);
// 		}
// 		return true;
// 	}

// 	for (let i = 0; i < s.length; i++) {
// 		for (let j = i; j < s.length; j++) {
// 			if (checkRepetition(s, i, j)) {
// 				output = Math.max(output, j - i + 1);
// 			}
// 		}
// 	}
// 	return output;
// };

// improved with set and sliding window approach
let lengthOfLongestSubstring = function (s) {
	let output = 0;
	let left = 0;
	let right = 0;
	let set = new Set();
	while (right < s.length) {
		if (!set.has(s[right])) {
			set.add(s[right]);
			output = Math.max(output, set.size);
			right++;
		} else {
			set.delete(s[left]);
			left++;
		}
	}
	return output;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
