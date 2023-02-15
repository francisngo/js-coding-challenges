/*
This pattern creates pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

It is often very efficient for solving problems with minimal space complexity as well
*/

/*
Example 1: 
Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

// naive solution - time complexity: O(n^2), space complexity: 0(1)
function sumZero(arr) {
    // loop through the sorted array
    for (let i = 0; i < arr.length; i++) {
        // within the same loop, loop through the same sorted array but start at the next index
        for (let j = i+1; j < arr.length; j++) {
            // if the two values sums up to 0, return the two values in array
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
    // returns undefined if two values are not found
}
// further explanation: this is not a performant solution because there are nested loops. we are looping through the array O(n) starting at the beginning and looping the same array again (O(n) * O(n) = O(n^2))starting at the next index and then checking to see if the two values sum up to 0. 

// refactored solution - time complexity: 0(n)
function sumZero(arr) {
    // we will use a while loop where we have the pointer starting at the beginning of the array as well as a pointer at the end of the array. 
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        // while start (left) is less than end (right), if at any point, the two pointers add up to 0, we return the two values in the array
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        // because it is a sorted array, we know that the number on the right is too high, so we will move down left instead of right, then we check lowest value + next highest value to see if we get zero
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// tests
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

/*
Example 2: 
Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// multiple pointer pattern solution
// very similar to last solution but instead of using a while loop where we have a pointer at the beginning and end, we will use a for...loop where we have a pointer at the first and second index of the array. 
function countUniqueValues(arr) {
    // to demonstrate multiple pointer, we will set a pointer at the beginning and second part of the array 
    let i = 0; 
    for (let j = 1; j < arr.length; j++) {
        // check to see if the current value is the same as the next value, if it isn't the same, increment the next pointer and assign the next value as the current value
        // if they are the same, we do nothing and increment the second pointer 
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    // at the end we should have the amount of times we incremented the first pointer but we add one to get total unique values;
    return i + 1;
}

// not multiple pointers pattern (frequent counters) - to show we don't need multiple pointers to solve this problem
function countUniqueValues(arr) {
    const lookup = {};
    for (let value of arr) {
        lookup[value] ? lookup[value] += 1 : lookup[value] = 1;
    }
    return Object.keys(lookup).length;
}

countUniqueValues([1,1,1,1,1,2]); // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]); // 4