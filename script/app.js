const textInput = document.querySelector("#input-field");
const addButton = document.querySelector("#Add-button");
const todocontainer = document.querySelector(".todos-container");

function toggleButtonState() {
  if (textInput.value.trim() <= 0) {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
}

// Add an event listener to the input field to listen for input changes
textInput.addEventListener("input", toggleButtonState);

// Initial check to set the initial state of the button
toggleButtonState();

addButton.addEventListener("click", () => {
  function toggleButtonState() {
    if (textInput.value.trim() === "") {
      addButton.disabled = true;
    } else {
      addButton.disabled = false;
    }
  }

  // Add an event listener to the input field to listen for input changes
  textInput.addEventListener("input", toggleButtonState);

  // Initial check to set the initial state of the button
  toggleButtonState();

  if (textInput.value.trim().length === 0) return;

  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList.add("todo-item-container");
  todocontainer.appendChild(todoItemContainer);
  const todoText = document.createElement("p");
  todoText.id = "todo-text";
  todoText.innerText = textInput.value;
  todoItemContainer.appendChild(todoText);

  //   Adding a doucle cick mark to the todo list

  //   I will check ont the below later

  //   todoText.addEventListener("dblclick", () => {
  //     todoText.classList.add("line-through ");
  //     editbtn.setAttribute("disabled", "disabled");
  //   });

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

  //   editing functionality
  editbtn.addEventListener("click", () => {
    textInput.value = todoText.innerText;
    const parent = btnContainer.parentElement;
    parent.parentElement.removeChild(parent);
  });

  //   delete

  const deletebtn = document.createElement("button");
  deletebtn.id = "trash";

  const deleteimg = document.createElement("img");
  deleteimg.src = "icons/trash.png";
  deletebtn.appendChild(deleteimg);
  btnContainer.appendChild(deletebtn);
  todoItemContainer.appendChild(btnContainer);

  //   deleting functionality
  deletebtn.addEventListener("click", () => {
    const parent = btnContainer.parentElement;
    parent.parentElement.removeChild(parent);
  });

  deletebtn.addEventListener("click", () => {
    clickCount--;
    updateClickCount();
  });

  editbtn.addEventListener("click", () => {
    clickCount--;
    updateClickCount();
  });

  textInput.value = "";
});

// Function to update count in UI
function updateClickCount() {
  document.getElementById("task-count").innerText = clickCount;
}

let clickCount = 0;
const countbtn = document.getElementById("Add-button");
countbtn.addEventListener("click", () => {
  clickCount++;
  updateClickCount();
});
