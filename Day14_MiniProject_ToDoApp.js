// 1️⃣ Select DOM elements
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// 2️⃣ Get tasks from localStorage or empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 3️⃣ Function to render tasks on the page
function renderTasks() {
  taskList.innerHTML = ""; // Clear current list

  tasks.forEach((task, index) => {
    const li = document.createElement("li");  // Create list item
    li.innerText = task;

    // Create delete button for each task
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(delBtn);       // Add delete button to list item
    taskList.appendChild(li);     // Add list item to task list
  });
}

// 4️⃣ Add new task
addBtn.addEventListener("click", () => {
  const task = input.value.trim();   // Get input value
  if (task) {                        // Only add if not empty
    tasks.push(task);                // Add to array
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save in localStorage
    input.value = "";                 // Clear input
    renderTasks();                    // Show updated list
  } else {
    alert("Enter a task!");
  }
});

// 5️⃣ Delete task
function deleteTask(index) {
  tasks.splice(index, 1);              // Remove from array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
  renderTasks();                        // Show updated list
}

// 6️⃣ Initial render when page loads
renderTasks();
