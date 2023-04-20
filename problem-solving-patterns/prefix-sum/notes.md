## Prefix Sum

Building a prefix sum is simple.

Here's some pseudocode: 

```
Given an integer array nums,

prefix = [nums[0]]
for i in [1, lens(num) - 1]:
    prefix.append(nums[i] + prefix[prefix.length - 1])
```

A prefix sum is a great tool whenever a problem involves sums of a subarray. It costs O(n) to build but allows all future subarray queries to be O(1), so it can usually improve an algorithm's time complexity by a factor of O(n), where n is the length of the array. 

> Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer `limit`, return a boolean array that represents the answer to each query. A query is `true` if the sum of the subarray from x to y is less than `limit`, or `false` otherwise.

> For example, given `nums = [1, 6, 3, 2, 7, 2]` and `queries = [[0, 3], [2, 5], [2, 4]]` and `limit = 13`, the answer is `[true, false, true]`. For each query, the sub array sums are `[12, 14, 12]`

```
let answerQueries = function(nums, queries, limit) {
    let prefix = [nums[0]];
    // [1]
    for (let i = 1; i < nums.length; i++) {
        // takes current number and adds the previous added number to prefix array
        // nums[1] = 6 => 6 + 1 = 7   => prefix = [1, 7]
        // nums[2] = 3 => 7 + 3 = 10  => prefix = [1, 7, 10]
        // nums[3] = 2 => 10 + 2 = 12 => prefix = [1, 7, 10, 12]
        // nums[4] = 7 => 12 + 7 = 19 => prefix = [1, 7, 10, 12, 19]
        // nums[5] = 2 => 19 + 2 = 21 => prefix = [1, 7, 10, 12, 19, 21]
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    let ans = [];
    for (let [x, y] of queries) {
        // nums   = [1, 6, 3, 2, 7, 2]
        // prefix = [1, 7, 10, 12, 19, 21]
        // [[0, 3], [2, 5], [2, 4]]
        // prefix[3] - prefix[0] + nums[0] = 12 - 1 + 1 = 12;
        // prefix[5] - prefix[2] + nums[2] = 21 - 10 + 3 = 14;
        // prefix[4] - prefix[2] + nums[2] = 19 - 10 + 3 = 12
        let current = prefix[y] - prefix[x] + nums[x]
    }
}