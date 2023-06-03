const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks-list');
const completedTasksList = document.getElementById('completed-tasks-list');

addTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.innerText = taskText;
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';

    completeButton.addEventListener('click', function () {
        completeTask(taskItem);
    });

    deleteButton.addEventListener('click', function () {
        deleteTask(taskItem);
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    pendingTasksList.appendChild(taskItem);
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    const completeButton = taskItem.querySelector('button');
    completeButton.innerText = 'Completed';
    completedTasksList.appendChild(taskItem);
}

function deleteTask(taskItem) {
    taskItem.remove();
}
