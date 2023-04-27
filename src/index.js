import './styles.scss';
import {adjustTickMark} from './header.js';
import {ManageForm} from './taskform.js';
import {InformationHolder} from './informationholder.js';
import {createTask} from './createtask.js';
import {Mediator} from './mediator.js';
import {displayHomeTasks} from './displayhometasks.js';


adjustTickMark();
Mediator.insertTaskDOM();
const form = ManageForm();
form.initialize();

