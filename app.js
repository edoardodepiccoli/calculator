let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

let toCompute = false;

function log() {
  console.log(
    `first = ${firstOperand}, second = ${secondOperand}, current = ${currentOperator}`
  );
}

function operate() {
  if (!firstOperand || !currentOperator) {
    console.log("missing first operand or operator");
    log();
    return;
  }

  if (!secondOperand) {
    console.log(
      "missing second operand, assigning first operand value to second operand"
    );
    secondOperand = firstOperand;
  }

  log();

  switch (currentOperator) {
    case "add":
      firstOperand = Number(firstOperand) + Number(secondOperand);
      log();
      break;
    case "subtract":
      firstOperand = Number(firstOperand) - Number(secondOperand);
      log();
      break;
    case "multiply":
      firstOperand = Number(firstOperand) * Number(secondOperand);
      log();
      break;
    case "divide":
      firstOperand = Number(firstOperand) / Number(secondOperand);
      log();
      break;
    default:
      console.log("unknown operator");
      break;
  }
}

function setOperand(value) {
  if (!toCompute) {
    firstOperand = value;
    log();
    return;
  }

  secondOperand = value;
  log();
}

function setOperator(symbol) {
  toCompute = true;
  switch (symbol) {
    case "+":
      currentOperator = "add";
      log();
      break;
    case "-":
      currentOperator = "subtract";
      log();
      break;
    case "×":
      currentOperator = "multiply";
      log();
      break;
    case "÷":
      currentOperator = "divide";
      log();
      break;
    case "=":
      operate();
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
  if (e.target.matches(".operand-button")) {
    console.log("clicked on operand button");
    setOperand(e.target.innerText);
  } else if (e.target.matches(".operator-button")) {
    console.log("clicked on operator button");
    setOperator(e.target.innerText);
  } else if (e.target.matches(".utility-button")) {
    console.log("clicked on an utility button");
  }
});
