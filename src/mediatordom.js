import { createTask } from "./createtask.js";
import { InformationHolder } from "./informationholder.js";
import { displayTasks, displayAllTaskInfo } from "./displaytasks.js";


export class MediatorDOM {
  static insertTaskDOM() {
    document.querySelector('.submit').addEventListener('click', () => {
      if (document.querySelector('form').checkValidity()) {
        InformationHolder.addTask(createTask());
        displayTasks();
      }
    });
  };

  static showTaskInfo() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('task-n')) {
        displayAllTaskInfo(Number(e.target.parentElement.id));
      }
    });
  };

  static closeTaskInfo() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('close-info')) e.target.parentElement.remove();
    });
  }

  static deleteTaskDOM() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) {
        InformationHolder.removeTask(e.target.parentElement);
        e.target.parentElement.remove();
      }
    });
  };

  static adjustDeleteIcon() {
    let messageDisplayed = false;

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 500 && !messageDisplayed) {
        console.log('...');
        messageDisplayed = true;
      } else if (window.innerWidth > 500) {
        messageDisplayed = false;
      }
    });
  };

  static initialize() {
    this.insertTaskDOM();
    this.showTaskInfo();
    this.closeTaskInfo();
    this.deleteTaskDOM();
    this.adjustDeleteIcon();
  }
};
