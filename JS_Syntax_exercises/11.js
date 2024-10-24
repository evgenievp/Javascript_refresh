function solve(speed, town) {

    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let obj = {
        "motorway": motorway, 
        "interstate": interstate, 
        "city": city, 
        "residential": residential,
    };
    let maxSpeed = parseInt(obj[town]);
    let status = '';

    if (speed <= maxSpeed) {
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    }
    else {
        let difference = speed - maxSpeed;
        if (difference <= 20) {
            status = "speeding";
        }
        else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
        }
        else {
            status = "reckless driving";
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
    }

}
