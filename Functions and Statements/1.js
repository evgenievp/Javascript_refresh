function grade(val) {

    if (val < 3.00) {
        console.log(`Fail (2)`);
    }
    else if (val < 3.5) {
        console.log(`Poor (${val.toFixed(2)})`);
    }
    else if (val < 4.5) {
        console.log(`Good (${val.toFixed(2)})`);
    }
    else if (val < 5.5) {
        console.log(`Very good (${val.toFixed(2)})`);
    }
    else if (val >= 5.5 && val <= 6.0) {
        console.log(`Excellent (${val.toFixed(2)})`);
    }

}
