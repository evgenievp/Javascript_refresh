function search(sentence, searchedWord) {
    let count = 0;
    let words = sentence.split(" ");
    for (let word of words) {
        if (word === searchedWord) {
            count += 1
        }
    }
    console.log(count);

}


search('This is a word and it also is a sentence',
'is');