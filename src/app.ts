import { Expense } from './classes/expense.js';
import { Income } from './classes/income.js';
import { listTemplate } from './classes/listTemplate.js';
import { hasFormatter } from './interfaces/hasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: hasFormatter;

  if (type.value === 'Income') {
    doc = new Income(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Expense(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});
