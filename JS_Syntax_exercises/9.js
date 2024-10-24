function buy(fruit, grams, price) {
    let need = 0;

    need = grams * price;
    
    grams /= 1000;
    need /= 1000;

    console.log(`I need $${need.toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${fruit}.`);


}
