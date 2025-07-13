const resultField = document.getElementById("result")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const b9 = document.getElementById("b9")
const b0 = document.getElementById("b0")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const equals = document.getElementById("equals")
const multiply = document.getElementById("multiply")
const devide = document.getElementById("devide")
const clear = document.getElementById("clear")


let result = 0;
let chosenOne = 0;
let expression = '';
window.addEventListener("click", (e) => {
    const target = e.target;

    switch(target){
        case b1:
            if(expression === 0) expression = ''
            expression += "1"
            setResultField(expression)
            break;
        case b2:
            if(expression === 0) expression = ''
            expression += "2"
            setResultField(expression)
            break;
        case b3:
            if(expression === 0) expression = ''
            expression += "3"
            setResultField(expression)
            break;
        case b4:
            if(expression === 0) expression = ''
            expression += "4"
            setResultField(expression)
            break;
        case b5:
            if(expression === 0) expression = ''
            expression += "5"
            setResultField(expression)
            break;
        case b6:
            if(expression === 0) expression = ''
            expression += "6"
            setResultField(expression)
            break;
        case b7:
            if(expression === 0) expression = ''
            expression += "7"
            setResultField(expression)
            break;
        case b8:
            if(expression === 0) expression = ''
            expression += "8"
            setResultField(expression)
            break;
        case b9:
            if(expression === 0) expression = ''
            expression += "9"
            setResultField(expression)
            break;
        case b0:
            if(expression === 0) expression = ''
            expression += "0"
            setResultField(expression)
            break;
        case plus:
            if(expression === 0) expression = ''
            expression += "+"
            setResultField(expression)
            break;
        case minus:
            if(expression === 0) expression = ''
            expression += "-"
            setResultField(expression)
            break;
        case multiply:
            if(expression === 0) expression = ''
            expression += "*"
            setResultField(expression)
            break;
        case devide:
            if(expression === 0) expression = ''
            expression += "/"
            setResultField(expression)
            break;
        case equals:
            calculate()
            break;
        case clear:
            expression = 0
            setResultField("0")
            break;
    }
})



function setResultField(text){
    console.log(text)
    resultField.innerHTML = text;

    const displayDiv = document.querySelector('.screen');
    displayDiv.scrollLeft = displayDiv.scrollWidth;
}

function calculate(){
    try {
    const result = eval(expression);
    expression = result.toString();
    setResultField(expression);
    } catch (e) {
    expression = 'Error';
    setResultField(expression);
    }
}