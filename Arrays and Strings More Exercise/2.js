function calculateBitcoins(goldMinedPerDay) {
    const goldToLvRate = 67.51; 
    const bitcoinPrice = 11949.16; 

    let totalLv = 0; 
    let bitcoinsBought = 0;
    let dayOfFirstBitcoin = 0; 
    let foundFirstBitcoin = false;

    for (let day = 1; day <= goldMinedPerDay.length; day++) {
        let minedGold = goldMinedPerDay[day - 1]; 
        
        if (day % 3 === 0) {
            minedGold *= 0.7; 
        }

        totalLv += minedGold * goldToLvRate;

      
        while (totalLv >= bitcoinPrice) {
            totalLv -= bitcoinPrice;
            bitcoinsBought++; 

            if (!foundFirstBitcoin) {
                dayOfFirstBitcoin = day;
                foundFirstBitcoin = true;
            }
        }
    }

    if (foundFirstBitcoin) {
        console.log(`Bought first bitcoin on day ${dayOfFirstBitcoin}`);
    }
    console.log(`Total bitcoins bought: ${bitcoinsBought.toFixed(0)}`);
    console.log(`Left money: ${totalLv.toFixed(2)} lv.`);


}

bitcoinMining([100, 200, 300]);