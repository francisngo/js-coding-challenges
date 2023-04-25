/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

// solution
function reverse(str: string): string {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// tests
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'



// explained
reverse('awesome')
    // Call Stack 1 - awesome length is greater than 1 so move on
    reverse('awesome'.slice(1)) + 'awesome'[0] 
    // reverse('wesome') + 'a' 

    // Call Stack 2 - wesome length is greater than 1 so move on
    reverse('wesome'.slice(1)) + 'wesome'[0]
    // reverse('esome') + 'w' 

    // Call Stack 3 - esome length is greater than 1 so move on
    reverse('esome'.slice(1)) + 'esome'[0]
    // reverse('some') + 'e'

    // Call Stack 4 - some length is greater than 1 so move on
    reverse('some'.slice(1)) + 'some'[0]
    // reverse('ome') + 's'

    // Call Stack 5 - ome length is greater than 1 so move on
    reverse('ome'.slice(1)) + 'ome'[0]
    // reverse('me') + 'o'

    // Call Stack 6 - me length is greater than 1 so move on
    reverse('me'.slice(1)) + 'me'[0];
    // reverse('e') + 'm'

    // e length is equal to 1 so return str (Call Stack 6 ends);
    // recursion end and we bubble back up to finish the other recursive calls
    // Call Stack 6 - return 
    'e' + 'm' // 'em'

    // Call Stack 5 - return 
    'em' + 'o' // 'emo'

    // Call Stack 4 - return 
    'emo' + 's' // 'emos'

    // Call Stack 3 - return 
    'emos' + 'e' // 'emose'

    // Call Stack 2 - return 
    'emose' + 'w' // 'emosew'

    // Call Stack 1 - return 
    'emosew' + 'a' // 'emosewa'