// Import agent class
import { Agent } from './agentClass.js';

// Agent objects constructed
const brimstone = new Agent(
    'Brimstone', 
    'A trustworthy agent who uses his years of experience to guide his decisions.', 
    ['Saturday BBQs', 'Classic cars', 'Plain coffee'], 
    ['His bad back', 'Ipad kids', 'Whinners'],
    'classic'
);

const phoenix = new Agent(
    'Phoenix', 
    'A fun loving jokester with a flaming pashion for protecting his team.', 
    ['serious', '', ''], 
    ['fun', 'charming', 'independent'],
    'fun'
);

const sage = new Agent('Sage', 
    'Agent description', 
    ['charming'], 
    ['fun', 'charming', 'independent'],
    'team'
);

const sova = new Agent('Sova', 
    'Agent description', 
    ['charming'], 
    ['fun', 'charming', 'independent'],
    'serious'
);

const viper = new Agent('Viper', 
    'Agent description', 
    ['classic'], 
    ['fun', 'charming', 'independent'],
    'serious'
);

const cypher = new Agent('Cypher', 
    'Agent description', 
    ['classic'], 
    ['fun', 'charming', 'independent'],
    'team'
);

const reyna = new Agent('Reyna', 
    'Agent description', 
    ['techie'], 
    ['fun', 'charming', 'independent'],
    'serious'
);

const killjoy = new Agent('Killjoy', 
    'Agent description', 
    ['techie'], 
    ['fun', 'charming', 'independent'],
    'techie'
);

const breach = new Agent('Breach', 
    'Agent description', 
    ['fun'], 
    ['fun', 'charming', 'independent'],
    'techie'
);

const omen = new Agent('Omen', 
    'Agent description', 
    ['fun'], 
    ['fun', 'charming', 'independent'],
    'independent'
);

const jett = new Agent('Jett', 
    'Agent description', 
    ['independent'], 
    ['fun', 'charming', 'independent'],
    'charming'
);

const raze = new Agent('Raze', 
    'Agent description', 
    ['independent'], 
    ['fun', 'charming', 'independent'],
    'techie'
);

const skye = new Agent('Skye', 
    'Agent description', 
    ['team'], 
    ['fun', 'charming', 'independent'],
    'classic'
);

const yoru = new Agent('Yoru', 
    'Agent description', 
    ['team'], 
    ['fun', 'charming', 'independent'],
    'independent'
);

const astra = new Agent('Astra', 
    'Agent description', 
    ['strict'], 
    ['fun', 'charming', 'independent'],
    'classic'
);

const kayo = new Agent('Kay/o', 
    'Agent description', 
    ['strict'], 
    ['fun', 'charming', 'independent'],
    'strict'
);

const chamber = new Agent('Chamber', 
    'Agent description', 
    ['serious'], 
    ['fun', 'charming', 'independent'],
    'strict'
);

const neon = new Agent('Neon', 
    'Agent description', 
    ['charming'], 
    ['fun', 'charming', 'independent'],
    'fun'
);

const fade = new Agent('Fade', 
    'Agent description', 
    ['classic'], 
    ['fun', 'charming', 'independent'],
    'independent'
);

const harbor = new Agent('Harbor', 
    'Agent description', 
    ['fun'], 
    ['fun', 'charming', 'independent'],
    'charming'
);

const gekko = new Agent('Gekko', 
    'Agent description', 
    ['strict'], 
    ['fun', 'charming', 'independent'],
    'charming'
);

const deadlock = new Agent('Deadlock', 
    'Agent description', 
    ['techie'], 
    ['fun', 'charming', 'independent'],
    'team'
);

const iso = new Agent('Iso', 
    'Agent description', 
    ['independent'], 
    ['fun', 'charming', 'independent'],
    'strict'
);

const clove = new Agent('Clove', 
    'Agent description', 
    ['team'], 
    ['fun', 'charming', 'independent'],
    'fun'
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