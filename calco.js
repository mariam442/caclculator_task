let x;
let y;
let operation;
function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function multi(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    return x / y;
}
function calculate() {
    x = parseInt(prompt("Please enter first number:"));
    y = parseInt(prompt("Please enter second number:"));
    operation = prompt("Please choose an operation (+, -, *, /):");

switch (operation) {
    case "+":
        console.log("Result:", add(x, y));
        break;
    case "-":
        console.log("Result:", sub(x, y));
        break;
    case "*":
        console.log("Result:", multi(x, y));
        break;
    case "/":
        const result = divide(x, y);
            if (result !== null) {
                console.log("Result:", result);
            }
        break;
    default:
        console.log("Invalid operation. Please try again.");
    }
}
calculate();