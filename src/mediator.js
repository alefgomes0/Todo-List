import { createTask } from "./createtask";
import { InformationHolder } from "./informationholder";
import { displayHomeTasks } from "./displayhometasks";


export class Mediator {
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
    // usar event delegation pra colcoar o event listener num elemento que
    // não seja criado dinamicamente. tem ex disso no Library acho
  }
}
