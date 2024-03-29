/*
Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

// If there is one negative number then the final answer can never be positive, therefore to avoid this situation we have to traverse both ways to get the final maximum product.

let maxProduct = function(nums) {
    let maximumProduct = Number.NEGATIVE_INFINITY;
    let currentProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        currentProduct *= nums[i];
        maximumProduct = Math.max(maximumProduct, currentProduct);
        if (currentProduct === 0) currentProduct = 1;
    }
    currentProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        currentProduct *= nums[i];
        maximumProduct = Math.max(maximumProduct, currentProduct);
        if (currentProduct === 0) currentProduct = 1;
    }
    return maximumProduct;
};