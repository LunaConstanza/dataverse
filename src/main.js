import { filterBySex, sortByName, sortByYear, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.querySelector('#root');
root.appendChild(renderItems(data));

let newData = data;

const order = document.querySelector('select[name="name"]');
order.addEventListener('change', () => {
  newData = sortByName(newData, 'name', order.value)
  root.innerHTML = "";
  root.appendChild(renderItems(newData));
})

const orderYear = document.querySelector('select[name="year"]');
orderYear.addEventListener('change', () => {
  newData = sortByYear(newData, 'facts', 'yearOfBirth', orderYear.value)
  root.innerHTML = "";
  root.appendChild(renderItems(newData));
})

const filter = document.querySelector('select[name="sex"]');
filter.addEventListener('change', () => {
  newData = filterBySex(data, 'facts', 'sexo', filter.value)
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

const compute = document.getElementById('compute');
compute.innerHTML = `<h2>Estádistica de personas nacidas entre 1800 y 1900</h2>
  <table>
    <tr>
      <th>&lt 1899</th>
      <th>&gt 1900</th>
    </tr>
    <tr id="computeStats">
    </tr>
  </table>`;

const computes = document.getElementById('computeStats');
computeStats(data, 1899, 1900).map(year => {
  computes.innerHTML += `<td>${year}%</td>`;
});