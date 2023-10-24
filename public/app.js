import { Expense } from './classes/expense.js';
import { Income } from './classes/income.js';
import { listTemplate } from './classes/listTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'Income') {
        doc = new Income(...values);
    }
    else {
        doc = new Expense(...values);
    }
    list.render(doc, type.value, 'end');
});
