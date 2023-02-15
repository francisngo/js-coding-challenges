/*
This pattern uses objects or sets to collect values/frequencies of values
Often, it avoids the need for nested loops or O(n^2) operations with arrays/strings
*/

/*
Example 1:
Write a function called `same`, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. 
*/

// naive solution - time complexity: O(n^2)
function same() {
    // check if two arrays have the same length, if not, return false
    if (arr1.length !== arr2.length) {
        return false;
    }
    // loop through the first array
    for (let i = 0; i < arr1.length; i++) {
        // while on the ith, check if the value squared exists in the second array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if it doesn't exist, return false
        if (correctIndex === -1) { 
            return false;
        }
        // if it does exist, from where the value is in the array, remove it (to keep track)
        arr2.splice(correctIndex, 1);
    }
    //by the end of the loop, if item in the first array still has a value that doesn't have a corresponding squared value in the second array, it would return false, otherwise, we exit the loop and return true
    return true;
}
// further explanation: this is not a performant solution because we are using a for..loop to iterate through the first array O(n) and then within the array, we are looping through the second array with `.indexOf` making this time complexity: O(n^2)

// refactored solution - time complexity: O(n)
function same(arr1, arr2) {
    // check if two arrays have the same length, if not, return false
    if (arr1.length !== arr2.length) {
        return false;
    }
    // create a lookup for both arrays; we will keep track of the values and it's frequency
    let freqCounter1 = {};
    let freqCounter2 = {};
    // loop through the first array and check if the value exists in freqCounter1
    // if it exists, increment the count, if it doesn't create a key with a value of 1 (first one)
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    // then loop through the second array and check if the value exists in freqCounter2
    // if it exists, increment the count, if it doesn't create a key with a value of 1 (first one)
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }
    // now we should loop through the values in freqCounter1
    // check if the squared value (value ** 2) exists in the second lookup (freqCounter2)
    // if it doesn't exist, return false
    // also, if it the squared value doesn't exist in the first lookup (freqCounter1), return false
    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false
        }
        if (freqCounter2[key ** 2] !== freqCounter1[val]) {
            return false
        }
    }
    // at the end if values exist in both lookup, return true
    return true;
}

// tests
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency);