import { counterElement } from './dom';

let counter = 0;

const addCounter = () => {
	counter++;
	counterElement.textContent = counter;
};
export { addCounter };
