/*
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

Example 1:
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Example 2:
Input: nums = [1,2,3], k = 0
Output: 0
*/

let numSubarrayProductLessThanK = function (nums, k) {
	if (k <= 1) return 0;
	let left = 0;
	let currentProduct = 1;
	let output = 0;
	for (let right = 0; right < nums.length; right++) {
		currentProduct *= nums[right];
		while (currentProduct >= k && left <= right) {
			currentProduct /= nums[left];
			left += 1;
		}
		output += right - left + 1;
	}
	return output;
};

/*
  0  1  2  3
[10, 5, 2, 6]; 
  l
  r

currentProduct = 1
currentProduct * nums[right] = 10
10 >= 100? No, skip while
output = 0 - 0 + 1 + output(0) = 1

  0  1  2  3
[10, 5, 2, 6]; 
  l
     r

currentProduct = 10
currentProduct * nums[right] = 50
50 >= 100? No, skip while
output = 1 - 0 + 1 + output(1) = 3

  0  1  2  3
[10, 5, 2, 6]; 
  l
        r

currentProduct = 50
currentProduct * nums[right] = 100
100 >= 100? Yes
currentProduct = currentProduct / nums[left] = 10
left = 1
output = 2 - 1 + 1 + output(3) = 5

  0  1  2  3
[10, 5, 2, 6]; 
     l
           r

currentProduct = 10
currentProduct * nums[right] = 60
60 >= 100? No
output = 3 - 1 + 1 + output(5) = 8
*/
