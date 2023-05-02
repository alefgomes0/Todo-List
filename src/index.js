import './styles.scss';
import {adjustTickMark} from './header.js';
import {ManageForm} from './taskform.js';
import {ManageProjectForm} from './projectform.js';
import {MediatorDOM} from './mediatordom.js';
import {displayTasks} from './displaytasks.js';


adjustTickMark();

MediatorDOM.initialize();

const form = ManageForm();
form.initialize();

const projectForm = ManageProjectForm();
projectForm.initialize();

if (JSON.parse(localStorage.getItem('tasks')).length > 0) {
  displayTasks(0);
}

// document.querySelector('.project').remove();
