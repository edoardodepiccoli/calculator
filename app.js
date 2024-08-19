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
}

// dom references
const buttonsContainer = document.querySelector(".buttons-container");

// event listeners
buttonsContainer.addEventListener("click", (e) => {
  if (e.target.matches(".operand-button")) {
    console.log("clicked operand button");
  } else if (e.target.matches(".operator-button")) {
    console.log("clicked operator button");
  } else if (e.target.matches(".compute-button")) {
    console.log("clicked compute button");
  } else if (e.target.matches(".utility-button")) {
    console.log("clicked utility button");
  }
});
