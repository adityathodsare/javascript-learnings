let url1 = "https://jsonplaceholder.typicode.com/todos/1";
let url2 = "https://jsonplaceholder.typicode.com/todos/2";
// asynchronus behaviour

console.log("hello world ");

function fetchdata() {
  fetch(url1)
    .then((response) => response.json)
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
}
console.log("hello world2");

// synchronus behaviour

async function fetchdata2() {
  console.log("hello world3");
  let data = await fetch(url2);
  let data2 = await data.json();
  console.log(data2);
  console.log("hello world4");
}
fetchdata2();

// async function fetchData() {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();
//   console.log(data);
// }

// fetchData();
