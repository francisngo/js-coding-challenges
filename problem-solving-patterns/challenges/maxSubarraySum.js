/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function

Not that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

/*
the length of the array needs to more than the given number
get the first set of sum and save it to a temp variable
we can do this by setting a for loop up to the given number (i < number)
next loop, we can start the index at the given number (let i = num)
and run loop to end of array
because we already have the sum of last set, to get the sum of next set, we subtract the value from last set and add the value for current index
we can set this to temp variable and then do a comparison of which is the max by checking maxSum and tempSum
we can then save the result to a maxSum variable
outside the loop, return maxSum
*/

// solutions
function maxSubarraySum(array, number) {
    if (array.length < number) {
        return null;
    }
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < number; i++) {
        tempSum += array[i];
    }
    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// test
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null