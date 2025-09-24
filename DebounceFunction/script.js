let inp = document.querySelector("input");

function debounce(fun, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fun(args);
    }, delay);
  };
}

function result(data) {
  console.log("input event trigerred", data);
}

let debounceResult = debounce(result, 1000);

inp.addEventListener("input", (e) => debounceResult(e.target.value));

/*
let inp = document.querySelector("input");

function outcome() {
  console.log("event listener  triggered");
}

function hocDebounce(fun, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fun();
    }, delay);
  };
}

let result = hocDebounce(outcome, 1000);

// inp.addEventListener("input", debounce);
inp.addEventListener("input", result);

*/

//updater version

// function outcome(data) {
//   console.log("event listener  triggered", data);
// }

// function hocDebounce(fun, delay) {
//   let timer;
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       fun(args);
//     }, delay);
//   };
// }

// let result = hocDebounce(outcome, 1000);

// // inp.addEventListener("input", debounce);
// inp.addEventListener("input", (e) => result(e.target.value));
//
