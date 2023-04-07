/*
Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

Example 1:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

Example 3:
Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
*/

let hammingWeight = function (n) {
	let str = n.toString(2); // radix parameter 2 to keep it base 2
	let count = 0;
	for (let char of str) {
		if (char === "1") count++;
	}
	return count;
};

/*
explanation

convert 32-bit unsigned interger to a string
pass radix parameter of 2 to keep it in base 2 
create a count varaible with a value of 0
loop through each character of string
increase the count by 1 every time there is 1 in the string
return the count

NOTE: About Base 2 (https://www.expii.com/t/base-binary-numbers-9192)
*/

// bitwise solution
let hammingWeightBitWise = function (n) {
	let count = 0;
	while (n !== 0) {
		const bitComparision = n & 1; // 1 & 1 will return 1. 0 & 1 will return 0
		if (bitComparison === 1) count++;
		n >>>= 1; // unsigned right shift assignment (chop off the last bit and assign it)
	}
	return count;
};

/*
explanation

convert strings and arrays can be slow. 
create a count variable with a value of 0
while the integer is not 0
check if last bit is 1 - use bitwise AND check for an odd bit (1) or an even bit (0).
if so, add to count
chop off the last (fartheset right) bit of the integeer. JS has 3 bitwise shift operators
use unsigned right shift: n = n >>> 1 
return count

*/
