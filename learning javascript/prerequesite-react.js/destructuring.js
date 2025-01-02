// destructuring

const arr = ["aditya", "om", "raju"];
// destructuring
const [name1, name2, name3] = arr;
console.log(name1);
console.log(arr[0]);

// destructuring of objects
let obj = {
  name: "aditya ",
  roll_no: 23,
};

console.log(obj.name);
// destructuring
let { name, roll_no } = obj;
console.log(roll_no);
