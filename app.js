let firstOperand = 0
let secondOperand = 0
let currentOperation = null
let shouldClearDisplay = false
let done = false

const numbers = document.querySelectorAll(".number")
const operations = document.querySelectorAll(".operation")

const lastOperationDisplay = document.querySelector(".display-top")
const currentOperationDisplay = document.querySelector(".display-bottom")

const deleteButton = document.querySelector(".delete")
const clearButton = document.querySelector(".clear")

const dotButton = document.querySelector(".dot")

for(let number of numbers){ number.addEventListener("click", ()=>{appendNumber(number.textContent)}) }
for(let op of operations){ op.addEventListener("click", ()=>{ setOperation(op.textContent) }) }
deleteButton.addEventListener("click", deleteNumber)
clearButton.addEventListener("click", clearAll)
dotButton.addEventListener("click", addDot)

function add(a,b){return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){return a/b}

function operate(operator, a, b){
    shouldClearDisplay = true
    done = true
    switch(operator){
        case "+": return add(a,b)
        case "-": return subtract(a,b)
        case "*": return multiply(a,b)
        case "/": return divide(a,b)
        default: null
    }
}

function resetDisplay(){ currentOperationDisplay.textContent = "" }
function resetAllDisplays() { lastOperationDisplay.textContent = "" }

function clearAll(){
    firstOperand, secondOperand = 0
    currentOperation = null
    shouldClearDisplay = false
    lastOperationDisplay.textContent = ""
    resetDisplay()
}

function appendNumber(text){
    if(shouldClearDisplay) resetDisplay()
    if(currentOperationDisplay.textContent==="0") {
        currentOperationDisplay.textContent = text
        return
    }
    currentOperationDisplay.textContent += text
    shouldClearDisplay = false
}

function deleteNumber(){
    if(currentOperationDisplay.textContent==="0" || currentOperationDisplay.textContent==="") return

    let lastIndex = currentOperationDisplay.textContent.length-1
    let lastIndexLastOp = lastOperationDisplay.textContent.length-1
    if(lastOperationDisplay.textContent[lastIndexLastOp]===currentOperationDisplay.textContent[lastIndex]) {
        lastOperationDisplay.textContent = lastOperationDisplay.textContent.slice(0,-1)
    }

    currentOperationDisplay.textContent = currentOperationDisplay.textContent.slice(0,-1)
}

function addDot(){
    text = currentOperationDisplay.textContent
    lastIndex = text.length - 1
    if(currentOperationDisplay.textContent===""){
        currentOperationDisplay.textContent = "0"
        return
    }
    if(text[lastIndex]===".") return
    if(text.includes(".")) return
    currentOperationDisplay.textContent += "."
}

function setOperation(text){
    console.log(currentOperation)
    console.log(text)
    if(currentOperation!=null && shouldClearDisplay===true) {
        console.log("change operator")
        currentOperationDisplay.textContent = text
        lastOperationDisplay.textContent += text
        currentOperation = text
        shouldClearDisplay = true
    }
    else if(currentOperation!=null && shouldClearDisplay===false) {
        console.log("should compute")
        secondOperand = currentOperationDisplay.textContent
        lastOperationDisplay.textContent += `${secondOperand}=`
        let result = operate(currentOperation, Number(firstOperand), Number(secondOperand))
        currentOperationDisplay.textContent = result
        lastOperationDisplay.textContent += result
        if(text!="=") lastOperationDisplay.textContent += text
        firstOperand = Number(result)
        shouldClearDisplay = true
        currentOperation = text
        return
    }
    else{
        console.log("normal operation")
        firstOperand = Number(currentOperationDisplay.textContent)
        lastOperationDisplay.textContent = firstOperand + text
        // secondOperand = currentOperationDisplay.textContent
        // lastOperationDisplay.textContent += `${secondOperand}=`
        currentOperationDisplay.textContent = text
        currentOperation = text
        shouldClearDisplay = true
    }
}

