const CONDITION = "CONDITION";

// two pointers: one input, opposite ends
var fn = (arr) => {
	let left = 0;
	let right = arr.length - 1;
	let answer = 0;

	while (left < right) {
		// do some logic here with left and right
		if (CONDITION) {
			left++;
		} else {
			right--;
		}
	}

	return answer;
};

// two pointers: two inputs, exhaust both
var fn = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	let answer = 0;

	while (i < arr1.length && j < arr2.length) {
		// do some logic here
		if (CONDITION) {
			i++;
		} else {
			j++;
		}
	}

	while (i < arr1.length) {
		// do logic
		i++;
	}

	while (j < arr2.length) {
		// do logic
		j++;
	}

	return answer;
};
