let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '0';
let decimalAdded = false;

function addToDisplay(value) {
  if (displayValue === '0' || displayValue === 'Error') {
    displayValue = '';
  }

  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  firstNumber = '';
  operator = '';
  secondNumber = '';
  decimalAdded = false;
  updateDisplay();
}

function setOperator(op) {
  if (firstNumber === '') {
    firstNumber = displayValue;
    operator = op;
    displayValue = '0';
    decimalAdded = false;
  } else {
    calculate();
    operator = op;
  }
}

function addDecimal(dot) {
  if (!decimalAdded) {
    displayValue += dot;
    decimalAdded = true;
    updateDisplay();
  }
}

function calculate() {
  if (firstNumber !== '' && operator !== '' && displayValue !== '') {
    secondNumber = displayValue;
    displayValue = operate(operator, firstNumber, secondNumber);
    firstNumber = displayValue;
    operator = '';
    secondNumber = '';
    decimalAdded = false;
    updateDisplay();
  }
}

function operate(op, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (op) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      if (num2 === 0) {
        return 'Error';
      }
      return (num1 / num2).toString();
    default:
      return 'Error';
  }
}

// Event listener for keyboard input (extra credit)
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    addToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    setOperator(key);
  } else if (key === '=' || key === 'Enter') {
    calculate();
  } else if (key === 'c' || key === 'C') {
    clearDisplay();
  } else if (key === 'Backspace') {
    // Implement backspace functionality
  }
});
