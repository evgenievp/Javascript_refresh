function isProductPositive(numOne, numTwo, numThree) {
    let negativeCount = 0;
    if (numOne < 0) negativeCount += 1;
    if (numTwo < 0) negativeCount += 1;
    if (numThree < 0) negativeCount += 1;

    let negative =  negativeCount % 2 === 0 ? "Positive" : "Negative";
    console.log(negative);
}