/*

A prefix sum is a technique that can be used with integer arrays. The idea is to create an array prefix where prefix[i] is the sum of all elements up to the index i(inclusive). 

Building a prefix sum:
Given an integer array nums,

prefix = [nums[0]]
for i in [1, lens(nums) - 1]:
    prefix.append(nums[i] + prefix[prefix.length - 1])

Initially, we start with just the first element. 
Then we iterate with i starting from index 1. 
Any any given point, the last element of prefix will represent the sum of all elements in the input up to but not including index i. 
So we can add that value plus the current value to the end of prefix and continue to the next element

A prefix sum is a great tool whenever a problem involves sums of sub array. It costs O(n) to build but allows future subarray queries to be O(1), so it can usually improve an algorithm's time complexity where n is the length of the array

For example nums = [5, 2 ,1, 6, 3, 8], would have prefix = [5, 7, 8, 14, 17, 25]

How? 

[5, 2 ,1, 6, 3, 8]
 i
i = 0, nums[0] = 5

[5, 2 ,1, 6, 3, 8]
    i
i = 1, num[0] + nums[1] = 7

[5, 2 ,1, 6, 3, 8]
       i
i = 2, nums[0] + nums[1] + nums[2] = 8

[5, 2 ,1, 6, 3, 8]
          i
i = 3, nums[0] + nums[1] + nums[2] + nums[3] = 14

[5, 2 ,1, 6, 3, 8]
             i
i = 4, nums[0] + nums[1] + nums[2] + nums[3] + nums[4] = 17

[5, 2 ,1, 6, 3, 8]
                i
i = 5, nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] = 25

prefix = [5, 7, 8, 14, 17, 25]

If we want to find the sum of the sub array from i to j (inclusive) then the answer would be:
prefix[j] - prefix[i - 1] or prefix[j] - prefix[i] + nums[i]

A prefix sum is a great tool whenever a problem involves sums of a sub array. It only costs O(n) to build but allows all future subarray queries to be O(1), so it can usually improve an algorithm's time complexity by a factor of O(n), where n is the length of the array. 
*/

/*
Example 1 
Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

For example, given nums = [1, 6, 3, 2, 7, 2] and queries = [[0, 3], [2, 5], [2, 4]] and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].

[1, 6, 3, 2, 7, 2]

queries[0] = nums[0] + nums[1] + nums[2] + nums[3] = 12
queries[1] = nums[2] + nums[3] + nums[3] + nums[4] + nums[5] = 14
queries[2] = nums[2] + nums[3] + nums[4] = 12

limit = 13
output = [12, 14, 12] = [true, false, true]
*/

let answerQueries = function (nums, queries, limit) {
	let prefix = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		// adds the current index number and the last number that was stacked into the prefix
		prefix.push(nums[i] + prefix[prefix.length - 1]);
		/*
        current prefix = [1]
        i = 1, nums[1] = 6, prefix[prefix.length - 1] = 1, 6 + 1 = 7

        current prefix = [1, 7]
        i = 2, nums[2] = 3, prefix[prefix.length - 1] = 7, 7 + 3 = 10

        current prefix = [1, 7, 10]
        i = 3, nums[3] = 2, prefix[prefix.length - 1] = 10, 10 + 2 = 12

        current prefix = [1, 7, 10, 12]
        i = 4, nums[4] = 7, prefix[prefix.length - 1] = 12, 12 + 7 = 19

        current prefix = [1, 7, 10, 12, 19]
        i = 5, nums[5] = 2, prefix[prefix.length - 1] = 19, 19 + 2 = 21
        */
	}

	let output = [];
	for (const [x, y] of queries) {
		// between each x and y, subtract y from x to get the sum of the prefix and add the first value
		let curr = prefix[y] - prefix[x] + nums[x];
		/*
        nums = [1, 6, 3, 2, 7, 2]
        prefix = [1, 7, 10, 12, 19, 21]
        queries = [[0, 3], [2, 5], [2, 4]]

        [1, 6, 3, 2, 7, 2]
         x
        [1, 7, 10, 12, 19, 21]
         x          y
        [x, y] = [0, 3], curr = prefix[3] - prefix[0] + nums[0] = 12 - 1 + 1 = 12

        [1, 6, 3, 2, 7, 2]
               x
        [1, 7, 10, 12, 19, 21]
                x          y
        [x, y] = [2, 5], curr = prefix[5] - prefix[2] + nums[2] = 21 - 10 + 3 = 14

        [1, 6, 3, 2, 7, 2]
               x
        [1, 7, 10, 12, 19, 21]
               x        y
        [x, y] = [2, 4], curr = prefix[4] - prefix[2] + nums[2] = 19 - 10 + 3 = 12

        */
		output.push(curr < limit);
	}

	return output;
};

let nums = [1, 6, 3, 2, 7, 2];
let queries = [
	[0, 3],
	[2, 5],
	[2, 4],
];
let limit = 13;
answerQueries(nums, queries, limit); // [true, false, true]
