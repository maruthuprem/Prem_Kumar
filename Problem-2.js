const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (input) => {
  const a = parseInt(input);
  let result = [];

  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }

  console.log(result.join(", "));
  rl.close();
});
