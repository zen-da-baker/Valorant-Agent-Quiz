// Imports needed for the app functionality
import test from './modules/test.js';
import { agents } from './modules/agentList.js';

// Test for if the DOM can be manipulated by data from a module
test.innerHTML = "hello";

// Console test for if all agent objects are readable
for (let i = 0; i < agents.length; i++) { 
    console.log(agents[i]);
}

console.log(agents.length);
