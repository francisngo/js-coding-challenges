/* 

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

*/

// solution
function binarySearch(array: number[], value: number): number {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (array[middle] !== value && left <= right) {
        if (value < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return array[middle] === value ? middle : -1;
}

// tests
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1