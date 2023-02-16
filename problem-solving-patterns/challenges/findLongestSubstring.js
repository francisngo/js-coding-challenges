/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

// solution
function findLongestSubstring(string) {
    let longest = 0;
    let seen = {};
    let start = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    return longest;
}

// tests
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6