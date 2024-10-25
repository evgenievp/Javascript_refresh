function perfectNumber(num) {

    let divisors = [];

    for (let i = 1; i < num; i ++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }
    res = 0;
    for (let num of divisors) {
        res += parseInt(num);
    }
    if (num === res) {
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`);
    }
}