function gradingStudents(grades) {
	let finalGrades = [];
	for (let grade of grades) {
		let roundedUp = Math.ceil(grade / 5) * 5;
		let difference = roundedUp - grade;
		if (grade < 38) {
			finalGrades.push(grade);
		} else if (difference < 3) {
			finalGrades.push(roundedUp);
		} else if (difference > 3) {
			finalGrades.push(grade);
		} else {
			finalGrades.push(grade);
		}
	}
	return finalGrades;
}
