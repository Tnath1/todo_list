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

  //   Adding the edit & delete button

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const editbtn = document.createElement("button");
  editbtn.id = "edit";

  //   creating and adding the icon to the btn

  const editimg = document.createElement("img");
  editimg.src = "icons/image-editing.png";
  editbtn.appendChild(editimg);
  btnContainer.appendChild(editbtn);
  todoItemContainer.appendChild(btnContainer);

  //   delete

  const deletebtn = document.createElement("button");
  deletebtn.id = "trash";

  const deleteimg = document.createElement("img");
  deleteimg.src = "icons/trash.png";
  deletebtn.appendChild(deleteimg);
  btnContainer.appendChild(deletebtn);
  todoItemContainer.appendChild(btnContainer);

  textInput.value = "";
});
