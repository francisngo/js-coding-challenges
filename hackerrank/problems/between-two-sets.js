function findGCD(a, b) {
	while (b) {
		let temp = a % b;
		a = b;
		b = temp;
	}
	return a;
}
function findLCM(a, b) {
	return (a * b) / findGCD(a, b);
}

function getTotalX(a, b) {
	let lcm = a[0];
	for (let i = 1; i < a.length; i++) {
		lcm = findLCM(lcm, a[i]);
	}

	let gcd = b[0];
	for (let i = 1; i < b.length; i++) {
		gcd = findGCD(gcd, b[i]);
	}

	let count = 0;
	for (let i = lcm, j = 2; i <= gcd; i = lcm * j, j++) {
		if (gcd % i === 0) count++;
	}
	return count++;
}
