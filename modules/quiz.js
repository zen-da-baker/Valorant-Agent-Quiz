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

    choice5() {
        playerChoices.push(this.trait5);
    }

    choice6() {
        playerChoices.push(this.trait6);
    }

    choice7() {
        playerChoices.push(this.trait7);
    }

    choice8() {
        playerChoices.push(this.trait8);
    }
}

const question1 = new Question(
    "Question",

    "1",
    'fun', 

    "2",
    'charming', 

    "3",
    'serious', 

    "4",
    'strict', 

    "5",
    'techie', 

    "6",
    'classic', 

    "7",
    'independent', 

    "8",
    'team'
)

const question2 = new Question(
    "Question",

    "",
    'fun', 

    "",
    'charming', 

    "",
    'serious', 

    "",
    'strict', 

    "",
    'techie', 

    "",
    'classic', 

    "",
    'independent', 

    "",
    'team'
)

const question3 = new Question(
    "Question",

    "",
    'fun', 

    "",
    'charming', 

    "",
    'serious', 

    "",
    'strict', 

    "",
    'techie', 

    "",
    'classic', 

    "",
    'independent', 

    "",
    'team'
)

const questions = [question1, question2, question3];

export { questions };