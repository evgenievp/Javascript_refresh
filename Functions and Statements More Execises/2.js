function modification(n) {

    let num = String(n);

    function sum(num) {
        let res = 0;
        for (let i = 0; i < num.length; i ++) {
            res += parseInt(num[i]);
        }
        res = res / num.length;
        return res;
    }

    res = sum(num);

    while (res < 5) {
        num = num += "9";
        res = sum(num);

    }
    console.log(num);
}
