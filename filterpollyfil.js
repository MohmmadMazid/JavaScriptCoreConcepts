let arr = [2, 4, 6, 8];

// let newarr = arr.filter((el, index, ar) => {
//   // console.log(el, index, ar);
//   if (el > 4) {
//     return el;
//   }
// });

Array.prototype.myfilter = function (callback) {
  if (!callback) {
    throw Error("callback is must");
  }

  let arr = this;
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    if (result) {
      newarr.push(result);
    }
  }
  return newarr;
};

let ar = arr.myfilter((el, i, arr) => {
  if (el <= 2) {
    return el;
  }
});
console.log(ar);

// console.log(newarr);

// Array.prototype.myFilter = function (callback) {
//   if (!callback) {
//     throw Error(
//       "this wont work because this need a callback function which u have not passed "
//     );
//   }

//   let arr = this;
//   let newarr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let result = callback(arr[i], i, arr);
//     if (result) {
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// };

// let ar = arr.myFilter((el) => el > 4);
// console.log(ar);
