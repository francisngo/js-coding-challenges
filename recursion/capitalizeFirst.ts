/*

Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

*/

// solution
function capitalizeFirst(array: string[]): string[] {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let newArray = capitalizeFirst(array.slice(0, -1));
    newArray.push(array.slice(array.length -1)[0].toUpperCase());
    return newArray;
}

// test
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']