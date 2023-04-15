/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
*/

let maxVowels = function (s, k) {
	let vowels = new Set(["a", "e", "i", "o", "u"]);

	let count = 0;

	// build window of size k, count the number of vowels it contains
	// loop is for first subarray/substring
	for (let i = 0; i < k; i++) {
		count += vowels.has(s[i]) ? 1 : 0;
	}
	// record the number of vowels in the first window
	let output = count;
	for (let i = k; i < s.length; i++) {
		// for each window, if current is a vowel, increment by 1
		count += vowels.has(s[i]) ? 1 : 0;
		// if the previous newly remove character (now outside of window) is a vowel, decrement
		// why? because it's not in the window, we don't want to count previous vowels
		count -= vowels.has(s[i - k]) ? 1 : 0;
		// compare the output and the current count
		output = Math.max(output, count);
	}
	return output;
};
