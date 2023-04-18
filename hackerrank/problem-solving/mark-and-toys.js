function maximumToys(prices, k) {
	let maxToys = 0;
	prices.sort((a, b) => a - b);
	for (let i = 0; i < prices.length; i++) {
		k -= prices[i];
		if (k < 0) return maxToys;
		maxToys++;
	}
}

let prices = [1, 12, 5, 111, 200, 1000, 10];
let k = 50;
maximumToys(prices, k);
