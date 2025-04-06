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
    deleteBtn.addEventListener('click', () => deleteTask(li));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Do animation for entering
    li.classList.add('enter');
    taskList.appendChild(li);

    // Trigger transition
    requestAnimationFrame(() => {
        li.classList.add('enter-active');
        li.classList.remove('enter');
    });

    taskInput.value = '';
    taskInput.focus();
}


// Function to delete a task
function deleteTask(li){
    // Old way of deleting tasks - without animations
    // const deleteBtn = document.querySelectorAll('.delete-btn');
    // deleteBtn.forEach(btn => {
    //     btn.addEventListener('click', () => btn.parentElement.remove());
    // });

    // Do animation - exiting
    li.classList.add('exit');
    requestAnimationFrame(() => {
      li.classList.add('exit-active');
      li.classList.remove('exit');
    });
  
    // Remove from DOM after animation completes
    setTimeout(() => li.remove(), 300);
}
