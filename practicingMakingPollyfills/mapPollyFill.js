let arr = [5, 3, 6, 9, 7, 9];

let newArr = arr.map((el, index) => {
  return el * 4;
});

console.log(newArr);

console.log("there are some browser does not support this map function\n");

Array.prototype.mymap = function (callback) {
  if (!callback) {
    throw error("call back function must be there");
  }

  let arr = this;
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    arr1.push(callback(arr[i], i, arr));
  }
  return arr1;
};

let newarr = arr.mymap((el) => {
  return el * 3;
});

console.log(newarr);
