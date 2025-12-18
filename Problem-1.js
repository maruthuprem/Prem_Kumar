class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(operation) {
    switch (operation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        return this.b !== 0 ? this.a / this.b : "Division by zero not allowed";
      default:
        return "Invalid operation";
    }
  }
}

// Input values
const a = 10;
const b = 5;
const operation = "add";

const calculator = new Calculator(a, b);
console.log(calculator.calculate(operation));
