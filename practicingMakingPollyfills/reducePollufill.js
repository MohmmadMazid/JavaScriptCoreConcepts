let arr = [2, 4, 7, 1, 9, 3, 6, 8];

Array.prototype.myreduce = function (callback) {
  if (!callback) {
    throw error("callback function is must be there");
  }

  let arr = this;
  if (arr.length == 0) {
    return undefined;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i], i, arr);
  }

  return sum;
};

let ans = arr.myreduce((accum, el) => {
  return accum + el;
});

console.log(ans);
