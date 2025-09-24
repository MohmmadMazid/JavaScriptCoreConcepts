let arr = [1, 3, 5, 2, 7, 9, 4];

let newarr = arr.some((el) => el > 4);
console.log(newarr);

Array.prototype.mysomeFunction = function (callback) {
  if (!callback) {
    throw error("call back must be there");
  }

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    if (result) {
      return true;
    }
  }

  return false;
};

let myarr = arr.mysomeFunction((el) => el > 14);
console.log(myarr);
