class Expense {
  account: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.account = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.account} is receiving ${this.amount} for ${this.details}`
  }
}

const expenseOne = new Expense('The mortgage', 'The flat', 1250);

console.log(expenseOne);
let expenses: Expense[] = [];

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});
