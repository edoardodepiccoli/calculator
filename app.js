let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

let toCompute = false;

function log() {
  console.log(
    `first = ${firstOperand}, second = ${secondOperand}, current = ${currentOperator}`
  );
}

function setOperand(value) {
  if (!toCompute) {
    if (firstOperand) {
      firstOperand = String(firstOperand) + String(value);
    } else {
      firstOperand = String(value);
    }
  } else {
    if (secondOperand) {
      secondOperand = String(secondOperand) + String(value);
    } else {
      secondOperand = String(value);
    }
  }

  log();
}

function setOperator(symbol) {}

function operate() {}

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
