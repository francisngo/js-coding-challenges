/*
Given a string s, return the length of the longest 
substring that contains at most two distinct characters.

Example 1:
Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.

Example 2:
Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.
*/

let lengthOfLongestSubstringTwoDistinct = function (s) {
	// e  c  e  b  a
	// lr
	// does e exist in hash? no. add value and index of value to map {e: 0}
	// is hash larger than 2? no
	// get the current max => max = Math.max(max, 0 - 0 + 1) = 1
	// move right to next value (right++)

	// e  c  e  b  a
	// l  r
	// does c exist in hash? no. add value and index of value to map {e: 0, c: 1}
	// is hash larger than 2? no
	// get the current max => max = Math.max(max, 1 - 0 + 1) = 2
	// move right to next value (right++)

	// e  c  e  b  a
	// l     r
	// does c exist in hash? yes. replace value with current index of value to map {e: 2, c: 1}
	// is hash larger than 2? no
	// get the current max => max = Math.max(max, 2 - 0 + 1) = 3
	// move right to next value (right++);

	// e  c  e  b  a
	// l        r
	// does b exist in hash? no. add to hash {e: 2, c: 1, b: 3}
	// is hash larger than 2? yes => find the leftmost character and remove it then move left past removed index {e: 2, b: 3}
	// e  c  e  b  a
	//       l  r
	// it is C because C was in index 1. It is not E because E was found recently again at index 2
	// get the current max => max = Math.max(max, 3 - 2 + 1) = 2 (keep max = 3)
	// move right to next value (right++);

	// e  c  e  b  a
	//       l     r
	// does a exist in hash? no. add value and index of value to map {e: 2, b: 3, a: 4}
	// is hash larger than 2? yes => find leftmost character and remove it then move left past removed index {b: 3, a: 4}
	// e  c  e  b  a
	//          l  r
	// get the current max => max = Math(max, 4 - 3 + 1) = 2 (keep max = 3)
	// right is at s.length so exist while loop and return max

	let left = 0;
	let right = 0;
	let max = 0;
	let map = new Map();
	while (right < s.length) {
		map.set(s[right], right);
		if (map.size === 3) {
			// find the leftmost character and remove from hashmap
			// move left pointer so that sliding window contains 2 distinct characters only
			let minIndex = Math.min(...map.values());
			map.delete(s[minIndex]);
			left = minIndex + 1;
		}
		max = Math.max(max, right - left + 1);
		right++;
	}
	return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("eceba"));
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));
