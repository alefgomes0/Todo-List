import { InformationHolder } from "./informationholder.js";
import deleteIconPath from "./assets/icons/delete-icon.svg";
import closeInfoPath from "./assets/icons/close-info.svg";

export function displayTasks(iterateFrom = InformationHolder.tasks.length - 1) {
  const homeTasks = document.querySelector(".home-tasks");
  for (let i = iterateFrom; i < InformationHolder.tasks.length; i++) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("id", i);

    const taskDone = document.createElement("input");
    taskDone.type = "checkbox";
    taskDone.classList.add("task-done");
    div.appendChild(taskDone);

    const taskName = document.createElement("p");
    taskName.classList.add("task-n");
    taskName.textContent = InformationHolder.tasks[i].name;
    div.appendChild(taskName);

    const taskDate = document.createElement("p");
    taskDate.classList.add("task-date");
    taskDate.textContent = InformationHolder.tasks[i].dueDate;
    div.appendChild(taskDate);

    const deleteIcon = new Image();
    deleteIcon.classList.add("delete-task");
    deleteIcon.src = deleteIconPath;
    div.appendChild(deleteIcon);

    homeTasks.appendChild(div);
  }
}

export function displayAllTaskInfo(arrayIndex) {
  const infoDisplay = document.createElement("div");
  infoDisplay.classList.add("info-display");

  const taskName = document.createElement("p");
  taskName.textContent = InformationHolder.tasks[arrayIndex].name;
  const taskDescription = document.createElement("p");
  taskDescription.textContent = InformationHolder.tasks[arrayIndex].description;
  const taskDate = document.createElement("p");
  taskDate.textContent = `Due: ${InformationHolder.tasks[arrayIndex].dueDate}`;
  const taskPriority = document.createElement("p");
  taskPriority.textContent = `Priority: ${InformationHolder.tasks[
    arrayIndex
  ].priority.toUpperCase()}`;

  const closeInfo = new Image();
  closeInfo.src = closeInfoPath;
  closeInfo.classList.add("close-info");

  const priorityColor = selectPriorityBorder(
    InformationHolder.tasks[arrayIndex].priority
  );
  infoDisplay.style.border = `2px solid ${priorityColor}`;
  taskPriority.style.color = priorityColor;

  infoDisplay.appendChild(closeInfo);
  infoDisplay.appendChild(taskName);
  infoDisplay.appendChild(taskDescription);
  infoDisplay.appendChild(taskDate);
  infoDisplay.appendChild(taskPriority);

  document.querySelector(".main-content").appendChild(infoDisplay);
}

function selectPriorityBorder(priority) {
  if (priority === "low") return "#2d7bd2";
  if (priority === "medium") return "#ffc600";
  return "#ff0018";
}

export function displayAllTasks() {
  const allTasks = document.querySelectorAll(".task-date");
  allTasks.forEach((task) => {
    task.parentElement.style.display = "flex";
    if (window.innerWidth <= "500") task.parentElement.style.display = "grid";
  });
}

export function removeAllTasks() {
  const allTasks = document.querySelectorAll(
    ".home-tasks > :not(.tasks-header)"
  );
  allTasks.forEach((task) => task.remove());
}
