const state = {
    // if the counter is 0 then the operation is at the starting stage
    counter : 0,
    num1 : 0,
    num2 : 0,
    operation : "",
    start : true
}

const numberButtons = document.querySelectorAll(".number-button")
const bottomDisplay = document.querySelector(".display-bottom")
const topDisplay = document.querySelector(".display-top")
const operationButtons = document.querySelectorAll(".operation-button")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const equalsButton = document.querySelector("#equals")

function updateTopDisplay(text){
    const oldText = String(topDisplay.textContent)
    const newText = String(text)
    const completeText = oldText+newText
    console.log(completeText)
    topDisplay.textContent=completeText

    if(text === "clearAll") topDisplay.textContent=""
}

// handle numeric buttons 
function changeNum1(id){
    // se il counter è uguale a quello associato al numero da cambiare, skippa
    // però potrei fare che se il counter rimane lo stesso allora incremento
    if(state.counter===1) return

    if(state.num1 !=0 && state.start===false){
        const enteredAgain = String(id)
        const currentNum = String(state.num1)
        const stringResult = currentNum+enteredAgain
        state.num1 = parseInt(stringResult)
        bottomDisplay.textContent = parseInt(stringResult)
        updateTopDisplay(parseInt(id))
        console.log(state)
        return
    }

    state.start = false

    state.num1 = parseInt(id)
    bottomDisplay.textContent = parseInt(id)
    updateTopDisplay(parseInt(id))

    console.log(state)
}

function changeNum2(id){
    if(state.counter === 0) return

    if(state.num2 !=0){
        const enteredAgain = String(id)
        const currentNum = String(state.num2)
        const stringResult = currentNum+enteredAgain
        state.num2 = parseInt(stringResult)
        bottomDisplay.textContent = parseInt(stringResult)
        updateTopDisplay(parseInt(id))
        console.log(state)
        return
    }

    state.num2 = parseInt(id)
    bottomDisplay.textContent = parseInt(id)
    console.log(state)
}

function counterCheck(id){
    if(state.counter===0){
        changeNum1(id)
    }
    else{
        changeNum2(id)
    }
}

for(let button of numberButtons){
    button.addEventListener("click", ()=>counterCheck(button.id))
}

// handle operation buttons
function changeTurn(){
    if(state.counter===0) state.counter=1
    else state.counter=0
}

function changeOperation(id){
    const currentButton = document.querySelector("#"+id)
    if(state.operation != "add" && state.operation != "subtract" && state.operation != "multiply" && state.operation != "divide") changeTurn()

    state.operation = id
    bottomDisplay.textContent = currentButton.textContent
    updateTopDisplay(currentButton.textContent)

    console.log(state)
}

for(let button of operationButtons){
    button.addEventListener("click", ()=>changeOperation(button.id))
}

// handle clear and delete buttons
function clear(){
    if(state.counter===0){
        state.num1=0
    }
    else{
        state.num2=0
    }
    bottomDisplay.textContent=""
    console.log(state)
}

function resetState(){
    state.counter=0
    state.num1=0
    state.num2=0
    state.operation=""

    bottomDisplay.textContent=""
    updateTopDisplay("clearAll")
    console.log(state)
}

clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", resetState)

// handle equals logic
function equals(){
    console.log("equals")
    updateTopDisplay("=")
    if(state.operation === "add"){
        const result = state.num1 + state.num2
        state.num1 = result
        state.counter = 0
        state.operation = ""

        bottomDisplay.textContent = result
        updateTopDisplay(result)
    }
    else if(state.operation === "subtract"){
        const result = state.num1 - state.num2
        state.num1 = result
        state.counter = 0
        state.operation = ""

        bottomDisplay.textContent = result
        updateTopDisplay(result)
    }
    else if(state.operation === "multiply"){
        const result = state.num1 * state.num2
        state.num1 = result
        state.counter = 0
        state.operation = ""

        bottomDisplay.textContent = result
        updateTopDisplay(result)
    }
    else if(state.operation === "divide"){
        const result = state.num1 / state.num2
        state.num1 = result
        state.counter = 0
        state.operation = ""

        bottomDisplay.textContent = result
        updateTopDisplay(result)
    }
    state.start = true
    console.log(state)
}

equalsButton.addEventListener("click", equals)
