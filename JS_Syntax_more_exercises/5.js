function solve(spice) {

    let total = 0;
    let days = 0;
    while (spice >= 100) {
        days ++;
        total += spice;
        spice -= 10;
        total -= 26;
    }
    if (total >= 25) {
        total -= 26;
    }
    
    console.log(days);
    console.log(total);


}