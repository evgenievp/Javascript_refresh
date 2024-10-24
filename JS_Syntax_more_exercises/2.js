function extractAndConvertToUpper(text) {
    let words = text.match(/\w+/g);
    
    let upperWords = words.map(word => word.toUpperCase());

    console.log(upperWords.join(', '));
}


