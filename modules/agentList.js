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
    'A fun loving jokester with a flaming passion for protecting his team.', 
    ['Fresh sneakers', 'Glorious memes', 'Sports'], 
    ['Offices', 'Snow', 'Bugs'],
    'fun'
);

const sage = new Agent('Sage', 
    'Team mother and expert healer that will do anything for her team.', 
    ['Calligraphy', 'Beach trips', 'Chonky jewelry'], 
    ['Selfishness', 'Lotteries', 'Big cities'],
    'team'
);

const sova = new Agent('Sova', 
    'A self-reliant archer from the frigid tundra.', 
    ['Snow', 'Hats', 'Chocolate Babka'], 
    ['Bears', 'Barbers', 'Gambling'],
    'serious'
);

const viper = new Agent('Viper', 
    'A self described monster that hides her soft side behind a cloud of poison.', 
    ['Traps', 'Bagels', 'Plushies'], 
    ['Smell of hear', 'Rodents', 'Ice cream'],
    'serious'
);

const cypher = new Agent('Cypher', 
    'The ultimate computer geek. Period.', 
    ['Chess', 'Passwords', 'CRT TVs'], 
    ['Sharing', 'Secrets', 'Sailing'],
    'team'
);

const reyna = new Agent('Reyna', 
    'A nightmare for her enemies with a blinding eye for revenge.', 
    ['Tattoos', 'Revenge', 'Hair dye'], 
    ['Technology', 'Optimism', 'Dirty tricks'],
    'serious'
);

const killjoy = new Agent('Killjoy', 
    'A young scientist who uses programming to solve any problem.', 
    ['Robots', 'Lentil soup', 'Legos'], 
    ['Pools', 'Parties', 'Google Maps haters'],
    'techie'
);

const breach = new Agent('Breach', 
    'Agent description', 
    ['Robots'], 
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
    ['Adobo'], 
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