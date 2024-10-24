function solve(number) {

    for (let times = 1; times <= 10; times ++) {
        let product = times * number;
        console.log(`${times} X ${number} = ${product}`);
    }

}

solve(10);