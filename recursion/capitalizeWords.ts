/*

Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

*/

// recursive solution
function capitalizeWords(words) {
    if (!words.length) return [];
    const string = words[0].toUpperCase();
    return [string].concat(capitalizeWords(words.slice(1)));
}

// tests
let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']