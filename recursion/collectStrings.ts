/*

Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

*/

// solution
function collectStrings(obj, array = []) {
    let arrayObject = Object.values(obj);
    for (let key of arrayObject) {
        typeof key === 'string' ? array.push(key) : collectStrings(key, array);
    }
    return array;
}


// tests
const object = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
collectStrings(object) // ["foo", "bar", "baz"])