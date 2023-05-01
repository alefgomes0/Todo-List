import { changeTabName } from "./header.js";
import { createTask } from "./createtask.js";
import { InformationHolder } from "./informationholder.js";
import { displayTasks, displayAllTasks, displayAllTaskInfo} from "./displaytasks.js";
import { displayTodayTasks } from "./todaytasks.js";
import { displayWeekTasks } from "./weektasks.js";


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

  static showHomeTasks() {
    document.querySelector('.home').addEventListener('click', () => {
      changeTabName('Home');
      displayAllTasks();
    })
  }
 
  static showTodayTasks() {
    document.querySelector('.today').addEventListener('click', () => {
      changeTabName('Today');
      displayTodayTasks();
    });
  }

  static showWeekTasks() {
    document.querySelector('.week').addEventListener('click', () => {
      changeTabName('Week');
      displayAllTasks();
      displayWeekTasks();
    })
  }


  static updateTaskList() {
    const targetNode = document.querySelector('.home-tasks');
    const currentTab = document.querySelector('.current-tab');

    const config = {childList: true, subtree: true };
    const callback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          if (currentTab.textContent === 'Today' || currentTab.textContent === 'Week') {
            document.querySelector(`.${currentTab.textContent.toLowerCase()}`).click();
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }


  static initialize() {
    this.insertTaskDOM();
    this.showTaskInfo();
    this.closeTaskInfo();
    this.showHomeTasks();
    this.showTodayTasks();
    this.showWeekTasks();
    this.deleteTaskDOM();
    this.updateTaskList();
  }
};
