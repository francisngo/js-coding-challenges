function findMedian(arr) {
	let mid = Math.floor(arr.length / 2);
	let nums = [...arr].sort((a, b) => a - b);
	return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
