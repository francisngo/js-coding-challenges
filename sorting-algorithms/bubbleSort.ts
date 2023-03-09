/*

Pseudocode
- Start looping from with a variable called i, at the end of the array, towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1; 
- if arr[j] is greater than arr[i + 1], swap those two values

*/

// solution
function bubbleSort(array) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            let first = array[j]
            let second = array[j + 1];
            if (first > second) {
                swap(array, first, second);
            }
        }
    }
    return array;
}

// tests
bubbleSort([37, 45, 29, 8, 14, 11]);
