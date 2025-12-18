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

// Example
const calc = new Calculator(10, 5);
console.log(calc.calculate("add"));
console.log(calc.calculate("subtract"));
console.log(calc.calculate("multiply"));
console.log(calc.calculate("divide"));
