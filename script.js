document.querySelector("#add-button").onclick = () => {
    const taskInput = document.getElementById("input-field").value;

    if (taskInput.trim() === "") {
        alert("Please enter a valid Item.");
        return;
    }

    // Get the existing tasks from localStorage or create an empty array
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the array
    tasks.push(taskInput);

    // Save the updated array back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear the input field
    document.getElementById("input-field").value = "";

    // Update the task list
    displayTasks();
}

// Function to display tasks from localStorage as list items
function displayTasks() {
    const taskList = document.getElementById("shopping-list");
    taskList.innerHTML = ""; // Clear the existing list

    // Get the tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Create list items for each task
    tasks.forEach(function (task, index) {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        // Add a click event to delete the task when clicked
        listItem.addEventListener("dblclick", function () {
            // Remove the task from the array
            tasks.splice(index, 1);

            // Save the updated array back to localStorage
            localStorage.setItem("tasks", JSON.stringify(tasks));

            // Update the task list
            displayTasks();
        });

        taskList.appendChild(listItem);
    });
}

document.querySelector("#clear-input-field").onclick = () => {
    document.getElementById("input-field").value = ""

};

// Display existing tasks on page load
displayTasks();