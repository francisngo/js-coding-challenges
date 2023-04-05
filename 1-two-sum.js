/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/

// hash approach
let twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        // for each number, we calculate its complete (i.e. the value that would add up to the target if added to the current number)
        const complement = target - nums[i];

        // check if complement is in the map
        // if so, then we found the pair of numbers and it's indices
        if (complement in map) {
            return [map[complement], i];
        }

        // otherwise, set the value and index 
        map[nums[i]] = i;
    }
}

// // two pointer approach
// let twoSum = function(nums, target) {
//     let left = 0;
//     let right = 1;
//     while (left < nums.length) {
//         let sum = nums[left] + nums[right];
//         if (sum === target) {
//             return [left, right]
//         } else if (right === nums.length - 1) {
//             left++
//             right = left + 1;
//         } else {
//             right++
//         }
//     }
// }