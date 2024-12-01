// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const clearTasksBtn = document.getElementById("clear-tasks-btn");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("task-btn", "complete");
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("task-btn", "delete");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = ""; // Clear input
});

// Clear All Tasks
clearTasksBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
