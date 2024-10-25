function heroes(input) {

    let heroesData = [];

    for (line of input) {
        let [ hero, level, items ] = line.split(" / ");

        level = Number(level);
        heroesData.push({ hero, level, items });
        
    }
    let sortedHeroes = heroesData.sort((heroA, heroB) => (heroA.level - heroB.level)); 

    for ( const { hero, level, items} of sortedHeroes) {
        console.log(`Hero: ${hero}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    }

}
