function calculator(x1, operator, x2) {

    if (operator === "+") {
        console.log(`${(x1 + x2).toFixed(2)}`);
    }
    else if (operator === "-") {
        console.log(`${(x1 - x2).toFixed(2)}`);
    }
    else if (operator === "*") {
        console.log(`${(x1 * x2).toFixed(2)}`);
    }
    else if (operator === "/") {
        if (x2 !== 0) {
            console.log(`${(x1 / x2).toFixed(2)}`);
        }
        else {
            console.log(`Cannot divide by zero!`);
        }
    }

}

calculator(25.5,
    '-',
    3
    )