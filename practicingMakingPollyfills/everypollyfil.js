let arr = [1, 3, 5, 2, 7, 9, 4];

let newarr = arr.every((el) => el > 0);
console.log(newarr);

Array.prototype.myeveryFunction = function (callback) {
  if (!callback) {
    throw error("call back must be there");
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

let myarr = arr.myeveryFunction((el) => el > 0);
console.log(myarr);
