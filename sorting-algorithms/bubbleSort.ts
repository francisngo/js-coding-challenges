import { swap } from "./utils/swap";
/*

Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order. Here order can be anything like increasing order or decreasing order.

Bubble sort compares the element from index 0 and if the 0th index is greater than 1st index then the values get swapped and if the 0th index is less than the 1st index then nothing happens. 

The 1st index compares to the 2nd index then the 2nd index compares to the 3rd, and so on...

Pseudocode
- Start looping from with a variable called i, at the end of the array, towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1; 
- if arr[j] is greater than arr[i + 1], swap those two values

*/

// solution
function bubbleSort(array: number[]) {
    let isSwapped = true;
    for (let i = array.length; i > 0; i--) {
        isSwapped = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                isSwapped = false;
            }
        }
        // if no two elements were swapped by inner loop, then break
        if (isSwapped) break;
    }
    return array;
}

// tests
bubbleSort([37, 45, 29, 8, 14, 11]);
