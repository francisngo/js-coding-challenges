/*
Given a string s and an integer k, return the length of the longest 
substring of s that contains at most k distinct characters.

Example 1:
Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.
*/

let lengthOfLongestSubstringKDistinct = function (s, k) {
	let left = 0;
	let right = 0;
	let max = 0;
	let map = new Map();
	while (right < s.length) {
		map.set(s[right], right);
		if (map.size > k) {
			let leftMostIndex = Math.min(...map.values());
			map.delete(s[leftMostIndex]);
			left = leftMostIndex + 1;
		}
		max = Math.max(max, right - left + 1);
		right++;
	}
	return max;
};
