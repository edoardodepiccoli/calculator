// app logic
let first = null;
let second = null;
let operator = null;

let toOperate = false;
let startAgain = true;

function log() {
  console.log(
    `first = ${first}, second = ${second}, operator = ${operator}\ntoOperate = ${toOperate}, startAgain = ${startAgain}`
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

  log();
}

function handleOperand(value) {
  if (first === null || startAgain) {
    first = value;
    startAgain = false;
  } else {
    if (first && toOperate === false) {
      first = first + value;
    } else if (first && toOperate) {
      if (second === null) {
        second = value;
        toOperate = true;
      } else {
        second = second + value;
      }
    }
  }

  log();
}

function handleOperator(value) {
  if (first === null) {
    log();
    return;
  } else {
    if (operator === null) {
      operator = value;
    } else {
      if (value === operator) {
        log();
        return;
      } else {
        if (toOperate === false) {
          operator = value;
        } else {
          operate();
          second = null;
        }
      }
    }
  }

  log();
}

function handleCompute() {
  if (first === null || operator === null) {
    return;
  } else {
    if (second === null) {
      second = first;
      toOperate = true;
      operate();
    } else {
      operate();
    }
  }

  startAgain = true;
  log();
}

// dom references
const buttonsContainer = document.querySelector(".buttons-container");

// event listeners
buttonsContainer.addEventListener("click", (e) => {
  if (e.target.matches(".operand-button")) {
    console.log("clicked operand button");
    handleOperand(e.target.innerText);
  } else if (e.target.matches(".operator-button")) {
    console.log("clicked operator button");
  } else if (e.target.matches(".compute-button")) {
    console.log("clicked compute button");
  } else if (e.target.matches(".utility-button")) {
    console.log("clicked utility button");
  }
});
