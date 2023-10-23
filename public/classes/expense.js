export class Expense {
    constructor(account, details, amount) {
        this.account = account;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.account} for ${this.details} is receiving ${this.amount} €`;
    }
}
