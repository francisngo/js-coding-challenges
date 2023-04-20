## Sliding Window

The general algorithm behind sliding window is: 
1. Define a pointer for the left and right bound that represents the current window, usually both of them starting at 0.
2. Iterate over the array with the right bound to "add" elements to the window.
3. Whenever the constraint is broken, in this example if the sum of the window exceeds k, then 'remove' elements from the window by incrementing the left bound until the condition is satisfied again.

Here's some pseudocode illustrating the concept: 
```
function fn(arr) { 
    left = 0;
    for right in [0, arr.length - 1]:
        Do some logic to "add" element at arr[right] to window
        while left < right AND condition from problem not met:
            Do some logic to "remove" element at arr[left] from window
            left++;

        Do some logic to update the answer
}
```

With a "sum less than k" example, we can use a variable curr that keeps track of the current sum of the window. That way, we know when the sum exceeds k without needed to calculate the window sum from scratch every iteration. We can "add" elements by doing `curr += arr[right]` and "remove" elements by doing `curr -= arr[left]`. The data and logic needed to maintain information about a window will vary between problems.

A sliding window guarantees a maxium of 2n window iterations - the right pointer can move n times and the left pointer can move n times. This means if the logic done for each window is O(1), sliding window algorithms run in linear time. 

The reason why a while loop inside of the for loop has a time complexity of O(n) and isn't the time compleixty of O(n^2) because the while loop can only iterate n times in total for the entire algorith, (left starts at 0, only increases, and never exceeds n). If the while loop were to run n times on one iteration of the for loop, that would mean it wouldn't run at all for all the other iterations of the for loop. This is what is referred to as amortized analysis - even though the worst case for an iteration inside the for loop is O(n), it averages out to O(1) when you consider entire runtime of algorithm.

> Example 1: Given an array of positive integers `nums` and an integer `k`, find the length of the longest subarray whose sum is less than or equal to k.

When we add an element to the window by moving the right bound, we just do `curr += value`. When we remove an element from the window by moving the left bound, we just do `curr -= value`. We should remove elements so long as `curr > k`.

Given a subarray starting at left and ending at right, the length is `right - left + 1`.

```
           0  1  2  3  4  5  6  7  8
// nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] k = 8

let findLength = function(nums, k) {
    let left = 0;
    let current = 0;
    let result = 0;
    for (let right = 0; right < nums.length; right++) {
        current += nums[right];
        while (current > k) {
            current -= nums[left];
            left++;
        }
        // find the max length
        // right - left + 1 => 7 - 4 + 1 = 4 
        // because array is 0 indexed so we need to add 1 to get the length of right and left indices
        result = Math.max(result, right - (left + 1));
    }
}
```

> Example 2: Given a binary substring `s`. An operation involves flipping a `0` into a `1`. What is the length of the longest substring containing only `1` after performing at most one operation?

> For example, given s = "1101100111", the answer is 5. If you perform the operation at index 2, the string becomes 1111100111.

```
let findLength = function(s) {
    let left = 0; 
    let zeroCount = 0;
    let result = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] === '0') {
            zeroCount++
        }
        while (zeroCount > 1) {
            if (s[left] === '0') {
                zeroCount -= 1;
            }
            left++;
        }
        // find the longest length of 1s
        result = Math.max(result, right - left + 1);
    }
}
```

> Example 3: Given an array of positive integers `nums` and an integer `k`, return the number of contiguous subarrays where the product of all elements in the subarray is strictly less than `k`. 

> For xample. given the input `nums = [10, 5, 2, 6], k = 100`, the answer is `8`. The subarrays with products less than `k` are: `[10], [5], [2], [6], [10, 5], [5,2], [2,6], [5, 2, 6]`

> Key idea: Whenever you see a problem asking for the number of subarrays, think of this, at each index, how many valid subarrays end at this index. 

```
let numSubArrayProductLessThanK = function(nums, k) {
    let output = 0;
    let left = 0;
    let current = 1
    for (let right = 0; right < nums.length; i++) {
        current *= nums[right]
        while (current > k) {
            current /= nums[left]
            left++;
        }
        output += right - left + 1;
    }
}
```

### Fixed window size
Sometimes, a problem will specify a fixed subarray length. These questions are easy because the criteria are usually the same - just make sure the window size remains the same. To build the initial window (from index `0` to `k - 1`), you can either build it outside of the main loop or you can factor the logic inside your main loop to only consider the window for the answer once it reaches size `k`. 

Here's some pseudocode for both methods: 

```
// first approach
function fn(arr, k) {
    curr = some data type to track the window
    // build the first window
    for i in [0, k - 1]:
        Do something with curr or other variables to build first window
    ans = answer variable, might be equal to curr here depending on the problem
    for i in [k, arr.length - 1]:
        Add arr[i] to window
        Remove arr[i - k] from window
        Update ans
    return ans
}

// second approach
function fn(arr, k) {
    curr = some data type to track the window
    ans = answer variable
    for i in range(len(arr)):
        if i >= k:
            Update ans
            Remove arr[i - k] from windpw
        Add arr[i] to window
    Update ans
    return ans // Alternativive, you could do something like return max(ans, curr) if the problem is asking for a maximum value and curr is tracking it. 
}
```

> Example 4: Given an integer array `nums` and an integer `k`, find the sum of the subarray with the largest sum whose length is `k`: [3, -1, 4, 12, -8, 5, 6] and k = 4;

```
let findBestSubarray = function(nums, k) {
    let current = 0;
    let output = 0;
    for (let i = 0; i < k; i++) {
        current += nums[i];
    }
    output = current;
    for (let i = k; i < nums.length; i++) {
        current += nums[i] - nums[i - k];
        output = Math.max(output, current);
    }
    return output;
}
```