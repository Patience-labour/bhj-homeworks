const input = document.querySelector('input');
const btn = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');


function createTaskElement(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;

    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.classList.add('task__remove');
    taskRemove.textContent = '×';

    taskRemove.addEventListener('click', function (e) {
        e.preventDefault();
        taskDiv.remove();
    });

    taskDiv.append(taskTitle);
    taskDiv.append(taskRemove);

    return taskDiv;
}

btn.addEventListener('click', e => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText) {
        const newTask = createTaskElement(taskText);
        taskList.append(newTask);
    }
});

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText) {
            const newTask = createTaskElement(taskText);
            taskList.append(newTask);
        }
    }
});