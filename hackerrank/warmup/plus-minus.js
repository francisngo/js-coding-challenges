function plusMinus(arr) {
	let positive = 0;
	let negative = 0;
	let zeroes = 0;
	let length = arr.length;
	for (let i = 0; i < length; i++) {
		let num = arr[i];
		if (num > 0) {
			positive += 1;
		} else if (num < 0) {
			negative += 1;
		} else {
			zeroes += 1;
		}
	}
	console.log((positive / length).toFixed(6) || 0);
	console.log((negative / length).toFixed(6) || 0);
	console.log((zeroes / length).toFixed(6) || 0);
}
