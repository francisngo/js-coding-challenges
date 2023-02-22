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