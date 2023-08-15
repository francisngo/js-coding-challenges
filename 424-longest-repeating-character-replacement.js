/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

let characterReplacement = function (s, k) {
	let left = 0;
	let maxFrequency = 0;
	let output = 0;
	let hash = {};
	for (let right = 0; right < s.length; right++) {
		if (!hash[s[right]]) {
			hash[s[right]] = 1;
		} else {
			hash[s[right]]++;
		}
		// the maximum frequency that has been seen in window thus far
		maxFrequency = Math.max(maxFrequency, hash[s[right]]);

		// move the start pointer towards right if the current window is invalid
		// window size - maxFrequency <= k
		let windowSize = right + 1 - left;
		const isValid = windowSize - maxFrequency <= k;
		if (!isValid) {
			hash[s[left]] -= 1;
			left++;
		}

		output = windowSize;
	}
	return output;
};

console.log(characterReplacement("ABAB", 2));
