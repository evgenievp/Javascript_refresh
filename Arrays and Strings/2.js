function reverseArr(num, arr) {
    arr = arr.slice(0, num);
    let finalArr = [];
    while (arr.length > 0) {
        finalArr.push(arr.pop());
    }
    finalArr = finalArr.join(" ");
    console.log(finalArr);

}

reverseArr(3, [10, 20, 30, 40, 50]);