let cache = {};

function memoization(a, b) {
  let key = a + " " + b;

  if (!cache[key]) {
    cache[key] = a + b;
    return cache[key];
  } else {
    console.log("this is taken the ans from the cache ");
    return cache[key];
  }
}

let ans1 = memoization(4, 5);
console.log(ans1);
let ans2 = memoization(4, 5);
console.log(ans2);
