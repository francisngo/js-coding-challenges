function timeConversion(s) {
	let time = parseInt(s[0] + s[1], 10);
	if (s[s.length - 2] === "P") {
		let format = time + 12;
		if (format < 24) {
			return format + s.slice(2, 8);
		} else {
			return time + s.slice(2, 8);
		}
	} else if (s[s.length - 2] === "A") {
		if (time === 12) {
			return "00" + s.slice(2, 8);
		}
		return s.slice(0, 8);
	}
}
