// Agent class used for agent objects of the quiz, default stats of 1
export default class Agent {
    constructor(name, fun = 1, charming = 1, serious = 1, strict = 1, techie = 1, classic = 1, independent = 1, team = 1) {
        this.name = name;
        this.pfp = `./images/${this.name}.jpg`;
        this.fun = fun;
        this.charming = charming;
        this.serious = serious;
        this.strict = strict;
        this.techie = techie;
        this.classic = classic;
        this.independent = independent;
        this.team = team;
    }
}

