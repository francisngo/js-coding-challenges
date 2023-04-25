function birthday(s, d, m) {
	let left = 0;
	let right = 0;
	let currentSum = 0;
	let count = 0;
	while (right < s.length) {
		currentSum += s[right];
		while (currentSum > d && right - left + 1 > m) {
			currentSum -= s[left];
			left++;
		}
		if (currentSum === d && right - left + 1 === m) {
			count++;
		}
		right++;
	}
	return count;
}
