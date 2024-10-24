function censored(string, censored) {

    let newWord = "";
    for (let i = 0; i < censored.length; i ++ ) {
        newWord += "*";
    }
    while (string.includes(censored)) {
        string = string.replace(censored, newWord);
    }
    console.log(string);

}

