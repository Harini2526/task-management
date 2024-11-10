// Get the input and task list elements
const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const taskList = document.getElementById('taskList');

// Function to add a new task with priority
function addTask() {
    const taskText = taskInput.value.trim();
    const priority = priorityInput.value;
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = `${priority}-priority`; // Set the priority class
    listItem.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}
