function factorialDivision(num1, num2) {

    function factorial(num) {
        if (num > 1) {
            return factorial(num - 1) * num;
        }
        else {
            return num;
        }
    }

    let a = factorial(num1);
    let b = factorial(num2);
    let res = a / b;
    console.log(res.toFixed(2));

}
