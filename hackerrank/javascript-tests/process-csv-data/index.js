const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./data/input.csv");
const rl = readline.createInterface({ input: stream });

let resultsForI = 0;
let resultsForC = 0;
const map = new Map();

rl.on("line", (row) => {
	const type = row.split(",")[0];
	const key = row.split(",")[1];
	const value = row.split(",")[2] ? parseInt(row.split(",")[2], 10) : 0;

	if (type === "I") {
		resultsForI += value;
		map.set(key, value);
	} else if (type === "C") {
		const getValueFromI = map.get(key) || 0;
		resultsForC += getValueFromI;
	}
});

rl.on("close", () => {
	console.log("resultsForI: ", resultsForI);
	console.log("resultsForC: ", resultsForC);
});
