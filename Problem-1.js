const readline = require("readline");

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
        return "Invalid";
    }
  }
}

const rdl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rdl.question("Enter first number: ", (a) => {
  rdl.question("Enter second number: ", (b) => {
    rdl.question("Enter operation (add, subtract, multiply, divide): ", (op) => {
      const calc = new Calculator(parseFloat(a), parseFloat(b));
      console.log("Result:", calc.calculate(op));
      rdl.close();
    });
  });
});
