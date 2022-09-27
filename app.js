const form = document.querySelector("form");
const addTask = document.querySelector("#new-task-submit");
const inputValue = document.querySelector("#new-task-input").value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = inputValue.trim();

  // if (inputValue.length != 0) {
  //   console.log("success frr!!");
  // } else {
  //   alert("Please input a task!");
  //   // generateTemplate(todo);
  // }
});

// const generateTemplate = (todo) => {
//   let main = document.querySelector("main");
//   let ul = document.createElement("ul");
//   let li = document.createElement("li");

//   li.classList.add("list-group");
//   li.append(`<li>${todo}</li>`);

//   ul.classList.add("group-list");
//   ul.appendChild(li);
//   main.appendChild(ul);
// };
