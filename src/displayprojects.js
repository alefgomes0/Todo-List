import { InformationHolder } from "./informationholder.js";
import deleteIconPath from "./assets/icons/delete-icon.svg";
import closeInfoPath from "./assets/icons/close-info.svg";

export function displayTasksProject(
  iterateFrom = InformationHolder.projects[projectIndex].length - 1,
  projectIndex
) {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = "none";
  });

  const numberOfProjects = InformationHolder.projects[projectIndex].length;
  for (let i = iterateFrom; i < numberOfProjects; i++) {
    const div = document.createElement("div");
    div.classList.add("task-project");
    div.setAttribute("data-task-project", `${projectIndex}`);

    const taskDone = document.createElement("input");
    taskDone.type = "checkbox";
    taskDone.classList.add("task-done");
    div.appendChild(taskDone);

    const taskName = document.createElement("p");
    taskName.classList.add("task-n");
    taskName.textContent = InformationHolder.projects[projectIndex][i].name;
    div.appendChild(taskName);

    const taskDate = document.createElement("p");
    taskDate.classList.add("task-date");
    taskDate.textContent = InformationHolder.projects[projectIndex][i].dueDate;
    div.appendChild(taskDate);

    const deleteIcon = new Image();
    deleteIcon.classList.add("delete-task-project");
    deleteIcon.src = deleteIconPath;
    div.appendChild(deleteIcon);

    document.querySelector(".home-tasks").appendChild(div);
  }
}

export function displayTaskInfo(projectIndex, arrayIndex) {
  const infoDisplay = document.createElement("div");
  infoDisplay.classList.add("info-display");

  const taskName = document.createElement("p");
  taskName.textContent =
    InformationHolder.projects[projectIndex][arrayIndex].name;
  const taskDescription = document.createElement("p");
  taskDescription.textContent =
    InformationHolder.projects[projectIndex][arrayIndex].description;
  const taskDate = document.createElement("p");
  taskDate.textContent = `Due: ${InformationHolder.projects[projectIndex][arrayIndex].dueDate}`;
  const taskPriority = document.createElement("p");
  taskPriority.textContent = `Priority: ${InformationHolder.projects[
    projectIndex
  ][arrayIndex].priority.toUpperCase()}`;

  const closeInfo = new Image();
  closeInfo.src = closeInfoPath;
  closeInfo.classList.add("close-info");

  const priorityColor = selectPriorityBorder(
    InformationHolder.projects[projectIndex][arrayIndex].priority
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

export function findCurrentProjectIndex() {
  const tabText = document.querySelector(".current-tab").textContent;
  const currentProject = Array.from(
    document.querySelectorAll(".projects > *")
  ).find((el) => el.textContent === `${tabText}`);
  return Number(currentProject.getAttribute("data-project-id"));
}

export function deleteTasksProject() {
  const taskProject = Array.from(document.querySelectorAll(".task-project"));
  taskProject.forEach((task) => {
    task.remove();
  });
}

export function findTaskIndex(element, projectIndex) {
  const taskName =
    element.parentElement.querySelector("div > .task-n").textContent;
  const taskDate =
    element.parentElement.querySelector("div > .task-date").textContent;
  return Array.from(InformationHolder.projects[projectIndex]).findIndex(
    (task) => task.name === taskName && task.dueDate === taskDate
  );
}
