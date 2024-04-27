// Funciton to delete only one digit/Operator
function deleteOne(){
    const display = document.getElementById('display')
    const currentValue = display.value;
    const currentValueString = currentValue.slice(0,-1);
    display.value = currentValueString;
}

const display = document.getElementById("display")

function appendNumber(number){
    display.value += number
}

function allClear(){
    display.value = ""
}

function calculate(){
    try {
        display.value = eval(display.value) 
    } catch (error) {
        display.value = "Error"
    }
    
}