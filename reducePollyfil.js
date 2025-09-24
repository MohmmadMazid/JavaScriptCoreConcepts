let arr = [1, 2, 3, 4, 8, 6];

let ans = arr.reduce((accum, el) => accum + el);

console.log(ans);

Array.prototype.myreduce = function (callback) {
  if (!callback) {
    console.log("callback is must");
  }

  let arr = this;
  let reduceVal = 0;

  for (let i = 0; i < arr.length; i++) {
    reduceVal = callback(reduceVal, arr[i], i, arr);
    // console.log(reduceVal);
  }

  return reduceVal;
};

let reducefunctionVal = arr.myreduce((accum, el) => accum + el);
console.log(reducefunctionVal);

// my own ome method;

// Array.prototype.myReduce = function (callback, intialvalue) {
//   if (!callback) {
//     throw Error("it wont work without call back function");
//   }

//   let ans = this;
//   let sum;
//   if (ans.length == 0) {
//     return undefined;
//   }

//   for (let i = 0; i < ans.length; i++) {
//     sum = callback(intialvalue, ans[i], i, arr);
//     intialvalue = sum;
//   }
//   return intialvalue;
// };

// let arr1 = [];
// let val = arr.myReduce((accum, el) => {
//   return accum + el;
// }, 0);
// console.log(val);

// let ans1 = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(ans1);
