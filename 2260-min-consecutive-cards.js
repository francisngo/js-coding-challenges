/*
You are given an integer array card where cards[i] represents the value of the `ith` card. A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

Example 1:
Input: cards = [3,4,2,3,4,7]
Output: 4
Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.

Example 2:
Input: cards = [1,0,5,3]
Output: -1
Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.
*/

var minimumCardPick = function (cards) {
	const map = new Map();
	for (let i = 0; i < cards.length; i++) {
		if (!map.get(cards[i])) {
			map.set(cards[i], []);
		}
		map.get(cards[i]).push(i);
	}
	let answer = Infinity;
	for (const [key, value] of map) {
		for (let i = 0; i < value.length - 1; i++) {
			answer = Math.min(answer, value[i + 1] - value[i] + 1);
		}
	}
	return answer == Infinity ? -1 : answer;
};
