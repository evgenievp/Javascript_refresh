function loader(num) {

    let load = [];

    let percent = num / 10;

    for (let i = 1; i <= 10; i ++) {
        if (i <= percent) {
            load.push("%");
        }
        else {
            load.push(".");
        }
    }
    if (num === 100) {
        console.log(`100% Complete!`);
        consoel.log(`[${load.join("")}]`);
    }
    else {
        console.log(`${num}% [${load.join("")}]`);
        console.log("Still loading...");
    }
}