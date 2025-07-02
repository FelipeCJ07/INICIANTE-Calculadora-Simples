const display = document.getElementById('display');
const result = document.getElementById('result');
const history = document.getElementById('history');
const body = document.body;

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  result.textContent = '';
}

function calculate() {
  try {
    const res = eval(display.value);
    result.textContent = res;
    const item = document.createElement('p');
    item.textContent = `${display.value} = ${res}`;
    history.appendChild(item);
    display.value = '';
  } catch {
    result.textContent = 'Erro';
  }
}

function toggleTheme() {
  body.classList.toggle('dark-theme');
}
