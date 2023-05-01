import './styles.scss';
import {adjustTickMark} from './header.js';
import {ManageForm} from './taskform.js';
import {InformationHolder} from './informationholder.js';
import {createTask} from './createtask.js';
import {MediatorDOM} from './mediatordom.js';
import {displayTasks} from './displaytasks.js';
import {displayTodayTasks} from './todaytasks.js';
import {getWeek} from './weektasks.js';


adjustTickMark();
MediatorDOM.initialize();
const form = ManageForm();
form.initialize();
if (JSON.parse(localStorage.getItem('tasks')).length > 0) {
  displayTasks(0);
}

getWeek();