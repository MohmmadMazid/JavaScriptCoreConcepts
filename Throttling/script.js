let button = document.querySelector("button");

// function throttling(fun, delay) {
//   let toggle = true;
//   return function (...args) {
//     if (toggle) {
//       fun(...args);
//       toggle = false;
//       button.disabled = true;
//       setTimeout(() => {
//         toggle = true;
//         button.disabled = false;
//       }, delay);
//     }
//   };
// }

const throttling = function (fun, delay) {
  let toggle = true;
  return function (...args) {
    if (toggle) {
      fun(...args);
      toggle = false;

      button.disabled = true;
      setTimeout(() => {
        toggle = true;
        button.disabled = false;
      }, delay);
    }
  };
};

function checkClicked() {
  console.log("button is cliked");
}

let result = throttling(checkClicked, 1000);

button.addEventListener("click", result);
