function generateConditionalSeries(a) {
  let limit = a % 2 === 0 ? a - 1 : a;
  let result = [];

  for (let i = 0; i < limit; i += 2) {
    result.push(i + 1);
  }
  console.log(result.join(", "));
}

const a = 6; // input value
generateConditionalSeries(a);
