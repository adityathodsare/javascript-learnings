function sayhello() {
  console.log("this will call after 3 seconds");
}

setTimeout(() => {
  sayhello();
}, 3000);

// or

// setTimeout(sayhello, 3000);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
