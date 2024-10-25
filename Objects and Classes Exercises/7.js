function solve(input) {

    let obj = {};
    let text = input.toLowerCase();
    let words = text.split(" ");

    for (const word of words) {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1;
        }
        else {
            obj[word] = 1;
        }
    }

    ls = [];

    for (const word in obj) {
        if (parseInt(obj[word]) % 2 !== 0){ 
            ls.push(word)
        }
    }
    console.log(ls.join(" "));


}
