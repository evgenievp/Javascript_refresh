function login(array) {
    let user = array.shift();

    let password = user.split("");
    password = password.reverse();
    password = password.join("");
    let loggedIn = false;
    count = 4; 
    while (array.length > 0) {
    
        count -= 1;
        if (array.shift() === password) {
            loggedIn = true;
            console.log(`User ${user} logged in.`);
            break;
        }
        if (count == 0 && !loggedIn) {
            console.log(`User ${user} blocked!`);
            break;
        }
        else {
            console.log("Incorrect password. Try again.");

        }

    }

}



login(['sunny','rainy','cloudy','sunny','not sunny']);