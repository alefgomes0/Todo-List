export const ManageProjectForm = () => ({
  addProjectButton: document.querySelector('.new-project'),
  projectTab: document.querySelector('.projects'),

  createForm() {
    const form = document.createElement('form');
    form.classList.add('.project-form');
    form.style.display = 'grid';
    form.action = '#';
    form.method = 'post';
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name';
    const projectNameInput = document.createElement('input');
    projectNameInput.required = true;
  

    form.appendChild(projectNameLabel);
    form.appendChild(projectNameInput);

    const submitProjectButton = document.createElement('button');
    submitProjectButton.classList.add('submit-project')
    submitProjectButton.textContent = 'Create Project';
    const notSubmitProjectButton = document.createElement('button');
    notSubmitProjectButton.classList.add('cancel-project');
    notSubmitProjectButton.textContent = 'Cancel';
    form.appendChild(submitProjectButton);
    form.appendChild(notSubmitProjectButton);

    this.projectTab.appendChild(form);
  },

  showProjectForm() {
    this.projectTab.addEventListener('click', (e) => {
      if (e.target.classList.contains('new-project')) {
        this.createForm();
      }
    })
  },

  submitProjectForm() {
    this.projectTab.addEventListener('click', (e) => {
      if (e.target.classList.contains('submit-project')) {
        e.target.parentElement.remove();
      }
    })
  },

  closeProjectForm() {
    this.projectTab.addEventListener('click', (e) => {
      if (e.target.classList.contains('cancel-project')) {
        e.target.parentElement.remove();
      }
    })
  },


  initialize() {
    this.showProjectForm();
    this.submitProjectForm();
    this.closeProjectForm();
  },
});