export class Income {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} for ${this.details} is receiving ${this.amount} €`;
    }
}
