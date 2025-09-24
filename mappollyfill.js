let arr = [5, 2, 3, 4];
// let ansarr = arr.map((el, index, arr) => el * 5);

// console.log(ansarr);

Array.prototype.mymap = function (callback) {
  if (!callback) {
    throw Error("callback function is must");
  }

  // console.log(this);
  let arr = this;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }

  return newArr;
};

let ar = arr.mymap((el) => {
  return el * 100;
});
console.log(ar);

// Array.prototype.mymapFunction = function (callback) {
//   if (!callback) {
//     throw Error("without call back fucntion it wont work");
//   }
//   let arr = this;
//   let newarr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newarr.push(callback(arr[i], i, arr));
//   }

//   return newarr;
//   console.log(arr);
// };

// let myarr = arr.mymapFunction((el) => el * 4);
// console.log(myarr);
