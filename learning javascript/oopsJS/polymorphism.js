class sparrow {
  fly() {
    console.log("Sparrow is flying");
  }
}

class penguin extends sparrow {
  fly() {
    console.log("Penguin cant  flying");
  }
}

let sparrow1 = new sparrow();
let penguin1 = new penguin();
sparrow1.fly(); // same name different outputs
penguin1.fly(); // fly methods present in many forms
