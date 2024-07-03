// Import agent class
import Agent from './agentClass.js';

// Agent objects constructed
const brimstone = new Agent('Brimstone', './images/brimstone.jpg', 1, 1, 4, 4, 2, 4, 1, 3);

const phoenix = new Agent('Phoenix', './images/phoenix', 4, 4, 2, 1, 2, 3, 1, 4);

export const agents = [brimstone, phoenix];