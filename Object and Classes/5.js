function solve(arr) {

    let phoneBook = { };

    for (let key of arr) {

        let [ name, num ] = key.split(" ");

        phoneBook[name] = num;

    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }


}
