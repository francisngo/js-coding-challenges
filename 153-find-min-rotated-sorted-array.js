/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/

let findMin = function(nums) {
    // start with two pointers that point to the start and end of array
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        // get the middle element
        let mid = Math.floor((low + high) / 2);
        // if the middle element is greater than the high element, then we know that the higher half of the array is sorted and the minimum element must be in the lower half. Update search range to lower half by assigning low = mid + 1;
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        // if middle element is less than or equal to high element, then we know that the left half of the array is sorted and minimum element must be in the left half or it could be the middle element itself. Update search range to the left half by setting high = mid
        } else {
            high = mid
        }
        // this loops continues until we find the minimum element, which will be the smallest in array
    }
    // return minimum element
    return nums[low];
}

// binary search has a time complexity of O(log n).
// space complexity is O(1) as we only use constant extra space