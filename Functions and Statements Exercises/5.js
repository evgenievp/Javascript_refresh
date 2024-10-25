function palindrometester(numbers) {

    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;

    return numbers.map(isPalindrome).join('\n');
    
}
