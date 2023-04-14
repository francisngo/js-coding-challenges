/*
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

Example 1:
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

Example 2:
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

Example 3:
Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
*/

/*

    initial: 
    to reverse the part of the word from the start to where the index of "ch", 
    find the index of 'ch" and set left pointer on it, this will decrement as we loop
    set right pointer to the right of it, this will increment as we loop

    add decrementing and incrementing letters to a result variable

    a b c d e f d  -> result = d
          l r

    a b c d e f d  -> result = dc
        l   r

    a b c d e f d  -> result = dcb
      l     r

    a b c d e f d  -> result = dcba - at this point first if statement no longer is true
    l       r                  we start to move right

    a b c d e f d  -> result = dcbaf
    l         r

    a b c d e f d  -> result = dcbafd - at thsi point, last if statement no longer is true, we increment right one more time and then !words[right] (because words[7] doesn't exist) becomes true
    l           r
*/

let reversePrefix = function (words, ch) {
	let chIndex = words.indexOf(ch);
	let result = "";
	let left = chIndex;
	let right = chIndex + 1;
	while (right <= words.length) {
		if (left >= 0) {
			result += words[left--];
		} else if (!words[right]) {
			return result;
		} else {
			result += words[right++];
		}
	}
	return result;
};
