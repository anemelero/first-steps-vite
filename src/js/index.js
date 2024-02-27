import { buttonCounterElement } from './dom';
import { addCounter } from './counter-functions';

buttonCounterElement.addEventListener('click', addCounter);
