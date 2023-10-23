import { hasFormatter } from '../interfaces/hasFormatter.js';

export class Income implements hasFormatter {

  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.recipient} for ${this.details} is receiving ${this.amount} €`
  }
}
