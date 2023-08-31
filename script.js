let firstNumber = '';
let operator = '';
let secondNumber = '';

function addToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
  firstNumber = '';
  operator = '';
  secondNumber = '';
}

function operate(op, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    default:
      return 'Error';
  }
}

function calculate() {
  const display = document.getElementById('display');
  const equation = display.value;

  if (equation.includes(operator)) {
    const numbers = equation.split(operator);
    firstNumber = numbers[0];
    secondNumber = numbers[1];
    const result = operate(operator, firstNumber, secondNumber);
    display.value = result;
    firstNumber = result;
    operator = '';
    secondNumber = '';
  }
}

