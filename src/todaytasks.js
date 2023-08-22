/* eslint-disable no-negated-condition */
export function getTodayDate() {
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
  const allTasks = document.querySelectorAll(".task-date");
  allTasks.forEach((task) => {
    if (task.textContent !== todayDate)
      task.parentElement.style.display = "none";
  });
}

export function displayTodayTasksQuantity() {
  const todayDate = getTodayDate();
  const allTasks = document.querySelectorAll(".task-date");
  let todayTasks = 0;
  allTasks.forEach((task) => {
    if (task.textContent !== todayDate) {
      task.parentElement.style.display = "none";
    } else {
      todayTasks++;
    }
  });

  const h5 = document.createElement("h5");
  h5.textContent = todayTasks;
  document.getElementsByClassName("today")[0].appendChild(h5);
}
