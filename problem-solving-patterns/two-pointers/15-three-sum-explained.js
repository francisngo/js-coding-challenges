var threeSum = function (nums) {
	// [-1, 0, 1, 2, -1, -4]
	//   l  r
	//  -1 + 0 = -1; -1 < 0, right++;
	// [-1, 0, 1, 2, -1, -4]
	//   l     r
	// -1 + 0 + 1 = 0; [-1, 0, 1] left++

	// left and right pointer starting next to each other will not work
	// left pointer at start and right pointer at end will not work

	// can we sort array?
	// by sorting the array we have negative numbers on the left
	// we can check the numbers on the right of it to see if it will add up to the current number
	// e.g.   [-4, -1, -1, 0, 1, 2]
	//              i   l        r
	// on i = 1, we have -1, so we check left + right to see if they equal, if they do we add the values to the an array and push the array to the result array

	// second [-4, -1, -1, 0, 1, 2]
	//              i      l  r
	// while still on i = 1, we have - 1 and we have moved the left and right pointers and found another set that equals to 0, we add  the values to an array and push to the result array

	// on i = 0, we want to check to see if left and right adds up to 4, because -4 + 4 = 0.
	// if so that means the three sum is 0
	// [-4, -1, -1, 0, 1, 2]
	//   i   l            r    -1 + 2 = 1 + -3 = -2 X
	// since sum is less than 0 we want to increment left to increase the sum
	// if sum is more than we decrement right to decrease the value sum
	// because -2 is less than sum, we increment left

	// [-4, -1, -1, 0, 1, 2]
	//   i       l        r   -1 + 2 = 1 + -3 = -2 X less so we increment left

	// [-4, -1, -1, 0, 1, 2]
	//   i          l     r   0 + 2 = 2 + -4 = 2 X more than so we decrement right

	// [-4, -1, -1, 0, 1, 2]
	//   i          l  r      1 + 2 = 3 + -4 = 1 X more than so we decrement right

	// [-4, -1, -1, 0, 1, 2]
	//   i          lr        at this point left and right are equal so we jump out & increment i

	// [-4, -1, -1, 0, 1, 2]
	//       i   l        r   -1 + 2 = 1 + -1 = 0 YES sum === 0 so we add to triplets array

	// [-4, -1, -1, 0, 1, 2]
	//       i      l     r   0 + 2 = 2 + -1 = 1 X more than so we decrement right

	// [-4, -1, -1, 0, 1, 2]
	//       i      l  r      0 + 1 = 1 + -1 = 0 YES sum === 0 so we add to triplets array

	let sorted = nums.sort((a, b) => a - b);
	let triplets = [];
	// there is an edge case where we can't use sorted.length because there wouldn't be any values after to add up so we subtract it by 2 (sorted.length - 2) in order to be able to check the values to the right of it.
	for (let i = 0; i < sorted.length - 2; i++) {
		// to avoid duplicate, we check to see if the new current value is the same as the previous value, if so, continue to skip to next i value
		if (i > 0 && sorted[i] === sorted[i - 1]) continue;
		// start left pointer next to current value
		let left = i + 1;
		// start right pointer at the end of the array at each current
		let right = sorted.length - 1;
		while (left < right) {
			let sum = sorted[i] + sorted[left] + sorted[right];
			if (sum === 0) {
				triplets.push([sorted[i], sorted[left], sorted[right]]);
				left++;
				// to avoid duplicate within the sub array e.g. test input = [0,0,0,0]
				while (sorted[left] === sorted[left - 1] && left < right) {
					left++;
				}
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1,-1,2],[-1,0,1]]
