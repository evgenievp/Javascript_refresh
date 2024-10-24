function rotate(arr, times) {

    for (let rotations = 0; rotations < times; rotations ++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));

}


rotate([51, 47, 32, 61, 21], 2);