/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

var reverseOnlyLetters = function (s) {
	let regex = new RegExp("[a-zA-Z]");
	let characters = s.split("").filter((char) => regex.test(char));
	let output = [];
	for (let i = 0; i < s.length; i++) {
		if (regex.test(s[i])) {
			output.push(characters.pop()); // O(1)
		} else {
			output.push(s[i]); // O(1)
		}
	}
	return output.join("");
};
