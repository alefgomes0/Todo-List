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
