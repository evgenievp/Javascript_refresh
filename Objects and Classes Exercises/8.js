function piccolo(input) {

    let carNumbers = [];

    for (const line of input) {
        let [ command, carNum] = line.split(", ");

        if (command === "IN" && !carNumbers.includes(carNum)){
            carNumbers.push(carNum);
        }
        else if (command === "OUT" && carNumbers.includes(carNum)) {
            let index  = carNumbers.indexOf(carNum);
            carNumbers.splice(index, 1);
        }
    }

    if (carNumbers.length === 0) {
        console.log("Parking Lot is Empty");
    }
    else {
        sortedNumbers = carNumbers.sort((carA, carB) => carA.localeCompare(carB));
        sortedNumbers.forEach((carNum) => {
            console.log(carNum)
        })
    }

}
