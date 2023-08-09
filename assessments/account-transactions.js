class Account {
	constructor(balance) {
		this.balance = balance;
	}

	debit = (amount) => {
		if (this.balance < amount) return false;
		this.balance -= amount;
		return true;
	};

	credit = (amount) => {
		this.balance += amount;
		return true;
	};

	getBalance = () => this.balance;
}
