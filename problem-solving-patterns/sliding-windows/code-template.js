const CONDITION = "CONDITION";

var fn = (arr) => {
	let left = 0;
	let current = 0;
	let answer = 0;

	for (let right = 0; right < arr.length; right++) {
		// do logic here to add arr[right] to current
		current += arr[right];

		while (CONDITION) {
			// remove arr[left] from current
			current -= arr[left];
			left++;
		}

		// update answer
	}

	return answer;
};

// fixed window
var fn = (arr, k) => {
	let left = 0;
	let current = 0;
	let answer = 0;

	for (let i = 0; i < k; i++) {
		current += arr[i];
	}

	for (let right = l; right < arr.length; right++) {
		// do logic here to add arr[right] to current
		current += arr[right];

		// do logic here to remove arr[left] from current
		current -= arr[left];
		left++;

		// update ansfer if needed based on the current window
		// example: if you want to find the maxium sum within the fixed window:
		answer = Math.max(answer, current);
	}

	return answer;
};
