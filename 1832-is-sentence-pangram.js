/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"
Output: false
*/

var checkIfPangram = function (sentence) {
	let hash = {};
	for (let i = 0; i < sentence.length; i++) {
		if (!hash.hasOwnProperty(sentence[i])) {
			hash[sentence[i]] = 1;
		}
	}
	if (Object.keys(hash).length === 26) {
		return true;
	} else {
		return false;
	}
};
