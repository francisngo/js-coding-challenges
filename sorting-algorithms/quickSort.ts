import { swap } from "./utils/swap";
/*

Quick sort is a divide and conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pibot. There are many different versions of quickSort that pick pivot in different ways.

- Always pick the first element as a pivot
- Always pick the last element as a pivot
- Pick a random element as a pivot
- Pick median as the pivot

The key process in quickSort is partition. The target of partitions is, given an array and an element x of an array as the pivot, put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

*/

// solution
function pivot(array, start = 0, end = array.length) {
    let pivot = array[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, start, swapIndex);
    return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

// test
pivot([4, 8, 2, 1, 5, 7, 6, 3]); // 3 
quickSort([100,-3,2,4,6,9,1,2,5,3,23])