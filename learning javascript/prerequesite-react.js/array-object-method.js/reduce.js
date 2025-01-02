// addition of all elements
let marks = [80, 79, 78, 70, 65];
let addAllEleOfArr = marks.reduce((acc, items) => {
  console.log(acc);
  console.log(items);
  console.log("_+_++_+_+_+_+_+_+_+_");
  return acc + items;
});
console.log(addAllEleOfArr);

// multiplication  of all elements
let mulall = marks.reduce((acc, items) => {
  console.log(acc);
  console.log(items);
  console.log("_+_++_+_+_+_+_+_+_+_");
  return acc * items;
});
console.log(mulall);
