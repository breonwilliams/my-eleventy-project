import { displayGreeting } from './greetings.js';
import { addNumbers } from './mathUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
    console.log("Sum of 2 and 3 is:", addNumbers(2, 3));
});
