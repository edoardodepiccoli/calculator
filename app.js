class Calculator {
  constructor() {
    this.secondaryDisplay = document.querySelector(".secondary-display");
    this.primaryDisplay = document.querySelector(".primary-display");
    this.resetButton = document.querySelector(".reset-button");
    this.deleteButton = document.querySelector(".delete-button");
    this.dotButton = document.querySelector(".dot-button");
    this.equalsButton = document.querySelector(".equals-button");
    this.calculatorButtons = document.querySelectorAll("button");

    this.firstOperand = null;
    this.secondOperand = null;
    this.currentOperator = null;
    this.shouldResetScreen = false; // only true when just chosen the operator

    this.addEventListeners();
  }

  addEventListeners() {
    this.calculatorButtons.forEach((button) => {
      if (
        !button.matches(".special-button") &&
        !button.matches(".operator-button") &&
        !button.matches(".equals-button") &&
        !button.matches(".dot-button")
      ) {
        button.addEventListener("click", () => this.handleNumberButtonClick(button.innerText));
      }
    });

    this.calculatorButtons.forEach((button) => {
      if (button.matches(".operator-button")) {
        button.addEventListener("click", () => this.handleOperatorButtonClick(button.innerText));
      }
    });

    this.resetButton.addEventListener("click", () => this.handleResetButtonClick());
    this.deleteButton.addEventListener("click", () => this.handleDeleteButtonClick());
    this.dotButton.addEventListener("click", () => this.handleDotButtonClick());
    this.equalsButton.addEventListener("click", () => this.handleEqualsButtonClick());
  }

  handleNumberButtonClick(value) {
    if (this.shouldResetScreen || this.primaryDisplay.innerText === "0") {
      this.primaryDisplay.innerText = value;
      this.shouldResetScreen = false;
    } else {
      this.primaryDisplay.innerText += value;
    }
  }

  handleOperatorButtonClick(operator) {
    if (!this.shouldResetScreen && this.currentOperator) {
      this.secondOperand = this.primaryDisplay.innerText;
      this.operate();
    }

    this.currentOperator = operator;
    this.firstOperand = this.primaryDisplay.innerText;
    this.secondaryDisplay.innerText = `${this.firstOperand} ${this.currentOperator}`;
    this.shouldResetScreen = true;
  }

  handleEqualsButtonClick() {
    if (!this.firstOperand || !this.currentOperator) return;
    this.secondOperand = this.primaryDisplay.innerText;
    this.operate();
  }

  handleResetButtonClick() {
    this.primaryDisplay.innerText = "0";
    this.secondaryDisplay.innerHTML = "&nbsp;";
    this.firstOperand = null;
    this.secondOperand = null;
    this.currentOperator = null;
    this.shouldResetScreen = true;
  }

  handleDeleteButtonClick() {
    let string = this.primaryDisplay.innerText;
    if (string.length === 1) {
      this.primaryDisplay.innerText = "0";
      return;
    }
    string = string.slice(0, string.length - 1);
    this.primaryDisplay.innerText = string;
  }

  handleDotButtonClick() {
    if (this.primaryDisplay.innerText.includes(".")) return;
    this.primaryDisplay.innerText += ".";
  }

  getOperation(operationSymbol) {
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

  operate() {
    let result;
    const currentOperation = this.getOperation(this.currentOperator);
    this.firstOperand = Number(this.firstOperand);
    this.secondOperand = Number(this.secondOperand);

    switch (currentOperation) {
      case "addition":
        result = this.firstOperand + this.secondOperand;
        break;
      case "subtraction":
        result = this.firstOperand - this.secondOperand;
        break;
      case "multiplication":
        result = this.firstOperand * this.secondOperand;
        break;
      case "division":
        result = this.firstOperand / this.secondOperand;
        break;
      default:
        break;
    }

    if (result == Math.trunc(result)) result = Math.trunc(result);

    this.primaryDisplay.innerText = result;
    this.secondaryDisplay.innerText = `${this.firstOperand} ${this.currentOperator} ${this.secondOperand} =`;

    this.firstOperand = result;
    this.currentOperator = null;
    this.secondOperand = null;
    this.shouldResetScreen = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
});
