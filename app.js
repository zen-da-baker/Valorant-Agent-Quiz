// Imports needed for the app functionality
import { test } from './modules/test.js';
import { agents } from './modules/agentList.js';
import { Question, questions } from './modules/quiz.js';
// import { pairs } from './modules/pairs.js';
// import { serious, fun, charming, strict, techie, classic, independent, team } from './modules/pairs.js';

// Question display variable
const questionDisplay = document.getElementById('question-display');

const beginBtn = document.getElementById('begin');

const questionText = document.getElementById('question-text');

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const choice5 = document.getElementById('choice5');
const choice6 = document.getElementById('choice6');
const choice7 = document.getElementById('choice7');
const choice8 = document.getElementById('choice8');

const card = document.getElementById('card');


// agent display variable
/*
let agentDisplay = document.getElementById('agent-display');
*/

// Test for if the DOM can be manipulated by data from a module
/*
test.innerHTML = "hello";
*/

// Question text viewable on page
/*
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
*/

// Console test for if all agent objects are readable
for (let i = 0; i < agents.length; i++) { 
    console.log(agents[i]);
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
// console.log(pairs[0][1]);


let playerChoices = [];

if (playerChoices[0] == 'fun' && playerChoices[1] == 'charming' && playerChoices[2] == 'team') {
    console.log('pheonix');
}

/*
const question1 = `
            ${questions[0].msg} <br/>
            <button id="choice1" onclick="questions[0].choice1()" class="btn">${questions[0].text1}</button>   <br/>
            <button id="choice2" onclick="questions[0].choice2()" class="btn">${questions[0].text2}</button>   <br/>
            <button id="choice3" onclick="questions[0].choice3()" class="btn">${questions[0].text3}</button>   <br/>
            <button id="choice4" onclick="questions[0].choice4()" class="btn">${questions[0].text4}</button>   <br/>
            <button id="choice5" onclick="questions[0].choice5()" class="btn">${questions[0].text5}</button>   <br/>
            <button id="choice6" onclick="questions[0].choice6()" class="btn">${questions[0].text6}</button>   <br/>
            <button id="choice7" onclick="questions[0].choice7()" class="btn">${questions[0].text7}</button>   <br/>
            <button id="choice8" onclick="questions[0].choice8()" class="btn">${questions[0].text8}</button>   <br/>
        `

const question2 = `
            ${questions[1].msg} <br/>
            <button onclick="questions[1].choice1()" class="btn">${questions[1].text1}</button>   <br/>
            <button onclick="questions[1].choice2()" class="btn">${questions[1].text2}</button>   <br/>
            <button onclick="questions[1].choice3()" class="btn">${questions[1].text3}</button>   <br/>
            <button onclick="questions[1].choice4()" class="btn">${questions[1].text4}</button>   <br/>
            <button onclick="questions[1].choice5()" class="btn">${questions[1].text5}</button>   <br/>
            <button onclick="questions[1].choice6()" class="btn">${questions[1].text6}</button>   <br/>
            <button onclick="questions[1].choice7()" class="btn">${questions[1].text7}</button>   <br/>
            <button onclick="questions[1].choice8()" class="btn">${questions[1].text8}</button>   <br/>
        `

const question3 = `
            ${questions[2].msg} <br/>
            <button onclick="questions[2].choice1()" class="btn">${questions[2].text1}</button>   <br/>
            <button onclick="questions[2].choice2()" class="btn">${questions[2].text2}</button>   <br/>
            <button onclick="questions[2].choice3()" class="btn">${questions[2].text3}</button>   <br/>
            <button onclick="questions[2].choice4()" class="btn">${questions[2].text4}</button>   <br/>
            <button onclick="questions[2].choice5()" class="btn">${questions[2].text5}</button>   <br/>
            <button onclick="questions[2].choice6()" class="btn">${questions[2].text6}</button>   <br/>
            <button onclick="questions[2].choice7()" class="btn">${questions[2].text7}</button>   <br/>
            <button onclick="questions[2].choice8()" class="btn">${questions[2].text8}</button>   <br/>
    `
*/ 

let questionPosition = 1;

function questionSequence() {
    if (questionPosition == 1) {
        questionText.innerHTML = questions[0].msg;
        
        choice1.innerHTML = questions[0].text1;
        choice1.addEventListener("click", questions[0].choice1);
        choice1.addEventListener("click", main);

        choice2.innerHTML = questions[0].text2;
        choice2.addEventListener("click", questions[0].choice2);
        choice2.addEventListener("click", main);

        choice3.innerHTML = questions[0].text3;
        choice3.addEventListener("click", questions[0].choice3);
        choice3.addEventListener("click", main);

        choice4.innerHTML = questions[0].text4;
        choice4.addEventListener("click", questions[0].choice4);
        choice4.addEventListener("click", main);

        choice5.innerHTML = questions[0].text5;
        choice5.addEventListener("click", questions[0].choice5);
        choice5.addEventListener("click", main);

        choice6.innerHTML = questions[0].text6;
        choice6.addEventListener("click", questions[0].choice6);
        choice6.addEventListener("click", main);

        choice7.innerHTML = questions[0].text7;
        choice7.addEventListener("click", questions[0].choice7);
        choice7.addEventListener("click", main);

        choice8.innerHTML = questions[0].text8;
        choice8.addEventListener("click", questions[0].choice8);
        choice8.addEventListener("click", main);

    } else if (questionPosition == 2) {
        questionText.innerHTML = questions[1].msg;

        choice1.removeEventListener("click", questions[0].choice1);
        choice1.removeEventListener("click", main);

        choice2.removeEventListener("click", questions[0].choice2);
        choice2.removeEventListener("click", main);

        choice3.removeEventListener("click", questions[0].choice3);
        choice3.removeEventListener("click", main);

        choice4.removeEventListener("click", questions[0].choice4);
        choice4.removeEventListener("click", main);

        choice5.removeEventListener("click", questions[0].choice5);
        choice5.removeEventListener("click", main);

        choice6.removeEventListener("click", questions[0].choice6);
        choice6.removeEventListener("click", main);

        choice7.removeEventListener("click", questions[0].choice7);
        choice7.removeEventListener("click", main);

        choice8.removeEventListener("click", questions[0].choice8);
        choice8.removeEventListener("click", main);

        choice1.innerHTML = questions[1].text1;
        choice1.addEventListener("click", questions[1].choice1);
        choice1.addEventListener("click", main);

        choice2.innerHTML = questions[1].text2;
        choice2.addEventListener("click", questions[1].choice2);
        choice2.addEventListener("click", main);

        choice3.innerHTML = questions[1].text3;
        choice3.addEventListener("click", questions[1].choice3);
        choice3.addEventListener("click", main);

        choice4.innerHTML = questions[1].text4;
        choice4.addEventListener("click", questions[1].choice4);
        choice4.addEventListener("click", main);

        choice5.innerHTML = questions[1].text5;
        choice5.addEventListener("click", questions[1].choice5);
        choice5.addEventListener("click", main);

        choice6.innerHTML = questions[1].text6;
        choice6.addEventListener("click", questions[1].choice6);
        choice6.addEventListener("click", main);

        choice7.innerHTML = questions[1].text7;
        choice7.addEventListener("click", questions[1].choice7);
        choice7.addEventListener("click", main);

        choice8.innerHTML = questions[1].text8;
        choice8.addEventListener("click", questions[1].choice8);
        choice8.addEventListener("click", main);

    } else if (questionPosition == 3) {
        questionText.innerHTML = questions[2].msg;

        choice1.removeEventListener("click", questions[1].choice1);
        choice1.removeEventListener("click", main);

        choice2.removeEventListener("click", questions[1].choice2);
        choice2.removeEventListener("click", main);

        choice3.removeEventListener("click", questions[1].choice3);
        choice3.removeEventListener("click", main);

        choice4.removeEventListener("click", questions[1].choice4);
        choice4.removeEventListener("click", main);

        choice5.removeEventListener("click", questions[1].choice5);
        choice5.removeEventListener("click", main);

        choice6.removeEventListener("click", questions[1].choice6);
        choice6.removeEventListener("click", main);

        choice7.removeEventListener("click", questions[1].choice7);
        choice7.removeEventListener("click", main);

        choice8.removeEventListener("click", questions[1].choice8);
        choice8.removeEventListener("click", main);

        choice1.innerHTML = questions[2].text1;
        choice1.addEventListener("click", questions[2].choice1);

        choice2.innerHTML = questions[2].text2;
        choice2.addEventListener("click", questions[2].choice2);

        choice3.innerHTML = questions[2].text3;
        choice3.addEventListener("click", questions[2].choice3);

        choice4.innerHTML = questions[2].text4;
        choice4.addEventListener("click", questions[2].choice4);

        choice5.innerHTML = questions[2].text5;
        choice5.addEventListener("click", questions[2].choice5);

        choice6.innerHTML = questions[2].text6;
        choice6.addEventListener("click", questions[2].choice6);

        choice7.innerHTML = questions[2].text7;
        choice7.addEventListener("click", questions[2].choice7);

        choice8.innerHTML = questions[2].text8;
        choice8.addEventListener("click", questions[2].choice8);

    } else {
        console.log(playerChoices);
    }
}

card.style.display = 'none';

function main() {
    beginBtn.style.display = 'none';
    card.style.display = 'block';

    console.log(playerChoices.length);
    questionSequence();

    questionPosition++;
}

beginBtn.addEventListener("click", main);