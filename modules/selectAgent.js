function selectAgent(arr, agents) {
    if (arr.includes('classic' && 'classic' && 'classic')) {
        console.log('Brimstone');
        return agents[0];
    } else
    
    if (arr.includes('fun' && 'fun' && 'team')) {
        console.log('Phoenix');
        return agents[1];
    } else
    
    if (arr.includes('team' && 'team' && 'team')) {
        console.log('Sage');
        return agents[2];
    } else
    
    if (arr.includes('serious' && 'techie' && 'independent')) {
        console.log('Sova');
        return agents[3];
    } else
    
    if (arr.includes('serious' && 'serious' && 'classic')) {
        console.log('Viper');
        return agents[4];
    } else
    
    if (arr.includes('team' && 'fun' && 'techie')) {
        console.log('Cypher');
        return agents[5];
    } else
    
    if (arr.includes('serious' && 'serious' && 'serious')) {
        console.log('Reyna');
        return agents[6];
    } else
    
    if (arr.includes('techie' && 'techie' && 'techie')) {
        console.log('Killjoy');
        return agents[7];
    } else
    
    
    
    if (arr.includes('fun' && 'fun' && 'fun')) {
        console.log('Clove');
        return agents[23];
    } else {
        console.log('Random agent selected');
        return agents[randomAgent()];
    }
}

export { selectAgent };