const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./input.csv");
const rl = readline.createInterface({ input: stream });

let resultsForI = 0;
let resultsForC = 0;
// map to store scores for each key
const map = new Map();

rl.on("line", (row) => {
	const type = row.split(",")[0];
	const key = row.split(",")[1];
	// parse score as integer, default to 0 if not available
	const value = row.split(",")[2] ? parseInt(row.split(",")[2], 10) : 0;

	if (type === "I") {
		resultsForI += value;
		// update score for the key in the map
		map.set(key, value);
	} else if (type === "C") {
		// get score from "I" row for the same key, default to 0 if not available
		const getValueFromI = map.get(key) || 0;
		resultsForC += getValueFromI;
	}
});

rl.on("close", () => {
	console.log("resultsForI: ", resultsForI);
	console.log("resultsForC: ", resultsForC);
});
