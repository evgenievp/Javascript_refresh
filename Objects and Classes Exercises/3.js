function store(input, input2) {

    let arr = [...input, ...input2];
    let obj = {};

    for (let i = 0; i < arr.length - 1; i += 2) {
        if (!obj.hasOwnProperty(arr[i])) {
            let num = parseInt(arr[i + 1]);
            obj[arr[i]] = num;
        }
        else {
            let num = parseInt(arr[i + 1]);
            obj[arr[i]] += num;
        }
    }
    for (let word in obj) {
        console.log(`${word} -> ${obj[word]}`);
    }

}
