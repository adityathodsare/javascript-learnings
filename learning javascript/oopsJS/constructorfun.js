let aditya = function (name, age) {
  this.name = name;
  this.age = age;
  this.describe = function () {
    // console.log(this.name + " is " + this.age + " years old");
  };
};

let aditya1 = new aditya("aditya", 20);
// console.log(aditya1.describe());
// console.log(aditya1);

// SECOND WAY OF WRITING FUNCTION
function worker(name, empid) {
  this.name = name;
  this.empid = empid;
}
worker.prototype.age = function () {
  //   console.log(this.name + " is " + this.empid + " EMPID");
  return `HAPPY`;
};

let aditya2 = new worker("aditya", "SDJDHD37T5");
// console.log(aditya2.age());

//throwing AN ERROR
function drink(any) {
  if (!new.target) {
    throw new Error("must be called with new");
  }
  this.any = any;
}
let coffee = new drink("coffee");
// let tea = drink("tea");
