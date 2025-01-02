console.log("hello world");
var score = 100;
var naame = "aditya";
console.log(score);
console.log("NAME IS " + naame);

// objects
let students = ["aditya", "amol", "sham"];
console.log(students);

// changing value
var num = 10;
console.log(num);
num = 16;
console.log(num);

// constant
const num1 = 10;
console.log(num);
// num1 = 16;
// console.log(num); // not valid to change constants

console.log(2 ** 6); //two to the power

var price = 20000;
console.log(typeof price);

// loop problem 1
let arr = ["aditya", "shivtej", "khushi", "kirti"];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "khushi") {
    arr1.push(arr[i]);
  } else {
    break;
  }
}
console.log(arr1);

// problem2

// let arr = ["pune", "mumbai", "chennai", "jalgao", "hydrabad"];
// let arr1 = arr.slice();
// console.log(arr1);
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === "jalgao") {
//     delete arr1[i];
//   } else {
//     continue;
//   }
// }
// console.log(arr1);

// loop problem 3
// let arr = ["pune", "mumbai", "chennai", "jalgao", "hydrabad"];
// let arr1 = [];
// console.log(arr1);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "jalgao") {
//     continue;
//   } else {
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1);

// loop problem 4
let numbers = [1, 2, 3, 4, 5];
let smallnumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  } else {
    smallnumbers.push(num);
  }
}
console.log(smallnumbers);
