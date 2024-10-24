function cook(a, b, c, d ,e, f) {

    let res = parseInt(a);

    let elements = [b, c, d, e, f];

    for (let el of elements) {

        if (el === 'chop') {
            res /= 2;
        }
        else if (el === 'dice') {
            res = Math.sqrt(res);
        }
        else if (el === 'spice') {
            res += 1;
        }
        else if(el === 'bake') {
            res *= 3;
        }
        else if (el === 'fillet') {
            res -= (res * 0.2);
        }
    
        console.log(res);
    }

}

