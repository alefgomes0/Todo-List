export class InformationHolder {
  static tasks = [];

  static projects = [];

  static addTask(someTask) {
    return this.tasks.push(someTask);
  }

  static removeTask(aTask) {
    return this.tasks.splice(aTask, 1);
  }

  static addProject(someProject) {
    return this.projects.push(someProject);
  }

  static removeProject(aProject) {
    return this.projects.splice(aProject, 1);
  }
}
