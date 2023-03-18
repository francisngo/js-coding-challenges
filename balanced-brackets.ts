/*

Given an expression string `expression`, write a program to examine whether the pairs and the orders of "{", "}", "(", ")", "[", "]" are correct in the given expression

Input: expression = "[()]{}{[()()]()}"
Output: true

Input: expression = "[(])"
Output: false

*/

function balancedBrackets(expression: string): boolean {
    let stack: string[] = [];

    for (let i = 0; i < expression.length; i++) {
        let exp = expression[i];
        if (exp === '(' || exp === '[' || exp === '{') {
            stack.push(exp);
            continue;
        }

        // edge case - if at any point the loop we get a closing bracket (")", "}", "]") and there is nothing inside the stack, this means we have an unbalanced expression - return false
        if (stack.length === 0) return false;

        let check: string | undefined;
        switch (exp) {
            case ')':
                check = stack.pop();
                if (check === '[' || check === '{') {
                    return false;
                }
                break;
            case ']':
                check = stack.pop();
                if (check === '(' || check === '{') {
                    return false;
                }
                break;
            case '}': 
                check = stack.pop();
                if (check === '(' || check === '[') {
                    return false;
                }
                break;
        }
    }
    return stack.length === 0;
}

balancedBrackets('[()]{}{[()()]()}'); // true
balancedBrackets('[(])'); // false