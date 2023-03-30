/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

const isValid = (expression: string): boolean => {
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

isValid('[()]{}{[()()]()}'); // true
isValid('[(])'); // false