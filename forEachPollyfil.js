//going to make my own foreach loop

let arr = [1, 2, 3, 4, 5, 6];
Array.prototype.MyforEach = function (callback) {
  // here always use the function with anem or anonymously function dont use the array function because arraow fucntion dont have its own this keywor

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

arr.MyforEach((item, index, arr) => {
  console.log(item, index, arr);
});
