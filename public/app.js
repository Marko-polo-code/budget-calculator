"use strict";
class Expense {
    constructor(c, d, a) {
        this.account = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.account} is receiving ${this.amount} for ${this.details}`;
    }
}
const expenseOne = new Expense('The mortgage', 'The flat', 1250);
console.log(expenseOne);
let expenses = [];
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
