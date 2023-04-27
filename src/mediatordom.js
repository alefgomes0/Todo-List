import { createTask } from "./createtask";
import { InformationHolder } from "./informationholder";
import { displayHomeTasks } from "./displayhometasks";


export class MediatorDOM {
  static insertTaskDOM() {
    document.querySelector('.submit').addEventListener('click', () => {
      if (document.querySelector('form').checkValidity()) {
        InformationHolder.addTask(createTask());
        console.log(InformationHolder.tasks);
        console.log(InformationHolder.tasks[0].name);
        console.log(InformationHolder.tasks[0].dueDate);
        displayHomeTasks();
      }
    })
  }

  static deleteTaskDOM() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) e.target.parentElement.remove();
    })
  }
}
