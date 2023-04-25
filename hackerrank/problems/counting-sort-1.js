function countingSort(arr) {
	let frequency = Array(100).fill(0);
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		frequency[num]++;
	}
	return frequency;
}

/*
[1, 1, 3, 2, 1]

i = 0;
arr[i] = 1
[0, 0, 0, 0]
frequency[1]++
[0, 1, 0, 0]

i = 1
arr[i] = 1
[0, 1, 0, 0]
frequency[1]++
[0, 2, 0, 0]

i = 2
arr[i] = 3
frequency[3]++
[0, 2, 0, 1]

i = 3
arr[i] = 2
frequency[2]++
[0, 2, 1, 1]

i = 4
arr[i] = 1
frequency[1]++
[0, 3, 1, 1]


*/
