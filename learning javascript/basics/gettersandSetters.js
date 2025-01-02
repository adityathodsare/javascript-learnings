class bank {
  constructor(name, balance) {
    this.name = name;
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  set balance(amount) {
    this._balance = amount;
  }
}

let aditya = new bank("aditya", 5000);
console.log(aditya.balance);
aditya.balance = 10000;
console.log(aditya.balance);
