// abstraction
class coffeeMaker {
  grindCoffeeBeans() {
    // taking cvoffeee methods other complex details
    return `grinding coffee beans`;
  }

  mixingmilk() {
    // calculating volumeof milk
    return `mixing milk`;
  }
  pressStartButton() {
    console.log("pressed start button");
    return ` ${this.grindCoffeeBeans()} and  ${this.mixingmilk()}`;
  }
}

let coffeeMachineJSPM = new coffeeMaker();
let operations = coffeeMachineJSPM.pressStartButton();
console.log(operations);
