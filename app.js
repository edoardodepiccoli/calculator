let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function log() {
  console.log(
    `first = ${firstOperand}, second = ${secondOperand}, current = ${currentOperator}`
  );
}

function operate() {
  if (!firstOperand || !currentOperator) return;

  if (!secondOperand) secondOperand = firstOperand;

  switch (currentOperator) {
    case "add":
      firstOperand += secondOperand;
      log();
      break;
    case "subtract":
      firstOperand -= secondOperand;
      log();
      break;
    case "multiply":
      firstOperand *= secondOperand;
      log();
      break;
    case "divide":
      firstOperand /= secondOperand;
      log();
      break;
  }
}

// dom references
const buttonsContainer = document.querySelector(".buttons-container");

const resetButton = document.querySelector("#reset-button");
const changeSignButton = document.querySelector("#change-sign-button");
const percentButton = document.querySelector("#percent-button");
const commaButton = document.querySelector("#comma-button");

const divideButton = document.querySelector("#divide-button");
const multiplyButton = document.querySelector("#multiply-button");
const subtractButton = document.querySelector("#subtract-button");
const addButton = document.querySelector("#add-button");
const computeButton = document.querySelector("#compute-button");

// event listeners
buttonsContainer.addEventListener("click", (e) => {
  if (!e.target.matches(".operand-button")) return;

  console.log(e.target.innerText);
});
