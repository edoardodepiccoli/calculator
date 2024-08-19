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

buttonsContainer.addEventListener("click", (e) => {
  if (!e.target.matches(".operand-button")) return;

  console.log(e.target.innerText);
});
