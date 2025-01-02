// clousers

const counter = () => {
  let counter = 0;
  let increment = () => {
    counter++; //1 //2  //3
    return counter;
  };
  return increment;
};

let counterDetail = counter();
console.log(counterDetail()); //1
console.log(counterDetail()); //2
console.log(counterDetail()); //3
