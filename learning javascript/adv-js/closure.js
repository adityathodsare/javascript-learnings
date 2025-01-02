function increment() {
  let counter = 7;
  return function () {
    counter++;
    return counter;
  };
}

let counter = increment();
// counter contain return value of increment function
/*
function () {
    counter++;
    return counter;
  };
 */
console.log(counter());
console.log(counter());
console.log(counter());
