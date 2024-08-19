// dom references
const buttonsContainer = document.querySelector(".buttons-container");

// event listeners
buttonsContainer.addEventListener("click", (e) => {
  if (e.target.matches(".operand-button")) {
    console.log("clicked on operand button");
    setOperand(e.target.innerText);
  } else if (e.target.matches(".operator-button")) {
    console.log("clicked on operator button");
    setOperator(e.target.dataset.value);
  } else if (e.target.matches(".utility-button")) {
    console.log("clicked on an utility button");
  }
});
