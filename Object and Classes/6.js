function solve(arr) {

    let meetings = { };

    for (let meet of arr) {
        let [ day, person ] = meet.split(" ");

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }

        else {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }

}
