let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let shouldClearDisplay = false;

const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const topd = document.querySelector(".display-top");
const bottomd = document.querySelector(".display-bottom");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const dotButton = document.querySelector(".dot");

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  shouldClearDisplay = false;
  currentOperation = null;
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      null;
  }
}

function clearDisplay() {
  bottomd.textContent = "";
  shouldClearDisplay = false;
}

function clearAll() {
  topd.textContent = "";
  bottomd.textContent = "";
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  shouldClearDisplay = false;
}

for (let button of numbers) {
  button.addEventListener("click", () => appendNumber(button.textContent));
}
for (let button of operations) {
  button.addEventListener("click", () => setOperation(button.textContent));
}

equalsButton.addEventListener("click", evaluate);

clearButton.addEventListener("click", clearAll);

dotButton.addEventListener("click", addDot);

deleteButton.addEventListener("click", deleteNumber);

function appendNumber(text) {
  if (shouldClearDisplay || bottomd.textContent === "0") clearDisplay();
  bottomd.textContent += text;
}

function addDot() {
  if (bottomd.textContent.includes(".")) return;
  if (bottomd.textContent === "0") {
    bottomd.textContent += ".";
  } else if (bottomd.textContent === "") {
    bottomd.textContent = "0.";
  } else {
    bottomd.textContent += ".";
  }
}

function deleteNumber() {
  if (bottomd.textContent === "" || bottomd.textContent === "0") return;
  bottomd.textContent = bottomd.textContent.slice(0, -1);
}

// come faccio a sapere se ho già cliccato l'opreazione e voglio solamente cambiarla????
// verifica se non è uguale a null ma, allo stesso tempo, se shoulcleardisplay è falso
function setOperation(text) {
  if (currentOperation != null && !shouldClearDisplay) evaluate();

  console.log("operazione normale");
  firstOperand = bottomd.textContent;
  currentOperation = text;
  topd.textContent = `${firstOperand} ${currentOperation}`;

  shouldClearDisplay = true;
}

function evaluate() {
  if (firstOperand === null || currentOperation === null) {
    alert("not possible");
    return;
  }
  secondOperand = bottomd.textContent;
  topd.textContent += `${secondOperand} =`;

  if (secondOperand === "0") {
    alert("cannot divide by zero");
    clearAll();
    return;
  }

  let result = operate(
    currentOperation,
    Number(firstOperand),
    Number(secondOperand)
  );

  bottomd.textContent = result;
  firstOperand = result;
  currentOperation = null;
}
