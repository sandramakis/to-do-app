const form = document.querySelector("form");
const inputValue = document.querySelector("#new-task-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = inputValue.value.trim(); //trim method trims off the white spaces before and after the value in the input
  if (todo.length !== 0) {
    generateTemplate(todo);
    form.reset(); //reset() clears data in the input form after submission
    console.log(todo); //outputs the input value to the console
  } else {
    alert("Please input a task!");
  }
});

const generateTemplate = (todo) => {
  const main = document.querySelector("main");
  const ul = document.createElement("ul");
  ul.classList.add("group-list");

  const newList = `<li class="list-group">
  ${todo}
  <span>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-trash-can"></i>
  </span>
  </li>`;

  ul.innerHTML += newList;
  main.appendChild(ul);

  // DELETING A TASK
};
