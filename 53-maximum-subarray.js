/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

// brute force - O(n^3)
// let maxSubArray = function(nums) {
//     let maxSum = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             let currentSum = 0;
//             for (let k = i; k <= j; k++) {
//                 currentSum += nums[k];
//             }
//             maxSum = Math.max(maxSum, currentSum);
//         }
//     }
//     return maxSum;
// }
// can we do it better?

// brute force - O(n^2)
// let maxSubArray = function(nums) {
//     let maxSum = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i < nums.length; i++) {
//         let currentSum = 0;
//         for (let j = i; j < nums.length; j++) {
//             currentSum += nums[j];
//             maxSum = Math.max(maxSum, currentSum);
//         }
//     }
//     return maxSum;
// }

// linear solution - O(n)
let maxSubArray = function(nums) {
    // initialize maxSum as an integer that below the lowest number (-Infinity)
    let maxSum = Number.NEGATIVE_INFINITY;
    // initialize current sum, starting at 0
    let sum = 0;
    
    // iterate through all the elements
    for (let value of nums) {
        // add current value to current sum
        sum += value;
        // update the maxSum with the maximum sum
        maxSum = Math.max(maxSum, sum);
        // if sum is less than 0, update it to 0
        if (sum < 0) sum = 0;
    }
    // return the maximum subarray
    return maxSum;
}