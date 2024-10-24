function digits(num) {

    let sum = 0;

    let str = String(num);

    for (let i = 0; i < str.length; i ++) {
        sum += parseInt(str[i]);

    }

    console.log(sum);

}

