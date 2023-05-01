import {InformationHolder} from './informationholder.js';


function getTodayDate() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${year}-${month}-${day}`;
}


export function displayTodayTasks() {
  const todayDate = getTodayDate();
  const allTasks = document.querySelectorAll('.task-date');
  allTasks.forEach(task => {
    if (task.textContent !== todayDate) task.parentElement.remove();
  });
}