/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

// explanation
/*
We are given positive integers as arguments
We must check to see if they are negatives and must have the same length of digits. If not, return false
What we need to do is create a lookup to store the times the digit appears in the integers
Once we finish the loop, we can then loop through the second given integers and check to see if it exists, if it does then return true, otherwise it's false
we are already keeping count of the length of digits so if there is anything else that doesn't exist in lookup, they do not have the same frequency
*/

// solution
function sameFrequency(nums1, nums2) {
    // turn arguments into strings to get length
    let stringNum1 = nums1.toString();
    let stringNum2 = nums2.toString();
    if (stringNum1.length !== stringNum2.length) {
        return false;
    }
    // create lookup to keep track of count
    let lookup = {};
    for (let char in stringNum1) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    for (let char in stringNum2) {
        if (!lookup[char]) {
            return false
        } else {
            lookup[char] -= 1;
        }
    }
    return true;
}

// tests
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false