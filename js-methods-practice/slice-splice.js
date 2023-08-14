/*

Array.prototype.slice()
---------------------------------------------
- Think of it like slicing a piece of cake. You're creating a new piece that's a copy of a portion of the original cake
- `slice()` doesn't change the original array. It just gives you a new array with the selected elements
- Usage: `array.slice(startIndex, endIndex)`

Array.prototype.splice()
---------------------------------------------
- Imagine making changes to a cake by adding or removing ingredients. You're altering the original cake
- `splice()` modifies the original array by adding or removing elements
- Usage: `array.splice(startIndex, deleteCount, ...itemsToAdd)`

*/

let originalArray;
let resultArray;

// 1. Slice the first three elements from an array
originalArray = [1, 2, 3, 4, 5];
resultArray = originalArray.slice(0, 3);
console.log(resultArray); // [1, 2, 3]

// 2. Splice to remove elements from an array
originalArray = ["a", "b", "c", "d", "e"];
resultArray = originalArray.splice(1, 2);
console.log(resultArray); // ['b', 'c'];
console.log(originalArray); // ['a', 'd', 'e'];

// 3. Replace elements in an array using `splice()`
originalArray = ["apple", "banana", "cherry", "date"];
originalArray.splice(1, 2, "grape", "kiwi");
console.log(originalArray); // ['apple', 'grape', 'kiwi', 'date'];

// 4. Extract a portion from the middle of an array using `slice()`
originalArray = [10, 20, 30, 40, 50];
let middlePortion = originalArray.slice(1, 4);
console.log(middlePortion); // [20, 30, 40]

// 5. Remove and insert elements using `splice()` in a single operation
originalArray = ["a", "b", "c", "d"];
resultArray = originalArray.splice(1, 2, "x", "y", "z");
console.log(resultArray); // ['a', 'x', 'y', 'z', 'd']

// 6. Clone an array using `slice()`
originalArray = [1, 2, 3, 4];
resultArray = originalArray.slice();
console.log(resultArray); // [1, 2, 3, 4];

// 7. Reverse a portion of an array using `splice()`
originalArray = ["a", "b", "c", "d", "e"];
originalArray.splice(1, 3, ...originalArray.slice(1, 4).reverse());
console.log(originalArray); // ['a', 'd', 'c', 'b', 'e']

// 8. Extract the last three elements of an array using `slice()`
originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
resultArray = originalArray.slice(-3);
console.log(resultArray); // [6, 7, 8]

// 9. Splice to insert elements at a specific position
originalArray = ["a", "b", "c", "d"];
originalArray.splice(2, 0, "x", "y");
console.log(originalArray); // ['a', 'b', 'x', 'y', 'c', 'd']
