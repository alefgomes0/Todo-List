import {tasksHeader} from './header.js';
import {InformationHolder} from './informationholder.js';


export function changeCurrentTabName() {
  const currentTabName = document.querySelector('.current-tab');
  currentTabName.textContent = 'Today';
  return currentTabName;
}


function getTodayDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
}