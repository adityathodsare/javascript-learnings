// prototypal inheritance learning

function parent(name) {
  this.name = name;
}

parent.prototype.child = function () {
  let parentname = this.name;
  return `parent name is ${parentname}`;
};

let aditya = new parent("aditya");
console.log(aditya.child());
