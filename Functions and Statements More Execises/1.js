function carWash(input) {

    let clean = 0;

    for (let command of input) {
        if (command === "soap") {
            clean += 10;
        }
        else if (command === "water") {
            clean += clean * 0.2;
        }
        else if (command === "vacuum cleaner") {
            clean += clean * 0.25;
        }
        else if (command === "mud") {
            clean -= clean * 0.10;
        }
    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`);


}