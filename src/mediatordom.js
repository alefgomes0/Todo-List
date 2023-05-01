import { changeTabName } from "./header.js";
import { createTask } from "./createtask.js";
import { InformationHolder } from "./informationholder.js";
import { displayTasks, displayAllTaskInfo, removeAllTasks } from "./displaytasks.js";
import { displayTodayTasks } from "./todaytasks.js";


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
      removeAllTasks();
      displayTasks(0);
    })
  }
 
  static showTodayTasks() {
    document.querySelector('.today').addEventListener('click', () => {
      changeTabName('Today');
      displayTodayTasks();
    });
  }


  // Colocar o observer no .home-tasks. Checar se está no tab "Today" ou "Week".
  // Aparentemente tem um atributo chamado "addedNodes", checar especificamente por isso
  // Se for o caso, simular um click na aba 

  static updateTaskList() {
    const targetNode = document.querySelector('.home-tasks');
    const currentTab = document.querySelector('.current-tab');
    const today = document.querySelector('.today');

    const config = {childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0 && currentTab.textContent === 'Today') {
          console.log('A child node has been added.');
          today.click();
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }


  static initialize() {
    this.insertTaskDOM();
    this.showTaskInfo();
    this.closeTaskInfo();
    this.showHomeTasks();
    this.showTodayTasks();
    this.deleteTaskDOM();
    this.updateTaskList();
  }
};
