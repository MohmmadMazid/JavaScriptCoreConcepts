let arr = [1, 2, 3, 4, 8, 6];

let ans = arr.some((el) => el > 6);
console.log(ans);

// my own ome method;

Array.prototype.mysome = function (callback) {
  if (!callback) {
    throw Error("call back is must ");
  }

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    if (result) {
      return result;
    }
  }

  return false;
};

let val = arr.mysome((el) => {
  if (el + 4 == 10) {
    return true;
  } else {
    return false;
  }
});
console.log(val);

// Array.prototype.Mysome = function (callback) {
//   if (!callback) {
//     throw Error("it wont work without call back function");
//   }

//   let arr = this;

//   for (let i = 0; i < arr.length; i++) {
//     let result = callback(arr[i], i, arr);
//     if (result) {
//       return true;
//     }
//   }
//   return false;
// };

// let val = arr.Mysome((el) => el > 5);
// console.log(val);
