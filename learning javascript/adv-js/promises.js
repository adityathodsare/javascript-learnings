//promise

function learningpromise() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("success");
      } else {
        reject("failure");
      }
    }, 3000);
  });
}
let promise = learningpromise();
console.log(promise);

learningpromise()
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject.upperCase()));

//  we can also use it as

// promise
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));
