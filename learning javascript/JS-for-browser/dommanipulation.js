// challenge 1
document.getElementById("btn").addEventListener("click", function () {
  let para = document.getElementById("p");
  para.textContent = "hey its aditya here";
  para.style.color = "green";
});

// challenge 2 adding background to first element of the list
document.getElementById("btn1").addEventListener("click", function () {
  let first = document
    .getElementById("list")
    .firstElementChild.classList.add("highlight");
});

// challenge 3 add element to list by clicking the button
document.getElementById("btn2").addEventListener("click", function () {
  let list1 = document.getElementById("list");
  let li = document.createElement("li");
  li.textContent = "omkar";
  list1.appendChild(li);
  //   let list = document.createElement("li");
  //   list.textContent = "omkar";
  //   document.getElementById("list").appendChild(list);
});

// removing last element from the list
document.getElementById("btn3").addEventListener("click", function () {
  let first = document.getElementById("list");
  first.lastElementChild.remove();
});
