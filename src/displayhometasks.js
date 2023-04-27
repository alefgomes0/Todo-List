import {InformationHolder} from './informationholder.js';
import deleteIconPath from './assets/icons/delete-icon.svg';

export function displayHomeTasks() {
  const homeTasks = document.querySelector('.home-tasks');
  const tasksLength = InformationHolder.tasks.length;
  for (let i = tasksLength - 1; i < tasksLength; i++) {
    const div = document.createElement('div');
    div.classList.add('task');

    const taskName = document.createElement('p');
    taskName.classList.add('task-n');
    taskName.textContent = InformationHolder.tasks[i].name;
    div.appendChild(taskName);

    const taskDate = document.createElement('p');
    taskDate.classList.add('task-d');
    taskDate.textContent = InformationHolder.tasks[i].dueDate;
    div.appendChild(taskDate);

    const deleteIcon = new Image();
    deleteIcon.classList.add('delete-task');
    deleteIcon.src = deleteIconPath;
    div.appendChild(deleteIcon);

    homeTasks.appendChild(div);
  }
}