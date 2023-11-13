import { filterSex, orderAlphabetic } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.getElementById('root');
root.appendChild(renderItems(data));

let newData = data;

const order = document.querySelector('select[name="name"]');
order.addEventListener('change', () => {
    newData = orderAlphabetic(newData, order.value)
    root.innerHTML = "";
    root.appendChild(renderItems(newData));
})

const filter = document.querySelector('select[name="sex"]');
filter.addEventListener('change', () => {
    newData = filterSex(newData, filter.value)
    root.innerHTML = "";
    root.appendChild(renderItems(newData));
})

const btnReset = document.getElementById('btnClear');
btnReset.addEventListener('click', () => {
    filter.value = 0;
    order.value = 0;
    root.innerHTML = "";
    newData = data;
    root.appendChild(renderItems(newData));
})