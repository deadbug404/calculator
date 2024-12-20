//initial setup of ui
const bottom = document.querySelector("#bottom");
let keys = ["7","8","9","÷","4","5","6","×","1","2","3","-","c","0","=","+"];
let keyNumber = 0;

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 4; j++) {
        const column = document.createElement("div");
        column.textContent = keys[keyNumber];
        column.classList.add("key");
        isNaN(keys[keyNumber]) ? column.classList.add("nan"): column.classList.add("number");
        row.appendChild(column);
        keyNumber++;
    }    
    bottom.appendChild(row);
}


//functions of calculator
const result = document.querySelector("#result");
let previousNumber = 0;
let currentOperation = "";
let isNextNumber = false;

function resetInternalValues(){
    previousNumber = 0;
    currentOperation = "";
}

function sendNumberInput(e){
    let value = e.target.textContent;
    if( result.textContent == "0" || isNextNumber){
        result.textContent = value;
        isNextNumber = false;
    }else{
        result.textContent += value
    }
}

function sendOperationInput(e){
    isNextNumber = true;
    let currentNumber = result.textContent;
    let operator = e.target.textContent
    let total = 0;

    if(operator == "c"){
        result.textContent = "0";
        resetInternalValues;
    }else if(operator == "="){
        total = operate(Number(previousNumber),Number(currentNumber),currentOperation);
        result.textContent = total;
        resetInternalValues();
    }else{
        if(previousNumber !== 0 && currentOperation !== "" && operator !== currentOperation){
            total = operate(Number(previousNumber),Number(currentNumber),currentOperation);
            result.textContent = total;
            previousNumber = total;
            currentOperation =  operator
        }else{
            previousNumber = result.textContent;
            currentOperation = operator;
        }
    }

    console.log(`previousNumber: ${previousNumber}`);

}

function operate(num1,num2,operator){
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return substract(num1,num2);
        case "×":
            return multiply(num1,num2);
        case "÷":
            return divide(num1,num2);
    }
}

function add(num1,num2){
    return num1 + num2;
}

function substract(num1,num2){
    return num1 - num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function getNumberOnScreen(){
    return Number(result.textContent);
}


const calculatorKeys = Array.from(document.querySelectorAll(".key"));
calculatorKeys.forEach(key => key.classList.contains("number") ? key.addEventListener("click", sendNumberInput) : key.addEventListener("click", sendOperationInput));
