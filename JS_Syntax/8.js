function area(param) {
    let species = typeof(param);

    if (species === "number") {
        let res = Math.PI * (param ** 2);
        let result = res.toFixed(2);
        console.log(result);
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${species}.`);
    }
        
}
