import {tasksHeader} from './header.js';
import {InformationHolder} from './informationholder.js';


export function changeCurrentTabName() {
  const currentTabName = document.querySelector('.current-tab');
  currentTabName.textContent = 'Today';
  return currentTabName;
}

export function todayTasks() {
  const numberOfTasks = InformationHolder.tasks.length;
  for (let i = 0; i < numberOfTasks; i++) {
    // ...
  }
}