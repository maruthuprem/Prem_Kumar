function generateSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

// Call the function 
const a = 4; //  change this value for testing
generateSeries(a);
