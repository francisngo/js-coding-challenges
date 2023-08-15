function isValidSubsequence(array, sequence) {
	// Write your code here.
	let i = 0;
	let j = 0;
	while (i < array.length) {
		if (array[i] === sequence[j]) {
			j++;
		}
		i++;
	}
	return j >= sequence.length;
}

var array = [5, 1, 22, 25, 6, -1, 8, 10];
var sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));
