function solve(lost, helmetPrice, swordPrice, shieldPrice, armourPrice) {

    let expenses = 0;
    let count = 0;

    for (let i = 1; i <= lost; i ++) {

        if (i % 2 == 0) {
            expenses += helmetPrice;
        }
        if (i % 3 == 0) {
            expenses += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shieldPrice;
            count ++;
        }
        if (count == 2) {
            expenses += armourPrice;
            count = 0;
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);


}
