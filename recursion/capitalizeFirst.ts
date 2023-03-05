/*

Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

*/

// solution
function capitalizeFirst(array: string[]): string[] {
    if(!array.length) return [];
    const string = array[0];
    const capitalized = string[0].toUpperCase() + string.slice(1);
    return [capitalized].concat(capitalizeFirst(array.slice(1)));
}

// test
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']