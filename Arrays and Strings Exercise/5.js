function revealWords(string1, string2) {

    string1 = string1.split(", "); 
    string2 = string2.split(" "); 


    for (let word of string1) {
        let wordLength = word.length;

        for (let i = 0; i < string2.length; i++) {
            let wordreplace = string2[i];
            if (wordreplace.length === wordLength && wordreplace === "*".repeat(wordLength)) {
                string2[i] = word;
            }
        }
    }


    console.log(string2.join(" "));
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
);
