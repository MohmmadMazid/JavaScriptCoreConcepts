// A partial function (partial application) is when we call a function with only some of its arguments, and the
// function returns another function that waits for the rest of the arguments.

//  one way of creating partial function
// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Partial function: supply some arguments now, others later
function partialAdd(a) {
  return function (b) {
    return function (c) {
      return add(a, b, c);
    };
  };
}

console.log(partialAdd(2)(3)(4)); // Output: 9

// another way of crating partial function

function add(a, b) {
  return a + b;
}

let addnext = add.bind(null, 20);
let result = addnext(50);
console.log(result);
