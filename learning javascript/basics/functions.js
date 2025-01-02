// function makeTea(typeOfTea) {
//   return `make ${typeOfTea}`;
// }
// function processTeaOrder(makeTea) {
//   return makeTea("early gray");
// }
// let processTeaOrderVar = processTeaOrder(makeTea);
// console.log(processTeaOrderVar);

// problem 4
function makeTea(typeOfTea) {
  return `make ${typeOfTea}`;
}
function processTeaOrder(makeTea1) {
  return makeTea("early gray");
}
let processTeaOrderVar = processTeaOrder(makeTea);
console.log(processTeaOrderVar);

// problem 5
function TypeTea(teaType) {
  return `making  ${teaType}`;
}
function createTeaMaker() {
  let teaMaker = TypeTea(" green tea ");
  return teaMaker;
}
console.log(createTeaMaker());
