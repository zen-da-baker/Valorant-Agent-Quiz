// Import agent class
import { Agent } from './agentClass.js';

// Agent objects constructed
const brimstone = new Agent(
    'Brimstone', 
    'Brimstone is a trustworthy agent who. A big fan of oldies. Allows follows the rules.', 
    ['Cheese pizza', 'Classic cars', 'Plain coffee'], 
    ['His bad back', 'Ipad kids', 'Whinners'],
    'Other old souls'
);

const phoenix = new Agent(
    'Phoenix', 
    'Agent description', 
    ['serious'], 
    ['fun', 'charming', 'independent'],
);

const sage = new Agent('Sage', 
    'Agent description', 
    ['charming'], 
    ['fun', 'charming', 'independent'],
);

const sova = new Agent('Sova', 
    'Agent description', 
    ['charming'], 
    ['fun', 'charming', 'independent'],
);

const viper = new Agent('Viper', 
    'Agent description', 
    ['classic'], 
    ['fun', 'charming', 'independent'],
);

const cypher = new Agent('Cypher', 
    'Agent description', 
    ['classic'], 
    ['fun', 'charming', 'independent'],
);

const reyna = new Agent('Reyna', 
    'Agent description', 
    ['techie'], 
    ['fun', 'charming', 'independent'],
);

const killjoy = new Agent('Killjoy', 
    'Agent description', 
    ['techie'], 
    ['fun', 'charming', 'independent'],
);

const breach = new Agent('Breach', 
    'Agent description', 
    ['fun'], 
    ['fun', 'charming', 'independent'],
);

const omen = new Agent('Omen', 
    'Agent description', 
    ['fun'], 
    ['fun', 'charming', 'independent'],
);

const jett = new Agent('Jett', 
    'Agent description', 
    ['independent'], 
    ['fun', 'charming', 'independent'],
);

const raze = new Agent('Raze', 
    'Agent description', 
    ['independent'], 
    ['fun', 'charming', 'independent'],
);

const skye = new Agent('Skye', 
    'Agent description', 
    ['team'], 
    ['fun', 'charming', 'independent'],
);

const yoru = new Agent('Yoru', 
    'Agent description', 
    ['team'], 
    ['fun', 'charming', 'independent'],
);

const astra = new Agent('Astra', 
    'Agent description', 
    ['strict'], 
    ['fun', 'charming', 'independent'],
);

const kayo = new Agent('Kay/o', 
    'Agent description', 
    ['strict'], 
    ['fun', 'charming', 'independent'],
);

const chamber = new Agent('Chamber', 
    'Agent description', 
    ['serious'], 
    ['fun', 'charming', 'independent'],
);

const neon = new Agent('Neon', 
    'Agent description', 
    ['charming'], 
    ['fun', 'charming', 'independent'],
);

const fade = new Agent('Fade', 
    'Agent description', 
    ['classic'], 
    ['fun', 'charming', 'independent'],
);

const harbor = new Agent('Harbor', 
    'Agent description', 
    ['fun'], 
    ['fun', 'charming', 'independent'],
);

const gekko = new Agent('Gekko', 
    'Agent description', 
    ['strict'], 
    ['fun', 'charming', 'independent'],
);

const deadlock = new Agent('Deadlock', 
    'Agent description', 
    ['techie'], 
    ['fun', 'charming', 'independent'],
);

const iso = new Agent('Iso', 
    'Agent description', 
    ['independent'], 
    ['fun', 'charming', 'independent'],
);

const clove = new Agent('Clove', 
    'Agent description', 
    ['team'], 
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