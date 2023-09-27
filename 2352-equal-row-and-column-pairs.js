/*
Given a 0-indexed n * n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e. an equal array);

Example 1:
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
*/
var equalPairs = function (grid) {
	let convertToKey = (arr) => {
		let key = "";
		for (const num of arr) {
			key += num + ",";
		}
		return key;
	};

	let map = new Map();
	for (const arr of grid) {
		let key = convertToKey(arr);
		map.set(key, (map.get(key) || 0) + 1);
	}

	let map2 = new Map();
	for (let col = 0; col < grid[0].length; col++) {
		let currentCol = [];
		for (let row = 0; row < grid.length; row++) {
			currentCol.push(grid[row][col]);
		}
		let key = convertToKey(currentCol);
		map2.set(key, (map2.get(key) || 0) + 1);
	}

	let answer = 0;
	for (const [key, val] of map) {
		answer += val * map2.get(key) || 0;
	}

	return answer;
};
