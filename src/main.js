import { filterBySex, sortByName, sortByYear, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const compute = document.getElementById('computeStats');
computeStats(data).map(year => {
  compute.innerHTML += `<td>${year}%</td>`;
});

const root = document.querySelector('#root');
root.appendChild(renderItems(data));

let newData = data;

const order = document.querySelector('select[name="name"]');
order.addEventListener('change', () => {
  newData = sortByName(newData, order.value)
  root.innerHTML = "";
  root.appendChild(renderItems(newData));
})

const orderYear = document.querySelector('select[name="year"]');
orderYear.addEventListener('change', () => {
  newData = sortByYear(newData, orderYear.value)
  root.innerHTML = "";
  root.appendChild(renderItems(newData));
})

const filter = document.querySelector('select[name="sex"]');
filter.addEventListener('change', () => {
  newData = filterBySex(data, filter.value)
  root.innerHTML = "";
  root.appendChild(renderItems(newData));
})

const btnReset = document.getElementById('btnClear');
btnReset.addEventListener('click', () => {
  filter.value = 0;
  order.value = 0;
  orderYear.value = 0;
  root.innerHTML = "";
  newData = data;
  root.appendChild(renderItems(newData));
})