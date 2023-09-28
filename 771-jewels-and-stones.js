/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

var numJewelsInStones = function (jewels, stones) {
	let map = new Map();
	for (const char of jewels) {
		map.set(char, (map.get(char) || 0) + 1);
	}
	let result = 0;
	for (const char of stones) {
		if (map.get(char)) {
			result += 1;
		}
	}
	return result;
};
