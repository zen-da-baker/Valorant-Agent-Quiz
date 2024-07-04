// Imports needed for the app functionality
import { test } from './modules/test.js';
import { agents } from './modules/agentList.js';
import { questions } from './modules/quiz.js';
// import { pairs } from './modules/pairs.js';
// import { serious, fun, charming, strict, techie, classic, independent, team } from './modules/pairs.js';

let agentDisplay = document.getElementById('agent-display');

// Test for if the DOM can be manipulated by data from a module
test.innerHTML = "hello";

// Question text viewable on page
document.getElementById('objectTest').innerHTML = `
    ${questions[0].msg} <br/>
    <button onclick="questions[0].choice1" class="btn">${questions[0].text1}</button>   <br/>
    <button onclick="questions[0].choice2" class="btn">${questions[0].text2}</button>   <br/>
    <button onclick="questions[0].choice3" class="btn">${questions[0].text3}</button>   <br/>
    <button onclick="questions[0].choice4" class="btn">${questions[0].text4}</button>   <br/>
    <button onclick="questions[0].choice5" class="btn">${questions[0].text5}</button>   <br/>
    <button onclick="questions[0].choice6" class="btn">${questions[0].text6}</button>   <br/>
    <button onclick="questions[0].choice7" class="btn">${questions[0].text7}</button>   <br/>
    <button onclick="questions[0].choice8" class="btn">${questions[0].text8}</button>   <br/>

    ${questions[1].msg} <br/>
    <button onclick="questions[0].choice1" class="btn">${questions[1].text1}</button>   <br/>
    <button onclick="questions[0].choice2" class="btn">${questions[1].text2}</button>   <br/>
    <button onclick="questions[0].choice3" class="btn">${questions[1].text3}</button>   <br/>
    <button onclick="questions[0].choice4" class="btn">${questions[1].text4}</button>   <br/>
    <button onclick="questions[0].choice5" class="btn">${questions[1].text5}</button>   <br/>
    <button onclick="questions[0].choice6" class="btn">${questions[1].text6}</button>   <br/>
    <button onclick="questions[0].choice7" class="btn">${questions[1].text7}</button>   <br/>
    <button onclick="questions[0].choice8" class="btn">${questions[1].text8}</button>   <br/>

    ${questions[2].msg} <br/>
    <button onclick="questions[0].choice1" class="btn">${questions[2].text1}</button>   <br/>
    <button onclick="questions[0].choice2" class="btn">${questions[2].text2}</button>   <br/>
    <button onclick="questions[0].choice3" class="btn">${questions[2].text3}</button>   <br/>
    <button onclick="questions[0].choice4" class="btn">${questions[2].text4}</button>   <br/>
    <button onclick="questions[0].choice5" class="btn">${questions[2].text5}</button>   <br/>
    <button onclick="questions[0].choice6" class="btn">${questions[2].text6}</button>   <br/>
    <button onclick="questions[0].choice7" class="btn">${questions[2].text7}</button>   <br/>
    <button onclick="questions[0].choice8" class="btn">${questions[2].text8}</button>   <br/>
    `;

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


let playerChoices = [];

if (playerChoices[0] == 'fun' && playerChoices[1] == 'charming' && playerChoices[2] == 'team') {
    console.log('pheonix');
}


function main() {

}
