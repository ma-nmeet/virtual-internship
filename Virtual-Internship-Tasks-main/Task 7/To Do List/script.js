document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("task-input").focus();
});

function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = '<span>' + taskInput.value + '</span>' +
                    '<button class="edit-button" onclick="editTask(this)">Edit</button>' +
                    '<button class="delete-button" onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

function editTask(button) {
    var li = button.parentNode;
    var span = li.querySelector("span");
    var newText = prompt("Edit task:", span.textContent);

    if (newText !== null) {
        span.textContent = newText;
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
