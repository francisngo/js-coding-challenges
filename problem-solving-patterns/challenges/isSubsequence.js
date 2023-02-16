/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string, In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

// solution
function isSubsequence(string1, string2) {
    let first = 0;
    let second = 0;
    if (!string1) {
        return true;
    }
    while (second < string2.length) {
        // if the character of two strings matches
        // iterate the first pointer
        if (string2[second] === string1[first]) {
            first++;
        }
        // if at any point, i increments and reaches the end of string1, then it means we have a subsequent set of characters in both strings
        if (first === string1.length) {
            return true;
        }
        // otherwise continue down second string
        // but keep index in same place for first string
        second++;
    }
    // if no subsequent matches, return false
    return false;
}

// tests
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)