let arr = [1, 3, 6, 9, 4, 7];

let arr1 = arr.filter((el) => {
  return el > 3;
});
console.log(arr1);

Array.prototype.myfilter = function (callback) {
  if (!callback) {
    throw error("callback must be there");
  }

  let arr = this;
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);

    if (result) {
      newarr.push(arr[i]);
    }
  }

  return newarr;
};

let myarr = arr.myfilter((el) => {
  return el > 3;
});
console.log(myarr);
