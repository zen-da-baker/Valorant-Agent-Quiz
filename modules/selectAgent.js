function selectAgent(arr, agents) {
    if (arr.includes('classic' && 'classic' && 'classic')) {
        console.log('Brimstone');
        return agents[0];
    } else if (arr.includes('fun' && 'fun' && 'team')) {
        console.log('Phoenix');
        return agents[1];
    } else if (arr.includes('team' && 'team' && 'team')) {
        console.log('Sage');
        return agents[2];
    } else if (arr.includes('serious' && 'techie' && 'independent')) {
        console.log('Sova');
        return agents[3];
    } else if (arr.includes('serious' && 'serious' && 'classic')) {
        console.log('Viper');
        return agents[4];
    } else if (arr.includes('team' && 'fun' && 'techie')) {
        console.log('Cypher');
        return agents[5];
    } else if (arr.includes('serious' && 'serious' && 'serious')) {
        console.log('Reyna');
        return agents[6];
    } else if (arr.includes('techie' && 'techie' && 'techie')) {
        console.log('Killjoy');
        return agents[7];
    } else if (arr.includes('techie' && 'techie' && 'independent')) {
        console.log('Breach');
        return agents[8];
    } else if (arr.includes('independent' && 'independent' && 'independent')) {
        console.log('Omen');
        return agents[9];
    } else if (arr.includes('charming' && 'independent' && 'classic')) {
        console.log('Jett');
        return agents[10];
    } else if (arr.includes('techie' && 'classic' && 'fun')) {
        console.log('Raze');
        return agents[11];
    } else if (arr.includes('classic' && 'strict' && 'serious')) {
        console.log('Skye');
        return agents[12];
    } else if (arr.includes('independent' && 'independent' && 'strict')) {
        console.log('Yoru');
        return agents[13];
    } else if (arr.includes('classic' && 'classic' && 'charming')) {
        console.log('Astra');
        return agents[14];
    } else if (arr.includes('strict' && 'strict' && 'strict')) {
        console.log('Kay/o');
        return agents[15];
    } else if (arr.includes('strict' && 'strict' && 'serious')) {
        console.log('Chamber');
        return agents[15];
    } else if (arr.includes('fun' && 'charming' && 'team')) {
        console.log('Neon');
        return [16];
    } else if (arr.includes('independent' && 'team' && 'strict')) {
        console.log('Fade');
        return [17];
    } else if (arr.includes('charming' && 'charming' && 'charming')) {
        console.log('Harbor');
        return [18];
    } else if (arr.includes('charming' && 'charming' && 'fun')) {
        console.log('Gekko');
        return [19];
    } else if (arr.includes('charming' && 'charming' && 'fun')) {
        console.log('Gekko');
        return [20];
    } else if (arr.includes('team' && 'team' && 'techie')) {
        console.log('Deadlock');
        return [21];
    } else if (arr.includes('strict' && 'serious' && 'charming')) {
        console.log('Iso');
        return [22];
    } else if (arr.includes('fun' && 'fun' && 'fun')) {
        console.log('Clove');
        return agents[23];
    } else {
        console.log('Random agent selected');
        return agents[randomAgent()];
    }
}

export { selectAgent };