const cache = {};

function expensiveCalculation(a, b) {
  return a * b + (a + b) + a * b;
}

function memoization(c, d) {
  let key = c + "" + d;
  if (!cache[key]) {
    let result = expensiveCalculation(c, d);
    cache[key] = result;
    return result;
  } else {
    console.log(
      "I have checked value is present in the cached so i am returing from the cached"
    );
    let result = cache[key];
    return result;
  }
}

let memoizedvalue = memoization(5, 5);
console.log(memoizedvalue);
let memoizedvalue1 = memoization(5, 9);
console.log(memoizedvalue1);

// function expensiveCalculation(a, b) {
//   return a * b * (a * b) + (a + b) * (a * b);
// }

// function memoizationTechnique(a, b) {
//   let key = a + " : " + b;

//   if (!cache[key]) {
//     let result = expensiveCalculation(a, b);
//     cache[key] = result;
//     return result;
//   } else {
//     return ` returning from cache $cache[key]`;
//   }
// }

// for (let i = 0; i < 5; i++) {
//   console.log(memoizationTechnique(4, 6));
// }
// expensiveCalculation(4, 6);
