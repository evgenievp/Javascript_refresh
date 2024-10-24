function vacation(count, groupPeople, dayWeek) {

    let pricePerOne = 0;

    if (groupPeople === "Students") {

        if (dayWeek === "Friday") {
            pricePerOne = 8.45;
        }
        else if (dayWeek === "Saturday") {
            pricePerOne = 9.80;
        }
        else if (dayWeek == 'Sunday') {
            pricePerOne = 10.46;
        }
    }

    else if (groupPeople === "Business") {
        if (dayWeek === "Friday") {
            pricePerOne = 10.9;
        }
        else if (dayWeek === "Saturday") {
            pricePerOne = 15.6;
        }
        else if (dayWeek == 'Sunday') {
            pricePerOne = 16;
        }

    }
    
    else if (groupPeople === "Regular") {

        if (dayWeek === "Friday") {
            pricePerOne = 15;
        }
        else if (dayWeek === "Saturday") {
            pricePerOne = 20;
        }
        else if (dayWeek == 'Sunday') {
            pricePerOne = 22.5;
        }

    }
    
    let totalPrice = pricePerOne * count;

    if (groupPeople === "Students" && count >= 30)
    {
        totalPrice *= 0.85;
    }
    else if (groupPeople === "Business" && count >= 100) {
        totalPrice -= (pricePerOne * 10);
    }
    
    else if (groupPeople === "Regular" && (count >= 10 && count <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30,
    "Students",
    "Sunday"
    );

vacation(40,
    "Regular",
    "Saturday"
    );