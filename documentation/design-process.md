## Motivation
I generally love personality quiz games and wanted to make one of my own based on a video game I have spent a lot of time playing, Valorant.
## Build Process
### Page
I began with boiler plate HTML and added the begin button. 
```HTML
<button id="begin" class="btn">Begin</button>
```
The button would have an event listener attached to it in my main JavaScript file to begin the quiz.
```JS
const beginBtn = document.getElementById('begin');

beginBtn.addEventListener("click", main);
```
### Agent Class
I then created a class in JavaScript so that each agent in the personality quiz would have an object I could work with. 
```JS
class Agent {
	constructor(name, description, likes, dislikes, pair) {
	this.name = name;
	this.pfp = `./images/${this.name}.jpg`;
	this.description = description;
	this.likes = likes;
	this.dislikes = dislikes;
	this.pair = pair;
}

}
```
This also made it convenient for me to have the profile pictures linked to an agent through their object based on the picture file name being the same as the agent name.
The class and later script was coded in modules and imported into a main JavaScript file named `app.js`.
### Agent Objects
The agent class was imported into a module file where instances of the class were created for each object just like the following:
```JS
const brimstone = new Agent('Brimstone',
	'A trustworthy agent who uses his years of experience to guide his decisions.',
	['Saturday BBQs', 'Classic cars', 'Plain coffee'],
	['His bad back', 'Ipad kids', 'Whinners'],
	'classic'
);
```
All of the agent objects were arranged in an array that was exported.
### Question Class
The quiz questions were also created using a class.
```JS
class Question {
	constructor(msg, text1, trait1, text2, trait2, text3, trait3, text4, trait4, text5, trait5, text6, trait6, text7, trait7, text8, trait8) {
	this.msg = msg;
	
	this.text1 = text1;
	this.trait1 = trait1;
	
	this.text2 = text2;
	this.trait2 = trait2;
	
	this.text3 = text3;
	this.trait3 = trait3;
	
	this.text4 = text4;
	this.trait4 = trait4;
	
	this.text5 = text5;
	this.trait5 = trait5;
	
	this.text6 = text6;
	this.trait6 = trait6;
	
	this.text7 = text7;
	this.trait7 = trait7;
	
	this.text8 = text8;
	this.trait8 = trait8;
}
```
The text of a question choice would have a responding trait that is tracked in an array. 
```JS
let playerChoices = [];

function pushFun() {
	playerChoices.push('fun');
}
```
The trait would be pushed to the `playerChoices` array.
### Question Sequence Function
The question sequence of question class instances was created with a function.
```JS
function questionSequence() {
	if (questionPosition == 1) {
		questionText.innerHTML = questions[0].msg;
		choice1.innerHTML = questions[0].text1;
		choice1.addEventListener("click", pushFun);
		choice1.addEventListener("click", main);
	}
}
```
The `questionPosition` of the quiz begins at 1 and increases with each answer using the `main` function that has not been explored yet. Each response has a function that pushes a trait to the `playerChoices` array. The text of a question in the HTML is also manipulated using the DOM.
```HTML
<header class="header">
	<h2 id="question-text"></h2>
</header>

<button id="choice1" class="btn">${questions[0].text1}</button> <br/>
```
### Determining Results
The results of the quiz were determined using a function with conditional statements custom to each agent.
```JS
function selectAgent(arr, agents) {
	if (arr.includes('classic') && arr.includes('classic') && arr.includes('classic')) {
		console.log('Brimstone');
		return agents[0];
	}
}
```
The function is meant to take in the `playerChoices` array and the agents array as parameters. A `console.log()` was used to test the logic of the function and when ready, a return of the agent index for the result was implemented.
Because of the questions and choices not perfectly aligning with the number of agents in Valorant, I also implemented a random agent function as a final `else` condition to determine an agent for the play if no standard condition is met.
```Js
function randomAgent() {
	return Math.floor(Math.random() * 24);
}
```
### Results Function
After results were determined, they were added to the DOM of the site using a results function.
```JS
function results(agent) {
	displayResults.style.display = 'block';

	agentName.innerHTML = agent.name;
	agentDescription.innerHTML = agent.description;


	agentLike1.innerHTML = agent.likes[0];
	agentLike2.innerHTML = agent.likes[1];
	agentLike3.innerHTML = agent.likes[2];

	agentPfp.src = agent.pfp;
}
```
### Main Function
My main function combined everything I would need into a rerunable function.
```JS
function main() {
	beginBtn.removeEventListener("click", main);
	
	if (questionPosition == 4) {
		console.log(playerChoices);
		results(selectAgent(playerChoices, agents));
	}
	
	questionPosition++;
}
```
### Reset Button
Lastly, a reset button was created to allow for the quiz to be replayable.
```JS
reset.addEventListener("click", () => {
	card.style.display = 'none';
	displayResults.style.display = 'none';
	
	questionPosition = 1;
	
	playerChoices.pop();
	playerChoices.pop();
	playerChoices.pop();
	
	main();
});
```
## Final Thoughts
This was my most intricate project in JavaScript as of July 2024. The quiz made use out of object oriented programming and a web page as a UI for an application. It was a lot of fun to play and a lot of fun to make.