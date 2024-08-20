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

resetButton.addEventListener("click", () => {});
deleteButton.addEventListener("click", () => {});
dotButton.addEventListener("click", () => {});
equalsButton.addEventListener("click", () => {
  handleEqualsButtonClick();
});

// start with app logic
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

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
  if (firstOperand && currentOperator && !shouldResetScreen) {
    currentOperator = operator;
  }

  if (shouldResetScreen) {
    operate();
    return;
  }

  firstOperand = primaryDisplay.innerText;

  secondaryDisplay.innerText = `${primaryDisplay.innerText} ${operator} `;
  currentOperator = operator;
  shouldResetScreen = true;
}

function handleEqualsButtonClick() {
  if (firstOperand === null || currentOperator === null) return;

  operate();
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
  console.log("operating");
  secondOperand = primaryDisplay.textContent;

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

  secondaryDisplay.innerText = `${firstOperand} ${currentOperator} ${secondOperand} = `;
  primaryDisplay.innerText = result;
  firstOperand = result;

  currentOperator = null;
  shouldResetScreen = true;
}
