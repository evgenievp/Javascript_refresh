function printNth(array, step) {

    let outputArr = [];

    for (let i = 0; i < array.length; i += step) {
        outputArr.push(array[i]);
    }
    return outputArr;

}


printNth(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2
    );