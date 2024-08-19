// app logic
let first = null;
let second = null;
let operator = null;

let toOperate = false;
let startAgain = false;

let buttonRef;

function log() {
  console.log(
    `first = ${first}, second = ${second}, operator = ${operator}\ntoOperate = ${toOperate}`
  );
}

function operate() {
  if (operator === "add") {
    first = Number(first) + Number(second);
  } else if (operator === "subtract") {
    first = Number(first) - Number(second);
  } else if (operator === "multiply") {
    first = Number(first) * Number(second);
  } else if (operator === "divide") {
    first = Number(first) / Number(second);
  }

  updateDisplay(first);

  log();
}

function handleOperand(value) {
  if (first === null || startAgain) {
    first = value;
    updateDisplay(first);
    startAgain = false;
  } else {
    if (operator === null) {
      first = first + value;
      updateDisplay(first);
    } else {
      if (second === null) {
        second = value;
        updateDisplay(second);
      } else {
        if (toOperate) {
          second = second + value;
          updateDisplay(second);
        } else {
          second = value;
          updateDisplay(second);
        }
      }
    }
  }

  log();
}

function handleOperator(value, ref) {
  if (first === null) return;

  startAgain = false;

  if (operator === null) {
    if (buttonRef) removeActiveClass();
    operator = value;
    buttonRef = ref;
    addActiveClass();
    toOperate = true;
  } else {
    if (operator === value && toOperate === false) {
      return;
    } else {
      if (toOperate) {
        operate();
        removeActiveClass();
        operator = value;
        buttonRef = ref;
        addActiveClass();
        second = null;
      } else {
        removeActiveClass();
        operator = value;
        buttonRef = ref;
        addActiveClass();
        toOperate = true;
      }
    }
  }

  log();
}

function handleCompute(ref) {
  if (first === null) return;

  operate();
  toOperate = false;
  second = null;
  operator = null;

  startAgain = true;

  removeActiveClass();
  buttonRef = ref;
  addActiveClass();

  log();
}

// dom references
const buttonsContainer = document.querySelector(".buttons-container");
const display = document.querySelector("#display");

// event listeners
buttonsContainer.addEventListener("click", (e) => {
  if (e.target.matches(".operand-button")) {
    console.log("clicked operand button");
    handleOperand(e.target.innerText);
  } else if (e.target.matches(".operator-button")) {
    console.log("clicked operator button");
    handleOperator(e.target.dataset.operation, e.target);
  } else if (e.target.matches(".compute-button")) {
    console.log("clicked compute button");
    handleCompute(e.target);
  } else if (e.target.matches(".utility-button")) {
    console.log("clicked utility button");
  }
});

function updateDisplay(text) {
  display.innerText = text;
}

function removeActiveClass() {
  if (buttonRef.classList.contains("operation-active")) {
    buttonRef.classList.remove("operation-active");
  }
}

function addActiveClass() {
  if (!buttonRef.classList.contains("operation-active")) {
    buttonRef.classList.add("operation-active");
  }
}
