function solve(one, two, operator) {

    let obj = {
        'multiply': one * two,
        'divide': one / two,
        'add': one + two,
        'subtract': one - two
    };

    console.log(obj[operator]);
}
