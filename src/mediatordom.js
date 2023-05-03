import { changeTabName } from "./header.js";
import { createTask } from "./createtask.js";
import { InformationHolder } from "./informationholder.js";
import { displayTasks, displayAllTasks, displayAllTaskInfo} from "./displaytasks.js";
import { displayTodayTasks } from "./todaytasks.js";
import { displayWeekTasks } from "./weektasks.js";
import deleteProjectIcon from './assets/icons/delete-project.svg';
import {displayTasksProject, deleteTasksProject ,findCurrentProjectIndex} from './displayprojects.js';


export class MediatorDOM {
  static insertTask() {
    document.querySelector('.submit').addEventListener('click', () => {
      const form = document.querySelector('form');
      const tabText = document.querySelector('.current-tab').textContent;
      
      if (form.checkValidity()) {
        if (tabText !== 'Home' || tabText !== 'Today' || tabText !== 'Week') {
          const projectIndex = findCurrentProjectIndex();
          console.log(projectIndex);
          InformationHolder.addTaskToProject(projectIndex, createTask());
          const vsf = InformationHolder.projects[projectIndex].length -1
          displayTasksProject(vsf, projectIndex)
        }  
        else {
          InformationHolder.addTask(createTask());
          displayTasks();
        }
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

  static crossTask() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('task-done')) {
        const tasksNameAndDate = Array.from(e.target.parentNode.querySelectorAll('p'));
        tasksNameAndDate.forEach((task) => {
          if (e.target.checked === true) task.style.textDecoration = 'line-through';
          else task.style.textDecoration = 'none';
        })
      }
    });
  }

  static deleteTask() {
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
      deleteTasksProject();
      displayAllTasks();
    });
  }
 
  static showTodayTasks() {
    document.querySelector('.today').addEventListener('click', () => {
      changeTabName('Today');
      deleteTasksProject();
      displayTodayTasks();
    });
  }

  static showWeekTasks() {
    document.querySelector('.week').addEventListener('click', () => {
      changeTabName('Week');
      deleteTasksProject();
      displayAllTasks();
      displayWeekTasks();
    });
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


  static insertProject() {
    document.querySelector('.projects').addEventListener('click', (e) => {
      if (e.target.classList.contains('submit-project')) {
        const name = `-${e.target.parentNode.querySelector('form > input').value}`;
        InformationHolder.addProjectName(name);
        InformationHolder.addProject([]);
        this.createProjectDiv();
      }
    });
  }

  static createProjectDiv() {
    const numberOfProjects = InformationHolder.projects.length;
    for (let i = numberOfProjects - 1; i < numberOfProjects; i++) {   
      if (numberOfProjects - 1 >= 0) {
        const deleteProject = new Image();
        deleteProject.src = deleteProjectIcon;
        deleteProject.classList.add('delete-project');
        deleteProject.setAttribute('data-project-id', i);
        document.querySelector('.main-content').appendChild(deleteProject); 
        
        const div = document.createElement('div');
        div.textContent = InformationHolder.projectName[i];
        div.classList.add('project');
        div.setAttribute('data-project-id', numberOfProjects - 1);
        document.querySelector('.projects').appendChild(div); 
      }
    }
  }

  static changeProjectTab() {
    document.querySelector('.projects').addEventListener('click', (e) => {
      if (e.target.classList.contains('project')) {
        changeTabName(e.target.textContent);
        const deleteIcon = document.querySelectorAll('.delete-project');
        if (deleteIcon !== null) deleteIcon.forEach(icon => {
          icon.style.display = 'inline';
        });
        deleteTasksProject();
        const projectIndex = findCurrentProjectIndex();
        displayTasksProject(0, projectIndex);
      }
    });
  }

  static deleteDeleteIcon() {
    document.querySelector('.sidebar').addEventListener('click', () => {
      const currentTab = document.querySelector('.current-tab').textContent;
      if (currentTab === 'Home' || currentTab === 'Today' || currentTab === 'Week') {
        const deleteIcon = document.querySelectorAll('.delete-project');
        if (deleteIcon !== null) deleteIcon.forEach(icon => {
          icon.style.display = 'none';
        });
      }  
    });
  }

  static deleteProject() {
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-project')) {
        const projectIndex = findCurrentProjectIndex();
        InformationHolder.removeProject(projectIndex);
        InformationHolder.removeProjectName(projectIndex);
        document.querySelector(`div[data-project-id="${projectIndex}"]`).remove();
        document.querySelector(`img[data-project-id="${projectIndex}"]`).remove();
        document.querySelector('.home').click();
      }
    })
  }


  static initialize() {
    this.insertTask();
    this.showTaskInfo();
    this.closeTaskInfo();
    this.crossTask();
    this.showHomeTasks();
    this.showTodayTasks();
    this.showWeekTasks();
    this.deleteTask();
    this.updateTaskList();
    this.insertProject();
    this.createProjectDiv();
    this.changeProjectTab();
    this.deleteDeleteIcon();
    this.deleteProject();
  }
};
