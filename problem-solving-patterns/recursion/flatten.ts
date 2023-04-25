/*

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

*/

// solution
function flatten(array) {
    let newArr = Array();
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])){
            newArr = newArr.concat(flatten(array[i]))
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// tests
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]