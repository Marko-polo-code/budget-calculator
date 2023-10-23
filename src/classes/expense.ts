import { hasFormatter } from '../interfaces/hasFormatter.js';

export class Expense implements hasFormatter {

  constructor(
    readonly account: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.account} for ${this.details} is receiving ${this.amount} €`
  }
}
