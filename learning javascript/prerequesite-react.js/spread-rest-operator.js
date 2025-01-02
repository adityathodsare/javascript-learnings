let userArr = ["aditya", "om", "ramesh", "manish"];
console.log(userArr);
//["aditya", "om", "ramesh", "manish"]

let allActiveUsers = [...userArr, "mahesh", "prajakta", "kajal "];
// ... this is the speread operator
console.log(allActiveUsers);

// [
//   ("aditya", "om", "ramesh", "manish", "mahesh", "prajakta", "kajal ")
// ];

// for objects
let productobj = {
  prodid: "mi note 6 ",
  price: 10000,
};

console.log(productobj);

let new_prodUCT_OBJ = {
  ...productobj,
  SELLS: 100000,
};

console.log(new_prodUCT_OBJ);

//o/p
// { prodid: 'mi note 6 ', price: 10000 }
// { prodid: 'mi note 6 ', price: 10000, SELLS: 100000 }
