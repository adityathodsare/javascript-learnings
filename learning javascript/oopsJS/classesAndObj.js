class vehecle {
  // classname
  constructor(company, model, year) {
    // constructor
    this.company = company;
    this.model = model;
    this.year = year;
  }
  drive() {
    return `${this.company} ${this.model} is driving`;
  }
}

// inheritance
class car extends vehecle {
  // own method
  speed() {
    return `speed is high`;
  }
}

// objects of class
let tata = new car("Tata", "Safari", 2020);
console.log(tata.drive());
console.log(tata.speed());
console.log(`${tata.company} company ${tata.model} model  ${tata.year}year`);

// main class object
let toyota = new vehecle("toyota", "Safari", 2040);
console.log(toyota.drive());
//console.log(toyota.speed()); // this is inside the chiles parent cannot access it
console.log(
  `${toyota.company} company ${toyota.model} model  ${toyota.year}year`
);
