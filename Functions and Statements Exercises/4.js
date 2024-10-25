function sum(text) {

    let str = String(text);

    let odd = 0;
    let even = 0;

    for (let i = 0; i < str.length; i++) {
        
        let num = parseInt(str[i]);

        if (num % 2 == 0) {
            even += num;
        }
        else {
            odd += num;
        }

    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
