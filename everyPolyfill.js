let arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.MyEvery = function (callback) {
  if (!callback) {
    throw Error("without call back it wont work");
  }

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);

    if (!result) {
      return false;
    }
  }

  return true;
};

let ans = arr.MyEvery((el) => el > 10);
console.log(ans);
