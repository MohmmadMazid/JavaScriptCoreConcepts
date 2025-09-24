let arr = [1, 3, 6, 9, 4, 7];

Array.prototype.mayfind = function (callback) {
  if (!callback) {
    throw error("callback function is must be there");
  }

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    if (result) {
      return arr[i];
    }
  }

  return undefined;
};

let ans = arr.mayfind((el) => {
  return el == 3;
});
console.log(ans);
