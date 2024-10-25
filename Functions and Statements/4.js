function solve(thing, qty) {

    let price = 0;

    switch (thing) {
        case "coffee": price = 1.5; break;
        case 'water': price = 1; break;
        case 'coke': price = 1.4;break;
        case 'snacks': price = 2; break;
    }
    let res = qty * price;
    console.log(res.toFixed(2));

}
