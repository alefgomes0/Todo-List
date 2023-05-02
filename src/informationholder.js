export class InformationHolder {
  static tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  static projects = JSON.parse(localStorage.getItem('project')) || [];
  static projectName = JSON.parse(localStorage.getItem('projectName')) || [];

  
  static addTask(someTask) {
    this.tasks.push(someTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static removeTask(aTask) {
    const taskIndex = Number(aTask.id);
    this.tasks.splice(taskIndex, 1);
    this.#adjustId(taskIndex);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static #adjustId(deletedId) {
    const divs = document.querySelectorAll('.task');
    if (divs.length > 0) {
      divs.forEach(div => {
        if (div.id > deletedId) {
          const currentId = parseInt(div.id.match(/\d+/)[0]);
          div.id = div.id.replace(currentId, currentId - 1);
        }
      });
    }
  }

  static #adjustProjectId(deletedId) {
    const divs = document.querySelectorAll('.project');
    if (divs.length > 0) {
      divs.forEach(div => {
        if (Number(div.getAttribute('data-project-id')) > deletedId) {
          const currentId = parseInt(div.getAttribute('data-project-id').match(/\d+/)[0]);
          div.setAttribute('data-project-id', currentId - 1);
        }
      });
    }
  }

  static addProject(someProject) {
    this.projects.push(someProject);
    localStorage.setItem('project', JSON.stringify(this.projects));
  }

  static removeProject(aProjectIndex) {
    this.projects.splice(aProjectIndex, 1);
    this.#adjustProjectId(aProjectIndex);
    localStorage.setItem('project', JSON.stringify(this.projects));
  } 

  static addProjectName(someProjectName) {
    this.projectName.push(someProjectName);
    localStorage.setItem('projectName', JSON.stringify(this.projectName));
  }

  static removeProjectName(projectIndex) {
    this.projectName.splice(projectIndex, 1);
    localStorage.setItem('projectName', JSON.stringify(this.projectName));
  }
}
