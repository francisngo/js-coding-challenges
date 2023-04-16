function miniMaxSum(arr) {
	let min = 0;
	let max = 0;
	let array = arr.sort();
	for (let i = 0; i < array.length; i++) {
		min += array[i];
		max += array[i];
	}
	console.log(`${min - array[array.length - 1]} ${max - array[0]}`);
}
