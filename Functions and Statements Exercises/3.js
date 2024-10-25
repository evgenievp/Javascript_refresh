function chars(a, b) {

    let num = a.charCodeAt(0);
    let num1 = b.charCodeAt(0);
    let ls = [];


    if (num1 < num) {
        let b = num;
        num = num1;
        num1 = b;
    }


    for (let i = num + 1; i < num1; i ++) {
        let n = String.fromCharCode(i);
        ls.push(n);
    }

    console.log(ls.join(" "));

}

