export class InformationHolder {
  static tasks = [];

  static projects = [];


  static addTask(someTask) {
    this.tasks.push(someTask);
  }

  static removeTask(aTask) {
    const taskIndex = Number(aTask.id);
    this.tasks.splice(taskIndex, 1);
    this.#adjustTasksId(taskIndex);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static #adjustTasksId(deletedTaskId) {
    const divs = document.querySelectorAll(".task");
    if (divs.length > 0) {
      divs.forEach(div => {
        if (div.id > deletedTaskId) {
          const currentId = parseInt(div.id.match(/\d+/)[0]);
          div.id = div.id.replace(currentId, currentId - 1);
        }
      });
    }
  }

  static addProject(someProject) {
    return this.projects.push(someProject);
  }

  static removeProject(aProject) {
    return this.projects.splice(aProject, 1);
  }
}
