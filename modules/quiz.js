class Question {
    constructor(msg, text1, trait1, text2, trait2, text3, trait3, text4, trait4) {
        this.msg = msg;

        this.text1 = text1;
        this.trait1 = trait1;

        this.text2 = text2;
        this.trait2 = trait2;

        this.text3 = text3;
        this.trait3 = trait3;

        this.text4 = text4;
        this.trait4 = trait4;
    }

    choice1() {
        playerChoices.push(this.trait1);
    }

    choice2() {
        playerChoices.push(this.trait2);
    }

    choice3() {
        playerChoices.push(this.trait3);
    }

    choice4() {
        playerChoices.push(this.trait4);
    }
}

const question1 = new Question(
    "What is your favorite color?",

    "red",
    "fun",

    "green",
    "classic",

    "neon",
    "techie",

    "orange",
    "serious"
)

const questions = [question1];

let playerChoices = [];

export { questions, playerChoices };