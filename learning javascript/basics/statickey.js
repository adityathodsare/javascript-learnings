// static keyword is used to create static methods
// to access data directly without creating objects

class calculator {
  static add(a, b) {
    return a + b;
  }
}

// we canot access it using objects like
let calc = new calculator();
//console.log(calc.add(2, 3));
// it will give an error

// we can access it using direct method calkl from class
let result = calculator.add(2, 3);
console.log(result);
// this will not give an error
