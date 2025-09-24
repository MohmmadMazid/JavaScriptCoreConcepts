// const myfun = (a, b) => {
//   console.log(a + b);
//   console.log(a, b);
// };

// myfun.call(null, 4, 5);

// const Person = function (name) {
//   this.firstName = name;
//   this.sayName1 = function () {
//     console.log(this.firstName);
//   };
//   this.sayName2 = () => {
//     console.log(this.firstName);
//   };
// };

// const john = new Person("John");
// const dave = new Person("Dave");

// john.sayName1(); // John
// john.sayName2(); // John

// // The regular function can have its `this` value changed, but the arrow function cannot
// john.sayName1.call(dave); // Dave (because `this` is now the dave object)
// john.sayName2.call(dave); // John

// john.sayName1.apply(dave); // Dave (because `this` is now the dave object)
// john.sayName2.apply(dave); // John

// john.sayName1.bind(dave)(); // Dave (because `this` is now the dave object)
// john.sayName2.bind(dave)(); // John

// const sayNameFromWindow1 = john.sayName1;
// sayNameFromWindow1(); // undefined (because `this` is now the window object)

// const sayNameFromWindow2 = john.sayName2;
// sayNameFromWindow2(); // John
// myfun.apply(null, [2, 6]);

function* numberGenerator() {
  let num = 0;
  while (num <= 5) {
    console.log(num++);
    yield num++;
  }
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
