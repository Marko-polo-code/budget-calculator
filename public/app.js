import { Expense } from './classes/expense.js';
import { Income } from './classes/income.js';
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Expense('o2', 'internet and phone bill', 50);
// docTwo = new Income('coding', 'work', 2700);
// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const expenseOne = new Expense('The mortgage', 'the flat', 1250);
// const expensetwo = new Expense('Account', 'savings', 600);
// //console.log(expenseOne);
// let expenses: Expense[] = [];
// expenses.push(expenseOne);
// expenses.push(expensetwo);
// console.log(expenses);
// expenses.forEach(exp => {
//   console.log(exp.account, exp.details, exp.amount, exp.format());
// });
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'Income') {
        doc = new Income(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Expense(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
