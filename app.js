// select displays
const secondaryDisplay = document.querySelector(".secondary-display");
const primaryDisplay = document.querySelector(".primary-display");

// select and add event listeners to number and operatos buttons
const calculatorButtons = document.querySelectorAll("button");

calculatorButtons.forEach((button) => {
  if (
    !button.matches(".special-button") &&
    !button.matches(".operator-button") &&
    !button.matches(".equals-button") &&
    !button.matches(".dot-button")
  ) {
    button.addEventListener("click", () => {
      handleNumberButtonClick(button.innerText);
    });
  }
});
calculatorButtons.forEach((button) => {
  if (button.matches(".operator-button")) {
    button.addEventListener("click", () => {
      handleOperatorButtonClick(button.innerText);
    });
  }
});

// select and add event listeners to other buttons
const resetButton = document.querySelector(".reset-button");
const deleteButton = document.querySelector(".delete-button");

const dotButton = document.querySelector(".dot-button");
const equalsButton = document.querySelector(".equals-button");

resetButton.addEventListener("click", () => {
  handleResetButtonClick();
});
deleteButton.addEventListener("click", () => {
  handleDeleteButtonClick();
});
dotButton.addEventListener("click", () => {
  handleDotButtonClick();
});
equalsButton.addEventListener("click", () => {
  handleEqualsButtonClick();
});

// start with app logic
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

// becomes true as soon as an operator is chosen
// becomes false as soon as you start typing more digits
let shouldResetScreen = false;

function log() {
  console.log(
    `${firstOperand} ${currentOperator} ${secondOperand}; ${shouldResetScreen}`
  );
}

// handle button clicks
function handleNumberButtonClick(value) {
  if (shouldResetScreen || primaryDisplay.innerText === "0") {
    primaryDisplay.innerText = value;
    shouldResetScreen = false;
  } else {
    primaryDisplay.innerText += value;
  }
}

function handleOperatorButtonClick(operator) {
  if (shouldResetScreen === false && currentOperator) {
    secondOperand = primaryDisplay.innerText;
    operate();
  }

  currentOperator = operator;

  firstOperand = primaryDisplay.innerText;
  secondaryDisplay.innerText = `${firstOperand} ${currentOperator}`;

  shouldResetScreen = true;
}

function handleEqualsButtonClick() {
  if (!firstOperand || !currentOperator) return;
  secondOperand = primaryDisplay.innerText;
  operate();
}

function handleResetButtonClick() {
  primaryDisplay.innerText = "0";
  secondaryDisplay.innerHTML = "&nbsp;";

  firstOperand = null;
  secondOperand = null;
  currentOperator = null;

  shouldResetScreen = true;
}

function handleDeleteButtonClick() {
  string = primaryDisplay.innerText;
  if (string.length === 1) {
    primaryDisplay.innerText = "0";
    return;
  }
  string = string.slice(0, string.length - 1);

  primaryDisplay.innerText = string;
}

function handleDotButtonClick() {
  if (primaryDisplay.innerText.includes(".")) return;

  primaryDisplay.innerText += ".";
}

// utility functions
function getOperation(operationSymbol) {
  switch (operationSymbol) {
    case "+":
      return "addition";
    case "-":
      return "subtraction";
    case "×":
      return "multiplication";
    case "÷":
      return "division";
    default:
      return null;
  }
}

function operate() {
  let result;

  let currentOperation = getOperation(currentOperator);

  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);

  switch (currentOperation) {
    case "addition":
      result = firstOperand + secondOperand;
      break;
    case "subtraction":
      result = firstOperand - secondOperand;
      break;
    case "multiplication":
      result = firstOperand * secondOperand;
      break;
    case "division":
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }

  result = result.toFixed(4);
  if (result == Math.trunc(result)) result = Math.trunc(result);

  primaryDisplay.innerText = result;
  secondaryDisplay.innerText = `${firstOperand} ${currentOperator} ${secondOperand} =`;

  firstOperand = result;
  currentOperator = null;
  secondOperand = null;

  shouldResetScreen = false;
}
