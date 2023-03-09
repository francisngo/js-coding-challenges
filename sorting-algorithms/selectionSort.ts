import { swap } from "./utils/swap";
/*

Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted. 

The algorithm maintains two subarrays in a given array. 
- The subarray which is already sorted.
- The remaining subarray was unsorted. 

In every iteration of the selection sort, the minimum element from the unsorted subarray is picked and moved to the beginning of unsorted subarray. 

After every iteration sorted subarray size increase by one and unsorted subarray size decrease by one.

*/

function selectionSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[lowest] > array[j]) {
                swap(array, lowest, j);
            }
        }
    }
    return array;
}

// tests
selectionSort([37, 45, 29, 8, 14, 11]);