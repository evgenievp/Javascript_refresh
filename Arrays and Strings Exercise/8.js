function splitPascalCase(input) {
    const words = input.split(/(?=[A-Z])/);
    

    console.log(words.join(', '));
}


splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan'); 