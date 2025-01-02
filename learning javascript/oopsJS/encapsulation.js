class bankacc {
  #bankBalence = 100;
  deposit(amount) {
    this.#bankBalence += amount;
  }
  showBalence() {
    console.log(`$ ${this.#bankBalence}`);
  }
}

// lets create an object
let aditya = new bankacc();
aditya.deposit(100);
aditya.showBalence();

// console.log(aditya.#bankBalence);
// this will give an err #bankBalence cannot be accessed  outside
