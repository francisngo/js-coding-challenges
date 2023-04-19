/*

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
*/

let reverseWords = function (s) {
	// input  = "Let's take LeetCode contest"
	// output = "s'teL ekat edoCteeL tsetnoc"

	// intuition is the split the string into an array between the spaces
	// within each item of the string array, we create an inner loop
	// inside the inner loop, we can create a left and right pointer
	// left pointer will start at the beginning of the word, and right pointer will be at the end of the word
	// swap each letter until left === right then move onto the next item in array and repeat
	let string = s.split(" ");
	for (let i = 0; i < string.length; i++) {
		let word = string[i].split("");
		let left = 0;
		let right = word.length - 1;
		while (left < right) {
			let temp = word[left];
			word[left] = word[right];
			word[right] = temp;
			left++;
			right--;
		}
		string[i] = word.join("");
	}
	return string.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
