// function demo() {
//   return new Promise((resove, reject) => {
//     let sucess = true;
//     setTimeout(() => {
//       if (sucess) {
//         resove("success");
//       } else {
//         reject("failure");
//       }
//     }, 3000);
//   });
// }
// demo()
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

// example of promise

let url = "https://jsonplaceholder.typicode.com/todos/12";
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// output
// {
//     "userId": 1,
//     "id": 12,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   }
