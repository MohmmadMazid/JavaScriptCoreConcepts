class Demo {
  static username = "daena deena";

  static display() {
    console.log(Demo.username);
    console.log("this is the static method");
  }

  info() {
    Demo.display();
  }
}

Demo.display();
console.log(Demo.username);
