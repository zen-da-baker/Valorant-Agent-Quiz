// Import agent class
import { Agent } from './agentClass.js';

// Agent objects constructed
const brimstone = new Agent(
    'Brimstone', 
    1, 1, 4, 4, 2, 4, 1, 3, 
    'Brimstone is a trustworthy agent who. A big fan of oldies. Allows follows the rules.', 
    'serious', 
    ['fun', 'charming', 'independent'],
);

const phoenix = new Agent(
    'Phoenix', 
    4, 4, 2, 1, 2, 3, 1, 4, 
    'Agent description', 
    'serious', 
    ['fun', 'charming', 'independent'],
);

const sage = new Agent('Sage', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'charming', 
    ['fun', 'charming', 'independent'],
);

const sova = new Agent('Sova', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'charming', 
    ['fun', 'charming', 'independent'],
);

const viper = new Agent('Viper', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'classic', 
    ['fun', 'charming', 'independent'],
);

const cypher = new Agent('Cypher', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'classic', 
    ['fun', 'charming', 'independent'],
);

const reyna = new Agent('Reyna', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'techie', 
    ['fun', 'charming', 'independent'],
);

const killjoy = new Agent('Killjoy', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'techie', 
    ['fun', 'charming', 'independent'],
);

const breach = new Agent('Breach', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'fun', 
    ['fun', 'charming', 'independent'],
);

const omen = new Agent('Omen', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'fun', 
    ['fun', 'charming', 'independent'],
);

const jett = new Agent('Jett', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'independent', 
    ['fun', 'charming', 'independent'],
);

const raze = new Agent('Raze', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'independent', 
    ['fun', 'charming', 'independent'],
);

const skye = new Agent('Skye', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'team', 
    ['fun', 'charming', 'independent'],
);

const yoru = new Agent('Yoru', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'team', 
    ['fun', 'charming', 'independent'],
);

const astra = new Agent('Astra', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'strict', 
    ['fun', 'charming', 'independent'],
);

const kayo = new Agent('Kay/o', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'strict', 
    ['fun', 'charming', 'independent'],
);

const chamber = new Agent('Chamber', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'serious', 
    ['fun', 'charming', 'independent'],
);

const neon = new Agent('Neon', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'charming', 
    ['fun', 'charming', 'independent'],
);

const fade = new Agent('Fade', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'classic', 
    ['fun', 'charming', 'independent'],
);

const harbor = new Agent('Harbor', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'fun', 
    ['fun', 'charming', 'independent'],
);

const gekko = new Agent('Gekko', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'strict', 
    ['fun', 'charming', 'independent'],
);

const deadlock = new Agent('Deadlock', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'techie', 
    ['fun', 'charming', 'independent'],
);

const iso = new Agent('Iso', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'independent', 
    ['fun', 'charming', 'independent'],
);

const clove = new Agent('Clove', 
    1, 1, 1, 1, 1, 1, 1, 1, 
    'Agent description', 
    'team', 
    ['fun', 'charming', 'independent'],
);

const agents = [
    brimstone, 
    phoenix, 
    sage, 
    sova, 
    viper, 
    cypher, 
    reyna, 
    killjoy, 
    breach, 
    omen, 
    jett, 
    raze, 
    skye, 
    yoru, 
    astra, 
    kayo, 
    chamber, 
    neon, 
    fade, 
    harbor, 
    gekko, 
    deadlock, 
    iso, 
    clove
];

/* For loop for finding likes for all agents

for (let i = 0; i < agents.length; i++) {
    for (let j = 0; j < agents.length; j++) {
        for (let a = 0; a < agents[i].likes.length; a++) {
            for (let b = 0; b < agents[j].likes.length; b++) {
                if (agents[i].likes[a] == agents[j].likes[b]) {
                    agents[i].pair.push(agents[j].name);
                }
            }
        }
    }
}
*/

export { agents };