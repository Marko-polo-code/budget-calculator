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

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber]

  if (type.value === 'Income') {
    doc = new Income(...values);
  } else {
    doc = new Expense(...values);
  }

  list.render(doc, type.value, 'end');
});
