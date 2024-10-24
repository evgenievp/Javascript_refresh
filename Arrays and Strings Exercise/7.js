function checkString(word, text) {
 
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes(lowerCaseWord)) {
        console.log(word.toLowerCase);
    } else {
        console.log(`${word.toLowerCase()} not found!`);
    }
    
}


checkString('javascript',
'JavaScript is the best programming language'
);