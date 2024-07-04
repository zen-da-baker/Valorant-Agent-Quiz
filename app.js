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

let serious = [];

let fun = [];

let charming = [];

let strict = [];

let techie = [];

let classic = [];

let independent = [];

let team = [];

for (let i = 0; i < agents.length; i++) {
    if (agents[i].likes == 'serious') {
        serious.push(agents[i].name);
    } else if (agents[i].likes == 'fun') {
        fun.push(agents[i].name);
    } else if (agents[i].likes == 'charming') {
        charming.push(agents[i].name);
    } else if (agents[i].likes == 'strict') {
        strict.push(agents[i].name);
    } else if (agents[i].likes == 'techie') {
        techie.push(agents[i].name);
    } else if (agents[i].likes == 'classic') {
        classic.push(agents[i].name);
    } else if (agents[i].likes == 'independent') {
        independent.push(agents[i].name);
    } else if (agents[i].likes == 'team') {
        team.push(agents[i].name);
    }
}

let pairs = [serious, fun, charming, strict, techie, classic, independent, team];



console.log(pairs[0][1]);

function main() {
    
}
