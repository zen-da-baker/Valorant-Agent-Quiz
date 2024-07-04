// Imports needed for the app functionality
import { test } from './modules/test.js';
import { agents } from './modules/agentList.js';
// import { pairs } from './modules/pairs.js';
// import { serious, fun, charming, strict, techie, classic, independent, team } from './modules/pairs.js';

let agentDisplay = document.getElementById('agent-display');

// Test for if the DOM can be manipulated by data from a module
test.innerHTML = "hello";

// Console test for if all agent objects are readable
for (let i = 0; i < agents.length; i++) { 
    console.log(agents[i]);
    agentDisplay.innerHTML = agents[i].name;
}

console.log(agents.length);


console.log(serious[0]);

