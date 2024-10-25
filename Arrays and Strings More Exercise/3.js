function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    
    while (base > 2) {
        height += 1;

        let innerArea = (base - 2) * (base - 2);
        let outerPerimeter = (base * base) - innerArea;
        

        stone += innerArea * increment;
        
  
        if (height % 5 === 0) {
            lapis += outerPerimeter * increment;  
        } else {
            marble += outerPerimeter * increment; 
        }


        base -= 2;
    }


    height += 1;
    gold = (base * base) * increment;


    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}




pyramid(11, 1);