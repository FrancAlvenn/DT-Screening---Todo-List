const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task on click
addTaskBtn.addEventListener('click', addTask);

// Add task on enter key
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

// Function to add new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => li.classList.toggle('completed'));

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '❌';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}


// Function to delete a task
function deleteTask(){
    const deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', () => btn.parentElement.remove());
    });
}
