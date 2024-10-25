function solve(param) {

    let params = JSON.parse(param);


    for (let [key, value] of Object.entries(params)) {
        console.log(`${key}: ${value}`);
    }
}