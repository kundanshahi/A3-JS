const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to create a new to-do item
function createToDoItem(taskText) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const taskLabel = document.createElement("label");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    taskLabel.textContent = taskText;
    deleteButton.textContent = "Delete";

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(deleteButton);

    // Event listener to handle checkbox change
    checkbox.addEventListener("change", function() {
        listItem.classList.toggle("checked");
        if (checkbox.checked) {
            playDingSound();
            setTimeout(() => {
                taskList.appendChild(listItem);
            }, 1000);
        }
    });

    // Event listener to handle delete button click
    deleteButton.addEventListener("click", function() {
        listItem.classList.add("deleted");
        setTimeout(() => {
            listItem.remove();
        }, 1000);
    });

    return listItem;
}

// Event listener to handle adding new to-do item
addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTask = createToDoItem(taskText);
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
});

// Function to play a 'ding' sound
function playDingSound() {
    const audio = new Audio("call.mp3");
    audio.play();
}
