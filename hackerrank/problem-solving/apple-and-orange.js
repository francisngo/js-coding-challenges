function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// Write your code here
	let applesCount = 0;
	let orangesCount = 0;
	const inclusive = (distance) => s <= distance && distance <= t;
	for (let apple of apples) {
		if (inclusive(apple + a)) {
			// [6, 7, 0]
			applesCount++; // 0 1 0
		}
	}
	for (let orange of oranges) {
		if (inclusive(orange + b)) {
			// [15, 10, 8]
			orangesCount++; // 0 1 2
		}
	}
	console.log(applesCount); // 1
	console.log(orangesCount); // 2
}
