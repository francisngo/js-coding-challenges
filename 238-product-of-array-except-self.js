/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

let productExceptSelf = function(nums) {
    // gather the product of the prefix at each index
    const prefix = [];
    for (let i = 0; i < nums.length; i++) {
        // for current index
        // if index is 0, start product with 1 since there is no prefix
        if (i === 0) {
            prefix[i] = 1;
        } else {
            // otherwise, begin multiplying nums[i - 1] times the prefix at position - 1
            // and add total to prefix array at position i
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
    }

    // gather the product of the suffix at each index
    const suffix = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        // essentially the same as prefix but in reverse (to the right)
        if (i === nums.length - 1) {
            suffix[i] = 1;
        } else {
            suffix[i] = nums[i + 1] * suffix[i + 1]
        }
    }
    
    const output = [];
    // iterate one last time and multiply both the values in prefix and suffix in its current index respectively
    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix[i] * suffix[i];
    }
    return output;
};

/*
explanation
solving without division operation (/)
can be solved by getting products of all left elements and all right elements of the current element
example [1,2,3,4]
if current element is 2
we want to get left elements [1]
and get right elements [3, 4]
and multiply them together (1) * (3 * 4)

first pass - iterate array and create a new array of prefixes (product of all left elements)
second pass - iterate array and create a new array array of suffixes (product of all right elements)
third pass - build array that contains the product of prefixes[i] * suffixes[i] for each current element and return

on first element, multiply the following values to itself (elements * 1)
since there are no elements to the left for first element, prefix value  should be 1
since there are not elements to the right for last element, suffix value should be 1
*/