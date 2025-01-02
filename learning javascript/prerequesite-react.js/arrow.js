console.log("this is script loaded");
function fun1() {
  console.log("hello world ");
}

// arrow function
let fun2 = () => {
  console.log("second hello world ");
};

function test(fun3) {
  fun3();
  return fun3;
}

test(() => {
  console.log("herllo");
});

const sum = (A, B) => {
  return A + B;
};
console.log(sum(10, 35));
