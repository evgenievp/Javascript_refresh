function modernTimes(string) {

    string = string.split(" ");
    for (let word of string) {
        if (word.startsWith("#") && word.length > 1) {
            checkWord = word.slice(1);
            if (/^[A-Za-z]+$/.test(checkWord)) {
                console.log(checkWord);
            }
        }
    }

}



modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');