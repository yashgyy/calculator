let first_var,second_var,opcode
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operator(opcode,a,b) {
    if(opcode == "+") return add(a,b)
    if(opcode == "-") return subtract(a,b)
    if(opcode == "*") return multiply(a,b)
    if(opcode == "/") return divide(a,b)
}

first_var = parseInt(prompt("Enter First Number"))
second_var = parseInt(prompt("Enter Second Number"))
opcode = prompt("Enter the operation")

console.log(operator(opcode,first_var,second_var))


