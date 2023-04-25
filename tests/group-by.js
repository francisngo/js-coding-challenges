const PEOPLE_DATA = [
	{
		name: "Alice",
		age: 25,
		city: "Seattle",
		state: "WA",
	},
	{
		name: "Bob",
		age: 21,
		city: "Seattle",
		state: "WA",
	},
	{
		name: "Charlie",
		age: 25,
		city: "Los Angeles",
		state: "CA",
	},
];

function groupBy(array, property) {
	return array.reduce((acc, obj) => {
		const key = obj[property];
		const currGroup = acc[key] ?? [];
		return {
			...acc,
			[key]: [...currGroup, obj],
		};
	}, {});
}

console.log(groupBy(PEOPLE_DATA, "age"));
// console.log(groupBy(PEOPLE_DATA, "city"));
