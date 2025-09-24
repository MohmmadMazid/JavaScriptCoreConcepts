let arr = [2, 3, 4, 5, 6, 7, 8, 9, 0];

//inbuilt find method;

let ans = arr.find((el) => {
  if (el == 9) {
    return el;
  }
});
// console.log(ans);

Array.prototype.myfind = function (callback) {
  if (!callback) {
    throw Error("call back is must");
  }

  let result;
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    result = callback(arr[i], i, arr);
    if (result) {
      return result;
    }
  }
  return result;
};

let ans1 = arr.myfind((el) => {
  if (el == 18) {
    return el;
  }
});
console.log(ans1);

// Array.prototype.myfind = function (callback) {
//   if (!callback) {
//     throw Error("must be a callback function there");
//   }

//   let arr = this;

//   for (let i = 0; i < arr.length; i++) {
//     let result = callback(arr[i], i, arr);
//     if (result) {
//       return arr[i];
//     }
//   }

//   return undefined;
// };

// let val = arr.myfind((el) => el == 5);
// console.log(val);
