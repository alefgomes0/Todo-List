/* eslint-disable no-negated-condition */
import {
  differenceInCalendarISOWeeks,
  endOfISOWeek,
  parseISO,
} from "date-fns/";

export function getWeek() {
  const today = new Date();
  const endOfWeek = endOfISOWeek(today);

  const teste = "2023-05-21";
  const resultado = parseISO(teste);

  const result = differenceInCalendarISOWeeks(endOfWeek, resultado);

  console.log(result);
}

export function displayWeekTasks() {
  const todayDate = new Date();
  const endOfWeek = endOfISOWeek(todayDate);

  const allTasks = document.querySelectorAll(".task-date");
  allTasks.forEach((task) => {
    const taskDueDay = parseISO(task.textContent);
    if (differenceInCalendarISOWeeks(endOfWeek, taskDueDay) !== 0) {
      task.parentElement.style.display = "none";
    } 
  });
}

export function displayWeekTasksQuantity() {
  const todayDate = new Date();
  const endOfWeek = endOfISOWeek(todayDate);

  const allTasks = document.querySelectorAll(".task-date");
  let weekTasksCounter = 0;
  allTasks.forEach((task) => {
    const taskDueDay = parseISO(task.textContent);
    if (differenceInCalendarISOWeeks(endOfWeek, taskDueDay) !== 0) {
      task.parentElement.style.display = "none";
    } else {
      weekTasksCounter++;
    }
  });
  const h5 = document.createElement("h5");
  h5.textContent = weekTasksCounter;
  document.getElementsByClassName("week")[0].appendChild(h5);
}
