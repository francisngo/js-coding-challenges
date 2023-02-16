/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
*/

// explanation
/*
There is a limitless amount of arguments so we will have to use arguments.length when we loop through the arguments.
What we could do is create a lookup and as we are looping through the arguments, we will keep count of how many times the value is seen in the argument. 
Then we can look through the values of the lookup and if there is a value that is greater than 1, it means there are duplicates
*/

// solution - time complexity: O(n)
// frequency counters
function areThereDuplicates() {
    let lookup = {}
    for (let value of arguments) {
        if (lookup[value]) {
            return true;
        } else {
            lookup[value] = 1;
        }
        return false;
    }
    return Object.values(lookup).some(v => v > 1) ? true : false;
}

// multiple pointers
function areThereDuplicates() {
    let current = 0;
    let next = 0;
    arguments.sort((a,b) => a > b);
    while (next < arguments.length) {
        if (arguments[current] === arguments[next]) {
            return true;
        }
        current++
        next++
    }
    return false;
}


// tests
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 