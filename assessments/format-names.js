function formatNames(input, options = {}) {
	const {
		length: optionsLength,
		isSorted = false,
		isUnique = false,
	} = options;
	// 'Bender, Fry, Professor Farnsworth, Leela' => ['Bender', 'Fry', 'Professor Farnsworth', 'Leela'];
	// without trim, it would be ['Bender', ' Fry ', ' Professor Farnsworth ', ' Leela'];
	let names = input.split(",").map((name) => name.trim());
	let namesLength = names.length;

	if (isUnique) {
		// removes duplicate
		// ['Bender', 'Fry', 'Professor Farnsworth', 'Fry', 'Leela'] => ['Bender', 'Fry', 'Professor Farnsworth', 'Leela']
		names = [...new Set(names)];
		namesLength = names.length;
	}

	if (isSorted) {
		// ['Bender', 'Fry', 'Professor Farnsworth', 'Leela'] => ['Bender', 'Fry', 'Leela', 'Professor Farnsworth']
		names.sort();
	}

	if (optionsLength > 0 && namesLength > optionsLength) {
		let remainingLength = namesLength - optionsLength;
		return `${names
			.slice(0, optionsLength)
			.join(", ")} and ${remainingLength} more`;
	} else {
		if (namesLength === 0 || optionsLength === 0) {
			return "";
		} else if (namesLength === 1) {
			return names[0];
		} else if (namesLength === 2) {
			return `${names[0]} and ${names[1]}`;
		} else {
			return `${names.slice(0, namesLength - 1).join(", ")}, and ${
				names[namesLength - 1]
			}`;
		}
	}
}

console.log(formatNames(""));
console.log(formatNames("Bender")); // Output: "Bender"
console.log(formatNames("Bender, Fry")); // Output: "Bender and Fry"
console.log(formatNames("Bender, Fry, Leela")); // Output: "Bender, Fry, and Leela"
console.log(
	formatNames("Bender, Fry, Professor Farnsworth, Leela", { length: 1 })
); // Output: "Bender and 3 more"
console.log(
	formatNames("Bender, Fry, Professor Farnsworth, Leela", { length: 8 })
); // Output: "Bender, Fry, Professor Farnsworth, and Leela"
console.log(
	formatNames("Bender, Fry, Professor Farnsworth, Leela", { length: 0 })
); // Output: ""
console.log(
	formatNames("Bender, Fry, Professor Farnsworth, Leela", { isSorted: true })
); // Output: "Bender, Fry, Leela, and Professor Farnsworth"
console.log(
	formatNames("Bender, Fry, Professor Farnsworth, Leela", {
		length: 1,
		isSorted: true,
	})
); // Output: "Bender and 3 more"
console.log(
	formatNames("Bender, Fry, Professor Farnsworth, Fry, Leela", {
		length: 1,
		isSorted: true,
		isUnique: true,
	})
); // Output: "Bender and 3 more"
console.log(
	formatNames("Bender, Fry, Professor Farnsworth, Fry, Leela", {
		length: 2,
		isSorted: true,
		isUnique: true,
	})
); // Output: "Bender, Fry and 2 more"
