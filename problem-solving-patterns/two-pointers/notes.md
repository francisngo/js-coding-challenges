## Two Pointers

> Start the pointers at the edges of the input. Move them towards each other until they meet. 

Converting this idea into instructions:
1. Start one pointer at the first index 0 and the other other pointer at the last index `input.length - 1`.
2. Use a while loop until the pointers are equal to each other. 
3. At each iteration of the loop, move the pointers towards each other. This means either increment the pointer that started at the first index, decrement the pointer that started at the last index or both. Deciding which pointers to move will depend on the problem being solved.

Pseudocode: 

```
function fn (arr):
    left = 0;
    right = arr.length - 1

    while left < right: 
        Do some logic here depending on the problem 
        Do some more logic here to decide on one of of the following:
            left++
            right--
            Both left++ and right--
```

> Example 1: Return `true` if a given string is a palindrome `false` otherwise. 
> A string is a palindrome if it reads the same forward as backwards. That means, after reversing it, it is still the same string. For example: "abcdcba" or "racecar"

> `n` is the total number of characters, so `n - 1 - 1` corresponds to the last, second last, third last etc. character.  The  `-1` is necessary since the inputs are O-indexed.

```
let checkIfPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// T.C. : O(n)
// S.C. : O(1)
```

> Example 2: Given a sorted array of unique integers and a target integer, return `true` if there exists a pair of numbers that sum to target, `false` otherwise. This problem is similar to two sum. 
> For example, given `nums = [1, 2, 4, 6, 8, 9, 14, 15]` and `target = 13`, return true because `4 + 9 = 13`. 

```
// brute force approach
function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
}

// two pointer approach
function twoSum(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === target) return true;
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        }
    }
    return false;
}
```

## Another approach

> Move along both inputs simultaneously until all elements have been visited

Converting this idea into instructions:
1. Create two pointers, one for each iterable. Each pointer should start at the first index
2. Use a while loop until one of the pointers reaches the end of its iterable
3. At each iteration of the loop, move the pointers forwards. This means incrementing either one of the pointers or both of the pointers. Deciding which pointers to move will depend on the problem be solved.
4. Because while loop will stop when one of the pointers reaches the end, the other pointer will not be at the end when the loop finishes. Sometimes, we need to iterate through all elements - if this is the case, you will need to write extra code here to make sure both iterables are exhausted.

```
function fn(arr1, arr2):
    let i = 0;
    let j = 0;

    while i < arr1.length AND j < arr2.length:
        Do some logic here depending on the problem 
        Do some more logic here to decide on one of the following: 
            1. i++
            2. j++
            3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    while i < arr1.length:
        Do some logic here depending on the problem 
        i++
    
    while j < arr2.length
        Do some logic here depending on the problem
        j++
// T.C. : O(n + m) where n = arr1.length and m = arr2.length
// S.C. : O(1)
```

> Example 3: Given two sorted integer arrays, return an array that combines both of them and is also sorted.

The trivial approach would be to first combine both input arrays and then perform a sort. This would then give a time complexity of O(nlogn) (the cost of sorting). This would be a good approach if the input arrays were not sorted, but because they are sorted, we can take advantage of the two pointers technique to improve to O(n);

```
// brute force approach
function twoSorted(arr1, arr2) {
    return [...arr1, ...arr2].sort(); //O(nlogn)
}

// two pointer approach
function twoSorted(arr1, arr2) {
    let ans = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        ans.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        ans.push(arr2[j])
        j++;
    }
    return ans;
}
```

> Example 4: 392. Is Subsequence
> Given two strings `s` and `t`, return true if `s` is a subsequence of `t` or false otherwise
> A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining chracters (i.e. "ace" is a subsequence of "abcde" while "aec" is not).

```
function isSubsequence(s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}
```