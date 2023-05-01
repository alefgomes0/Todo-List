import tick from './assets/icons/check-icon.png';

export function adjustTickMark() {
  const tickMark = new Image();
  tickMark.src = tick;
  tickMark.style.width = '40px';
  tickMark.style.height = '40px';
  document.querySelector('.header').appendChild(tickMark);
}

export function tasksHeader() {
  const div = document.createElement('div');
  div.classList.add('tasks-header');
  const h3 = document.createElement('h3');
  h3.textContent = 'Name';
  const header3 = document.createElement('h3');
  header3.classList.add('due');
  header3.textContent = 'Due Date';

  div.appendChild(h3);
  div.appendChild(header3);
  return div;
}

export function changeTabName(name) {
  const currentTab = document.querySelector('.current-tab');
  currentTab.textContent = name;
}