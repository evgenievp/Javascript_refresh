function solve(arr) {
    
    let obj = { };

    for (let key of arr) {
        obj[key] = obj.length;
    }

    for (let key in obj) {
        console.log(`Name: ${key} -- Personal Number: ${key.length}`);
    }
}