export const createTask = () => ({
  name: document.querySelector('#task-name').value,
  description: document.querySelector('#task-description').value,
  dueDate: document.querySelector('#due-date').value,
  priority: document.querySelector('#priority').value
});