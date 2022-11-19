document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    handleToDo(event.target["new-task-description"].value);
    form.reset();
  });
});

function handleToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = " x ";
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.getElementById("list").appendChild(p);
}

function handleDelete(event) {
  event.target.parentNode.remove();
}
