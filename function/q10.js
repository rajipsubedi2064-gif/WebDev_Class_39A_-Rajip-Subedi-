// ===== Question 10: Smart Function Based Calculator =====
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error: Division by zero" : a / b);

const calculate = (a, b, operationCallback) => operationCallback(a, b);

console.log("--- Q10 ---");
console.log(`Addition: 20 + 10 = ${calculate(20, 10, add)}`);
console.log(`Subtraction: 20 - 10 = ${calculate(20, 10, subtract)}`);
console.log(`Multiplication: 20 * 10 = ${calculate(20, 10, multiply)}`);
console.log(`Division: 20 / 10 = ${calculate(20, 10, divide)}`);
console.log(`Division: 20 / 0 = ${calculate(20, 0, divide)}`);