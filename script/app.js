const textInput = document.querySelector("#input-field");
const addButton = document.querySelector("#Add-button");
const todocontainer = document.querySelector(".todos-container");

addButton.addEventListener("click", () => {
  if (textInput.value.trim().length === 0) return;

  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList.add("todo-item-container");
  todocontainer.appendChild(todoItemContainer);
  const todoText = document.createElement("p");
  todoText.id = "todo-text";
  todoText.innerText = textInput.value;
  todoItemContainer.appendChild(todoText);

  textInput.value = "";
});
