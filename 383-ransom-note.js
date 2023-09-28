/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. 

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
var canConstruct = function (ransomNote, magazine) {
	let map = new Map();
	for (const char of magazine) {
		map.set(char, (map.get(char) || 0) + 1);
	}
	for (const char of ransomNote) {
		if (map.get(char) && map.get(char) > 0) {
			map.set(char, map.get(char) - 1);
		} else {
			return false;
		}
	}
	return true;
};
